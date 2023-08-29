import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  // const [Lname , setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate('/');
    }
  })

  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem('user', JSON.stringify(result))
    navigate('/')

  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="forms">
            <h1>Registration</h1>
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First Name"
            />
            <br />
            {/* <input className="form-control" type="text" placeholder="Last Name" /><br /> */}
            <input
              className="form-control"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <br />
            <input
              className="form-control"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <br />
            <button className="btn btn-primary" onClick={collectData}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
