import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { SearchBar } from "antd-mobile";
import {  TeamFill, ShopbagOutline, CollectMoneyOutline, AudioFill} from 'antd-mobile-icons'
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'




let Div = styled.div`
background-color: #F3F4F1;
    .heard{

        width: 99vw;
        height: 10vw;
        display: flex;
        justify-content: space-around;
        margin: auto ;
        padding-top: 5.6vw;
        .heard_left{
            align-self: center;
        }
        .arrow{
            width: 8vw;
            height: 8vw;
            align-items: center;
        }
        .search{
            align-self: center;
            width: 72vw;
            height: 10vw;
            --background:#fff;
            --border-radius:6.666667vw
        }
        .heard_right{
           
            align-self: center;
             p{
            
            font-size: 3.733333vw;
        }
        }
       
    }
    .iconloge{
        margin-top: 6.666667vw;
        display: flex;
        div{
            width: 25%;
        
           display: flex;
           justify-content: center;
           .icon_sx{
            color:red;
            font-size: 5.733333vw;
            align-items: center;

           }
           p{
           margin-left: 2.666667vw;
            align-self: center;
            font-size: 3.466667vw;
            font-weight: bold;
           }
        }
    }
    .like{
        width: 96vw;
        height: 6vw;
        /* border: 1px solid; */
        margin:5.666667vw auto 0;
        .like_header{
            display: flex;
            justify-content:space-between;
            .left{
                font-size: 4vw;
                font-weight: bold;
            }
            .right{
                align-self: center;
                .icon{
                    width: 5.066667vw;
                    height: 5.066667vw;
                    color: rgb(172, 175, 174);
                }
            }
        }
        .like_conten{
            display: flex;
            div{
                background-color: #fff;
                padding: 3vw;
                font-size: 3.5vw;
                border-radius:20px;
                margin-right: 2vw;
            }
        }
    }
    .bigbox{
        width:100%;
        /* height:71.424vw; */
        overflow: auto;
     display: flex; 
     white-space: nowrap;
   }
   .bigbox::-webkit-scrollbar { 
  display: none; 
} 
    
    .List{
        /* background-color: #fff; */
        margin-top: 15.666667vw;
        width: 65vw;
        /* border: 1px solid; */
        margin-left: 2.666667vw;
        background-color: #fff;
        
        .list_top{
            padding: 2.666667vw;
            background-color: #fff;
            display: flex;
            border-bottom: 1px solid ;
       
            .top_tit{
                margin-left: 5.666667vw;
                font-size: 4vw;
            }
            .top_text{
                margin-left: 5.333333vw;
                align-self: center;
                background-color: #F3F4F1;
                display: flex;
                .icon{
                    align-self: center;
                    width: 2.666667vw;
                    height: 2.666667vw;
                }
                p{
                    align-self: center;
                    font-size: 3.2vw;
                }
            }

        }
        .Box{
            background-color: #fff;
            margin-left: 5.666667vw;
            .box{
                width: 55.933333vw;
                margin: auto;
                /* margin-left: 3.333333vw; */
                /* border: 1px solid; */
                display: flex;
                margin-top: 2.666667vw;

                .num{
                    font-size: 3.2vw;

                }
                .num1{
                    font-size: 3.2vw;
                    color:red;
                }
                .name{
                    margin-left: 3.666667vw;
                }
            }
        }
    }
`

 function Fount(){

    let [list,setlist] = useState()

    useEffect(()=>{

        axios.get(
            "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=19723756&cookie="
            // "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=3779629&cookie="
            // "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=2884035&cookie="
            // "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=3778678&cookie="
        ).then((res)=>{
            console.log(res);
            setlist(res.data.playlist.tracks)
        })
    },[])

    let [list2,setlist2] = useState()

    useEffect(()=>{

        axios.get(
            // "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=19723756&cookie="
            "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=3779629&cookie="
            // "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=2884035&cookie="
            // "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=3778678&cookie="
        ).then((res)=>{
            console.log(res);
            setlist2(res.data.playlist.tracks)
        })
    },[])
    let [list3,setlist3] = useState()

    useEffect(()=>{

        axios.get(
            // "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=19723756&cookie="
            // "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=3779629&cookie="
            "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=2884035&cookie="
            // "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=3778678&cookie="
        ).then((res)=>{
            console.log(res);
            setlist3(res.data.playlist.tracks)
        })
    },[])
    let [list4,setlist4] = useState()

    useEffect(()=>{

        axios.get(
            // "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=19723756&cookie="
            // "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=3779629&cookie="
            // "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=2884035&cookie="
            "https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/detail?id=3778678&cookie="
        ).then((res)=>{
            console.log(res);
            setlist4(res.data.playlist.tracks)
        })
    },[])
    return (
        <Div>
            <div className="heard">

            <div className="heard_left"> <Link to="/"> 
                <Icon className="arrow" icon="ph:arrow-left-light" />
              </Link>  </div>
                <SearchBar className="search" placeholder='请输入内容' />
                                <div className="heard_right">
                                    <p>搜索</p>
                                </div>
            </div>
            <div className="iconloge">
                <div>
                    <TeamFill className="icon_sx"/>
                    <p>歌手</p>
                </div>
                <div>
                    <ShopbagOutline className="icon_sx"/>
                    <p>曲风</p>
                </div>
                <div>
                    <CollectMoneyOutline className="icon_sx"/>
                    <p>专区</p>
                </div>
                <div>
                    <AudioFill className="icon_sx"/>
                    <p>识曲</p> 
                </div>
               
            </div>
            
            <div className="like">
                <div className="like_header">
                    <div className="left">猜你喜欢</div>
                    <div className="right">
                    <Icon className="icon" icon="ic:baseline-refresh" />
                    </div>
                </div>
                <div className="like_conten">
                    <div>林俊杰</div>
                    <div>薛之谦</div>
                    <div>唯一</div>
                    <div>悬溺</div>
                    <div>凤凰传奇</div>
                </div>
            </div>
        <div className="bigbox">
            <div className="List">
      
                <div className="list_top">
                    <div className="top_tit">飙生榜</div>
                    <div className="top_text"><Icon className="icon" icon="solar:play-bold" />
                    <p>播放</p></div>
                </div>
 
     
                <div className="Box">
                    {list && list.map((item,index)=>(
             <div className="box">
                        <div className={index+1<4? "num1" :"num"} >{index+1}</div>
                        <div className="name">{item.name}</div>
                    </div>
        ))}
                   
                </div>
             
            </div>
            <div className="List">
      
                <div className="list_top">
                    <div className="top_tit">新歌榜</div>
                    <div className="top_text"><Icon className="icon" icon="solar:play-bold" />
                    <p>播放</p></div>
                </div>
 
     
                <div className="Box">
                    {list2 && list2.map((item,index)=>(
             <div className="box">
                          <div className={index+1<4? "num1" :"num"} >{index+1}</div>
                        <div className="name">{item.name}</div>
                    </div>
        ))}
                   
                </div>
             
            </div>
            <div className="List">
      
                <div className="list_top">
                    <div className="top_tit">原创榜</div>
                    <div className="top_text"><Icon className="icon" icon="solar:play-bold" />
                    <p>播放</p></div>
                </div>
 
     
                <div className="Box">
                    {list3 && list3.map((item,index)=>(
             <div className="box">
                          <div className={index+1<4? "num1" :"num"} >{index+1}</div>
                        <div className="name">{item.name}</div>
                    </div>
        ))}
                   
                </div>
             
            </div>
            <div className="List">
      
      <div className="list_top">
          <div className="top_tit">热歌榜</div>
          <div className="top_text"><Icon className="icon" icon="solar:play-bold" />
          <p>播放</p></div>
      </div>


      <div className="Box">
          {list4 && list4.map((item,index)=>(
   <div className="box">
                 <div className={index+1<4? "num1" :"num"} >{index+1}</div>
              <div className="name">{item.name}</div>
          </div>
))}
         
      </div>
   
  </div>
            </div>
        </Div>
    )

 }

 export default Fount