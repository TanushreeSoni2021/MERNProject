import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/prolist");
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`,{
      method:"delete"
    });
    result = await result.json();
    if(result){
      alert("Product is delete")
      getProducts();
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h2>Product list</h2>
          <div className="product-list">
            <ul>
              <li>S no.</li>
              <li>Name</li>
              <li>Price</li>
              <li>Category</li>
              <li>Company</li>
              <li>Operation</li>
            </ul>

            {products.map((item, index) => {
              return (
                <ul key={item._id}>
                  <li>{index + 1}</li>
                  <li>{item.name}</li>
                  <li>$ {item.price}</li>
                  <li>{item.category}</li>
                  <li>{item.company}</li>
                  <li>
                    <button onClick={() => deleteProduct(item._id)}>
                      Delete
                    </button>
                    <Link to={`/update/${item._id}`} >Update</Link>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
