import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const logIn = (event) => {
    event.stopPropagation()
    const name = document.getElementById("username");
    const password = document.getElementById("password");

    const usernameData = name.value;
    const passwordData = password.value;
    const serverRequest = {"username": usernameData, "password": passwordData}

    axios
        .post('http://localhost:8080/auth/signin', serverRequest,{
              headers: {
                'Content-Type': 'application/json'
              },
        })
        .then((response) => {
          if (response.data.status !== "WRONG"){
          logUserIn(response.data.token,response.data.username)
          }
          else {
            alert("Wrong username or password")
          }
        });
  }


  const logUserIn = (token,username) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username",username);
    window.location.href = '/';
  };

  const logOut = () => {
    localStorage.clear();
    window.location.href = '/login';
  }

  return (
    <React.Fragment>
      <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form">
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">Username:</label>
                    <br />
                    <input autoComplete="off" type="text" name="username" id="username" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">Password:</label>
                    <br />
                    <input type="password" name="password" id="password" className="form-control"/>
                  </div>
                  <div id="register-link" className="text-right">
                    <Link to="/registration" className="text-info">
                      Register here
                    </Link>
                  </div>
                </form>
                <button className="btn btn-info btn-md" onClick={logIn} >Login</button>
                <button className="btn btn-info btn-md" onClick={logOut} >Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
