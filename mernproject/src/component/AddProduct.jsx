import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const inputRef = useRef(null);
  const [image, setImage] = useState('')
  const navigate = useNavigate();
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
        "Content-type": "application/json"
      }
    });
    result = await result.json();
    console.warn(result)
    if (result) {
      navigate('/')
    }
  };

  const handelImageClick = () => {
    inputRef.current.click();
  }

  const handelImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0])
  }

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

            <br />  {/* upload image */}
            <div onClick={handelImageClick} className="form-control"
            >
              {image ? (
                <>
                  <img className="img-display-after " src={URL.createObjectURL(image)} alt="img" />
                  <span className="m-3 text-success fw-bold">Image uploaded</span>
                  <br />
                  <span>if want to change the click again</span>
                </>
              ) : (
                <>
                  <img className="img-display-before" src="uploadingImg.png" alt="img" />
                  <span className="m-3">Upload the image of your product</span>
                </>
              )}
              <input
                type="file"
                ref={inputRef}
                // value={company}
                onChange={handelImageChange}
                style={{ display: "none" }}
              />
            </div>

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
