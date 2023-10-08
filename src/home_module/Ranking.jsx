import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useState,useEffect } from "react";
import BScroll from '@better-scroll/core'



let Div  = styled.div`
/* margin-top: 100px; */
height: 80vw;
  
.titme{
    padding: 2.666667vw 0;
    width: 90%;
    margin: auto;
    font-size: 4vw;
    display: flex;
    justify-content:space-between;
}
    .top{
       height:5.333333vw;
       /* background-color: #fff; */
    .box_tit{
        padding: 2.666667vw 0;
    width: 90%;
    margin: auto;
    font-size: 4vw;
    display: flex;
    justify-content:space-between;

    }
   }
   .wrapperX{
        width:100%;
        height:71.424vw;
        overflow: auto;
     display: flex; 
     white-space: nowrap;
   }
   .wrapperX::-webkit-scrollbar { 
  display: none; 
} 
   .contentX{
        white-space: nowrap;
        display: inline-block;
   }


   
  
   
   .box{
   
    width: 300px;
    /* border: 1px solid; */
        /* height: 500px; */
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        /* color: red; */
        display: inline-block ;
        background-color: #fff;
        margin-right: 10px;
        padding-bottom: 2.666667vw;

        .box_div{
            /* background-color: #fff; */
            display: flex;
            padding-top: 4vw;
            padding-left: 2vw;
            justify-content: space-between;
            p{
                width: 16vw;
                line-height: 14.4vw;
                text-align: center;
            }
            .box_text{
                line-height: 14.4vw;
                width:46.666667vw ;
                /* border: 1px solid; */
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
     img{
        width: 14.4vw;
        height: 14.4vw;
        border-radius: 2.666667vw;
       }
       }


`

function Ranking (){
let scroll_X = new BScroll('.wrapperX',{
    scrollY: false, // 因为scrollY默认为true，其实可以省略
    scrollX: true
})

let [list,setlist] = useState()

useEffect(()=>{

    axios.get(
        "https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page"
    ).then(res=>{
        // console.log(res.data.data.blocks[3].creatives);
        setlist(res.data.data.blocks[3].creatives)
    })



},[])

return  <Div>

<div className="titme">
    <div>排行榜{" >"}</div>
    <div>:</div>
</div>

    <div class="top">
   
        <div class="wrapperX">
             <div class="contentX">

            {list && list.map((item)=>(
                <div className="box">
                     <div className="box_tit">
                        <div>编辑推荐榜</div>
                        <div>精选宝藏新歌</div>
                        
                    </div>
                {item && item.resources.map((value,index)=>(
                    <div className="box_div">
                <img src={value.uiElement.image.imageUrl} alt="" />
                <p className="box_text"><span>{index+1}</span> {value.uiElement.mainTitle.title}</p>
                <p>热门</p>
                </div>
               ))}
               </div>
            ))}
        </div>
        </div>
    </div>


    
</Div>



}

export default Ranking