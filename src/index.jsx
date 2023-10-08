import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css"
import Mv from "./Mv";
import styled from "styled-components";
import Home from "./Home.jsx";
import cs from "./cs"
import Fount from "./Fount";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Login from "./login";




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    
    <BrowserRouter>
          <App/>
      {/* <Login/> */}
    </BrowserRouter>
    
    //  {/* <Home></Home>  */}


    // {/* <Mv></Mv> */}
    // {/* <cs></cs> */}
    //  <Fount/> 


   

 )

