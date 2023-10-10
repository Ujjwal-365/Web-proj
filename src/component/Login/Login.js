import React from "react";
import { useState } from "react";
import "./Login.css";
import womanimg from "../images/women with tab 1.svg";
import gogimg from "../images/google 1.svg";
import facimg from "../images/facebook 1.svg";
import thunder from "../images/thunderbolt 1.svg";

const Login = () => {
  // for store input data
  

  return (
    <div className="containerr">
      <div className="login-containerr">
        <div className="login-containerr-text form">
          <h2>LOGIN</h2>
          <p>How to get started lorem ipsum dolor at?</p>
          <input
            className="user-input"
            name="userName"
            type="text"
            placeholder="Username"
          />
          <input
            className="password-input"
            name="userPassword"
            type="password"
            placeholder="Password"
          />
          <br />
          <button  className="login-btn">Login Now</button>
          <br /> <br />
          <p><strong>Login</strong> with others</p>
          <button className="google-login"><img src={gogimg} alt="icon" /> Login with <strong> google</strong></button>
          <button className="facebook-login"> <img src={facimg} alt="icon" /> Login with <strong>  facebook</strong>   </button>
        </div>
      </div>

      <div className="image-containerr">
        <div className="image-containerr-text">
          <p>
            Very good <br /> works are <br /> waiting for
            <br /> you login <br /> Now!!!
          </p>
          <div className="image-containerr-img">
            <img src={womanimg} alt="Woman with tablet" />
          </div>
          
        </div>
        
      </div>
      <div className="image-thunder">
            <img src={thunder} alt="" />
          </div> 
    </div>
  );
};
export default Login;