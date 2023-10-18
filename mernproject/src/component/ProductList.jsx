/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);

    try {
      let result = await fetch("http://localhost:5000/prolist", {
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${API_KEY}`, // Include your API key here
        },
      });

      if (!result.ok) {
        throw new Error("Network response was not ok");
      }

      result = await result.json();
      setProducts(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    console.warn(id);
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const handleSearch = async (event) => {
    let key = event.target.value;
    if (key) {
      try {
        let result = await fetch(`http://localhost:5000/search/${key}`);
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        result = await result.json();
        if (result) {
          setProducts(result);
        }
      } catch (error) {
        console.error("Error searching for products:", error);
      }
    } else {
      getProducts();
    }
  };

  return (
    <>
      <div className="container">
        <div className="product-listing mt-5">
          <div className="row">
            <h2>Product list</h2>
            <input
              className="search-box"
              type="text"
              placeholder="Search"
              onChange={handleSearch}
            />

            <div className="product-list">
              <div className="row">
                {loading ? (
                  <div className="loading">
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : products.length > 0 ? (
                  products.map((item, index) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-3 col-sm-1">
                          <div
                            class="card"
                            style={{ width: " 18rem" }}
                            key={item._id}>
                            <img
                              src={`http://localhost:5000/${item?.filepath}`}
                              class="card-img-top"
                              alt="..."
                            />

                            <div class="card-body">
                              <h5 class="card-title">{item.name}</h5>
                              <p class="card-text">{item.price}</p>

                              <p>{item.category}</p>
                              <p>{item.company}</p>
                            </div>
                           <div className="but"> <button
                              className="btn btn-danger del"
                              onClick={() => deleteProduct(item._id)}
                            >
                              Delete
                            </button>
                            <button className="btn btn-primary upd">
                              <a href={`/update/${item._id}`} ></a> Update
                            </button></div>
                          </div>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <div className="no-product">
                    <h1>No product found</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
