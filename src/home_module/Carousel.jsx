import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import { Button, Space, Swiper, Toast } from 'antd-mobile'
import { SearchBarRef } from 'antd-mobile/es/components/search-bar'
import { SwiperRef } from 'antd-mobile/es/components/swiper'


function Carousel (){


    let [list,setList] = useState()

    useEffect(()=>{
    
            axios.get(
                    "https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page"
                ).then((res)=>{
                    // console.log(res.data.data.blocks[0].extInfo.banners);
                    setList(res.data.data.blocks[0].extInfo.banners)
                })

                
    },[])
    
    return  <Swiper autoplay>

        {list && list.map((item, index) => (
    <Swiper.Item key={index} style={{width:"90%", margin:"auto"}}>
        <div
        style={{ backgroundImage: `url(${item.pic})` ,height:"36vw",backgroundSize:"100%",borderRadius:"2.666667vw"} }
        onClick={() => {
        }}
        >
        </div>
    </Swiper.Item>
    ))}

    </Swiper>
  


}


export default Carousel