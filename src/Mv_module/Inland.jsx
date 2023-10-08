import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useState,useEffect} from "react";


export default function Inland(){

    let Div = styled.div`
        width: 100%;
        height: 135.176vw;
        overflow: auto;
       .con{
        width: 92vw;
            margin: 1.333333vw auto;
            img{
                width: 92vw;
                height: 52vw;
               display: block;
               border-radius: 2.666667vw;
               margin: auto;
               margin-bottom: 1.333333vw;
            }
            .author{
                font-size: 3.333333vw;
                .red{
                 color:red;   
                 font-size: 3.466667vw;
               
                }
               
                margin-bottom: 1.333333vw;
                p{
                    color:#7c7c7c;
                    font-size: 3.2vw;
                  
                }
            }
            span{
                    display: inline-block;
                    padding-right:15px;
                }

       }



    `
    let [list,setlist] = useState()
    useEffect(()=>{
        axios.get(
        "https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?limit=50"
        ).then(res=>{
            console.log(res.data.data);
            setlist(res.data.data)
        })
    },[])
    
    return (
        <Div>
            
            {list && list.map((item,index)=>(
                    <div className="con">
                        <img src={item.cover} alt="" />
                        <div className="author"><span className="red">{index+1}</span>{item.name}</div>
                        <p><span>-</span> {item.artistName}</p>
                    </div>

            ))}

           
            
        
        </Div>
    )
}