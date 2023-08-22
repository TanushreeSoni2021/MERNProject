import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  // const [Lname , setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const collectData =() =>{
    console.log(name, email , password);
  }

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
            <button className="btn btn-primary" onClick={collectData}>Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;