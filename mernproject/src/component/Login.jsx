import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth){
    navigate("/");
    }
  });

  const handelLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if(result.name){
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/")
    }else{
      alert("please fill correct information----")
    }
  };
  return (
    <>
      <div className="container">
      <div className="log mt-5">
        <div className="row">
          <h1>Login</h1>
          <div className="form">
            {/* <form> */}
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
            <button className="btn btn-primary" onClick={handelLogin}>
              Sign up
            </button>
            {/* </form> */}
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;
