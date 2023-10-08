import axios from "axios";
import React, { useState,useEffect} from "react";
import styled from "styled-components";
import { useRef } from 'react'

import { Button, Space, Swiper, Toast } from 'antd-mobile'
import { SearchBarRef } from 'antd-mobile/es/components/search-bar'
import { SwiperRef } from 'antd-mobile/es/components/swiper'

import Carousel from "./home_module/Carousel";
import { ContentOutline} from 'antd-mobile-icons'

import "./download (7)/font_7bu873hb4o6/iconfont.css"
import Iconame from "./home_module/Iconame";
import Recommend from "./home_module/Recommend";
import Newalbum from "./home_module/Newalbum";
import Ranking from "./home_module/Ranking";
import Hottopic from "./home_module/Hottopic";
import Calendar from "./home_module/Calendar";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Fount from "./Fount";
import { Navigate } from "react-router-dom";


let Div = styled.div`

    background-color: #F1F1F1;
.top{
    /* margin-top: 2.666667vw; */
    width: 100%;
    /* border: 1px solid; */
    padding-bottom: 5.666667vw;
    box-sizing: border-box;
    margin-bottom: 2.666667vw;
    /* height: 56vw; */
    // background-color: aqua;

    .top_headr{
        padding: 3vw 0;
        // box-sizing: border-box;
        width: 100%;
        height: 10vw;
        display: flex;
        justify-content: space-around;
        .div1{
            /* font-size: 9.33333vw; */
            font-size:6.933333vw;

            
            /* align-items: center; */
            /* align-self: center; */
        }
        .div2{
            font-size:6.933333vw;
            /* align-self: center; */
        }
        .sous{
            align-items: center;
            width: 75.04vw;
            height: 10.00267vw;
            border: 1px solid;
            display: flex;
            justify-content:space-evenly;
            background: linear-gradient(to left,#f3d9ef,#d9ddfd);
            border-radius: 2.666667vw;
            input{
                background:none;  
                outline:none;  
                border:0px;
                font-size: 4.8vw;
            }
            div{
                font-size:5.00133vw;
            };
        }
    }


}
.congt{
    padding-bottom: 8vw;
}

`;



function Home(){



    
    return   <Div>

<div class="top">
        <div class="top_headr">
             <div class="iconfont icon-gengduo div1"></div> 
           <Link to="/Fount">  <div class="sous">
                <div class="iconfont icon-sousuo"></div> 
                <input type="text" name="" id="" placeholder="Love is Gone" />
                <div class="iconfont icon-saoma"></div> 
             </div></Link>  
         
             <div class="iconfont icon-01 div2"></div> 
        </div>
 </div>


         
            <div className="congt">
            <Carousel/>
            <Iconame/>
            <Recommend/>
            <Newalbum/>
            <Ranking/>
            <Hottopic/>
            <Calendar></Calendar>

            </div>
          


</Div>
}



export default Home