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
        throw new Error('Network response was not ok');
      }

      result = await result.json();
      setProducts(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
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
          throw new Error('Network response was not ok');
        }
        result = await result.json();
        if (result) {
          setProducts(result);
        }
      } catch (error) {
        console.error('Error searching for products:', error);
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
            <div className="product-list">
              <input
                className="search-box"
                type="text"
                placeholder="Search"
                onChange={handleSearch}
              />
              <ul>
                <li>S no.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
              </ul>

              {loading ? (
                <div className="loading">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : products.length > 0 ? (
                products.map((item, index) => {
                  return (
                    <ul key={item._id}>
                      <li>{index + 1}.</li>
                      <li>{item.name}</li>
                      <li>$ {item.price}</li>
                      <li>{item.category}</li>
                      <li>{item.company}</li>

                      <li>
                        <button className="btn btn-danger" onClick={() => deleteProduct(item._id)}>
                          Delete
                        </button>
                        <button className="btn btn-primary mx-4">
                          <a href={`/update/${item._id}`}>Update</a>
                        </button>
                      </li>

                    </ul>
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

    </>
  );
};

export default ProductList;