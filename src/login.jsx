import React, { useEffect, useState, useRef } from "react";
import { createLoginQrKey, createLoginQrImage, checkLoginQr } from "./service";
import { useNavigate } from "react-router-dom";
import storejs from "storejs";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import axios from "axios";

// axios.get("https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1677417600000&endTime=1677417600000")
// .then(res=>{
//   console.log(res);
// })

let Div = styled.div`
width: 100%;
height: 1200px;
  .heard{
    width: 80%;
    margin:6.666667vw auto;
    /* border: 1px solid; */
    display: flex;
    justify-content: space-between;
    .heard_left{
        /* width: 13.333333vw; */
        objectFit: "cover";
          width: "inherit";
          height: "inherit";
        /* height: 40px; */
      align-self: center;
      .icon{
        
        /* border: 1px solid; */
        /* font-size: 40px; */
        width: 5.666667vw;
        height: 5.733333vw;
      }
    }
    .heard_right{
      font-size: 4vw;
    }
  }
  .login{
    margin-top: 16.666667vw;
    display: flex;
    justify-content: center;
    img{
      width: 37.866667vw;
      height: 7.2vw;
    }
  }
  .qr{
    margin:10.666667vw auto ;
    text-align: center;
    border: 1px solid;
    display: flex;
    justify-content: center;
    width: 40vw;
    height: 40vw;
    position:relative;

    .mask{
      width: 40vw;
      height: 40vw;
      background-color: #ddd;
      opacity: 0.6;
      position: absolute;
      display: flex;
      
      .mask_text{
        align-self: center;
        height: 6.666667vw;
        display: flex;
        justify-content: center;
        line-height: 40vw;
        width: 100%;
        color:#fff;
        background-color: red;
        border-radius: 2.666667vw;
      }
    }
  }
  .text{
    text-align: center;
    span{
      color: #2c6aa1;
    }
  }

`

const Login = () => {
  const navigate = useNavigate();
  const unikey = useRef("");
  const timer = useRef(null);
  const qr = useRef("");
  const [status, setStatus] = useState();
  const checkScanStatus = () => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      checkLoginQr({ key: unikey.current,timestamp:Date.now() })
        .then((res) => {
          setStatus(res.data.code);
          if ([800, 803].includes(res.data.code)) clearInterval(timer);
          if (res.data.code === 803) {
            storejs.set("cookie", res.data.cookie);
            navigate("/Home");
          }
        })
        .catch((err) => {
          clearInterval(timer);
        });
    }, 1500);
  };
  useEffect(() => {
    createLoginQrKey()
      .then((res) => (unikey.current = res.data.data.unikey))
      .then((key) => createLoginQrImage({ key, qrimg: true }))
      .then((res) => (qr.current = res.data.data.qrimg))
      .then(() => checkScanStatus())
      .catch((err) => console.log(err));
    return () => clearInterval(timer.current);
  }, []);
  return (
    <Div>
    <div>
      <div className="heard">
        <div className="heard_left">
        <Icon className="icon" icon="ep:arrow-left" />
        </div>
        <div className="heard_right">游客登入</div>
      </div>
      <div className="login">

        <img src="https://admirable-jalebi-ce44af.netlify.app/static/logo.fill.svg" alt="" />

      </div>
    
    <div className="qr">
       {[800, 801].includes(status) ? (
        <div >
          {status === 800 ? <div className="mask">
            <div className="mask_text" onClick={()=>{createLoginQrKey()}} >请求失败请刷新</div>
          </div> : null}
          <img src={qr.current} alt="" />
        </div>
      ) : null}
      {status === 802 ? (
        <img src="https://admirable-jalebi-ce44af.netlify.app/static/queding.png" alt="" />
          
      ) : null}
    </div>
    {[800, 801].includes(status) ? (
               <div className="text">
               使用 &nbsp;
               <span>网易云App</span>
               &nbsp;
               扫码登入
              </div>   
            ) : null}
   
   {status === 802 ? (
         <div className="text">
         扫码成功请在手机上确认
        </div>   
       
      ) : null}
    </div>
    </Div>
  );
};

export default Login;
