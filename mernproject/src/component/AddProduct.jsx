import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const handelAddProduct = async () => {
    console.log(!name);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    console.log(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.JSON;
    console.log(result);
  };
  return (
    <>
      <div className="container">
        <h1>Add Products</h1>
        <div className="row">
          <div className="form">
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
            />
            {error && !name && (
              <span className="input-valid">Enter valid field</span>
            )}
            <br />
            <input
              className="form-control"
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Price"
            />
            {error && !price && (
              <span className="input-valid">Enter valid field</span>
            )}

            <br />
            <input
              className="form-control"
              type="text"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              placeholder="Category"
            />
            {error && !category && (
              <span className="input-valid">Enter valid field</span>
            )}

            <br />
            <input
              className="form-control"
              type="text"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              placeholder="Company"
            />
            {error && !company && (
              <span className="input-valid">Enter valid field</span>
            )}

            <br />
            <button className="btn btn-primary mt-3" onClick={handelAddProduct}>
              Add product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
