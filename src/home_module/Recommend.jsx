import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useState ,useEffect} from "react";


const Div = styled.div`
margin-top: 8.666667vw;
        .b_tit {
    width: 100%;
    /* height: 12vw; */
    padding: 0 4vw;
    font-size: 3.73333vw;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.b_tit .tit2{
    color: #9d9d9d;
}

.b_img_nav{
    margin-top: 4.666667vw;
    width: 100vw;
    font-size: 3.2vw;
 


    padding-bottom:2vw;
}
.b_img {
    width: 100vw;
    overflow: auto;
     /* display: flex;  */
     white-space: nowrap;
.b_img::-webkit-scrollbar { 
  display: none; 
} 
 .b_img-1{
  
    width: 31.01333vw;
    /* height: 50.01333vw; */
    /* border: 1px solid; */
    padding-right: 2.666667vw;
    display: inline-block;
    /* flexShrink: "0" */
    img {
    width: 30.66667vw;
    height: 30.66667vw;
    border-radius: 2vw;
   
}

}
}
/* p{
    width: 20px;
    height: 200px;
    border: 1px solid;
    font-size: 3.2vw;
} */

span{
    width: 100%;
    height: 200px;
    /* display: block; */
    border: 1px solid red;
    word-break: break-all;
};



`

function Recommend(){

    let [list,setList]= useState()

    useEffect(()=>{

        axios.get(
            "https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page/?cookie=200"
            ).then((res)=>{
                // console.log(res);
                // console.log(res.data.data.blocks[1].creatives);
                setList(res.data.data.blocks[1].creatives)
            })

    },[])




    return <Div>
<div class="b_tit">
    <div class="tit1">
    推荐歌单{">"}
    </div>
<div class="tit2">
    :
</div>
</div>


<div class="b_img_nav">
    <div class="b_img">

        { list && list.map((item)=>(

        <div class="b_img-1">
                <img src={item.uiElement.image.imageUrl} alt=""/>
                 {/* <span>{item.uiElement.mainTitle.title}</span> */}
         </div>
    
           
        ))}

</div>
</div>
    </Div>
}


export default Recommend