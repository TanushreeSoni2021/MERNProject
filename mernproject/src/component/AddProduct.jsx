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
    console.log(!name);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }


    console.log(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"))._id;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('company', company);
    formData.append('userId', userId);
    formData.append('image', file);

    let result = await fetch("http://localhost:5000/add", {
      method: "post",
      body: formData,

    });
    result = await result.json();
    console.warn(result)
    if (result) {
      navigate('/')
    }
  };






  // const handleUpload = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('image', file);

  //     await axios.post('http://localhost:5000/add', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     alert('Image uploaded successfully');
  //   } catch (error) {
  //     console.log(file);
  //     alert('Error uploading image');
  //   }
  // };








  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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
            <input className='form-control' type="file" onChange={handleFileChange} />
            {/* <button onClick={handleUpload}>Upload</button> */}



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
