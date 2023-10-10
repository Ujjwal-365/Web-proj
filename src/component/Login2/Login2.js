import React from "react";
import { useState } from "react";
import "./Login2.css";
import womenimg from "../images/women with tab 1.svg";
import gogleimg from "../images/google 1.svg";
import facimg from "../images/facebook 1.svg";
import thunder from "../images/thunderbolt 1.svg";

const Login = () => {

    return(
        
        <div className="outer-container">

            <div className="login-container"></div>

            <div className="image-container">

                <div className="img-container-txt">
                    <p>
                        Very Good <br/>
                        work are <br />
                        waiting for <br />
                        you login <br />
                        Now!!!
                    </p>
                </div>    
                <div className="img-container-img">
                    <img src ={womenimg} alt="" />
                </div>
                 <div className="image-thunder">
                    <img src={thunder} alt="" />
                </div> 

            </div>

        </div>

    );
};
export default Login;
