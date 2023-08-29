import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdatePro = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingalPro();
  }, []);

  const getSingalPro = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const handelUpdateProduct = async () => {
    console.log(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json;
    console.log(result);
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Update Products</h1>
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

          <br />
          <button
            className="btn btn-primary mt-3"
            onClick={handelUpdateProduct}
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePro;
