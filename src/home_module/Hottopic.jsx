import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState,useEffect } from "react";


let Div = styled.div`
/* display: flex; */
margin-top: 4.666667vw;
/* height: 2000px; */

   
.bigbox{
    width: 100%;
overflow: auto;
     display: flex; 
     white-space: nowrap;
}
.bigbox::-webkit-scrollbar { 
  display: none; 
} 
   .box{
    width: 64vw;
    height: 28vw;
    background-color: #DFE1DF;
    /* padding-bottom: 100px; */
    /* border: 1px solid; */
    margin-right: 2.666667vw;
    border-radius: 2.666667vw;


    .box_conten{
        padding: 3vw 4vw;
        display: flex;
    .box_conten_left{
        div{
            padding-bottom: 2.666667vw;
        }
        .tit{
            font-size: 4vw;
            color:#fff;
        }
        width: 41.866667vw;
        .copywriting{
            width: 100%;
            height: 20px;
            overflow: hidden;
        }
    }
    .box_conten_right{
        width: 110px;
        /* height: 100px; */
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin-left: 2.666667vw;
        
        img{
            width: 15.333333vw;
            height: 13.333333vw;
            display: block;
            align-items: flex-end;
            
            /* margin-top: --2.666667vw; */

        }
    }
    }
   }
   
    
`

function Hottopic (){

        let [list,setlist]=useState()

        useEffect(()=>{
            
            axios.get(
                "https://netease-cloud-music-api-five-roan-88.vercel.app/topic/detail/event/hot?actid=111551188&cookie="
                ).then(res=>{
                    console.log(res);
                    setlist(res.data.events)
 })
        },[])


        return <Div>
            <div className="bigbox">
            {list && list.map((item)=>(
                 <div className="box">
                <div className="box_conten">
                    <div className="box_conten_left">
                        <div className="tit">{item.user.nickname}</div>
                        <div className="text">484万热度</div>
                        <div className="copywriting">{item.user.signature}</div>
                    </div>
                    <div className="box_conten_right">
                    <img src={item.user.avatarUrl} alt="" />
                    </div>
                </div>
               
            </div>
            ))}
           
</div>

        </Div>

}


export default Hottopic