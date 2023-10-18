import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handelAddProduct = async () => {
    if (!name || !price || !category || !company || !file) {
      setError(true);
      return;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('company', company);
    formData.append('userId', userId);
    formData.append('filename', file);

    try {
      const response = await fetch("http://localhost:5000/add", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        navigate('/');
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <>
      <div className="container">
      <div className="addPro mt-5">
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
            <input className='form-control' type="file" onChange={handleFileChange} />
            {file && (
              <div>
                <img className="img-display-after " src={URL.createObjectURL(file)} alt="img" />
              </div>
            )}

            <button className="btn btn-primary mt-3" onClick={handelAddProduct}>
              Add product
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AddProduct;
