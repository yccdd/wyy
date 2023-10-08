/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper } from 'antd-mobile';

function Carousel() {
  const [list, setList] = useState();

  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page')
      .then((res) => {
        // console.log(res.data.data.blocks[0].extInfo.banners);
        setList(res.data.data.blocks[0].extInfo.banners);
      });
  }, []);

  return (
    <Swiper autoplay>
      {list &&
        list.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Swiper.Item key={index} style={{ width: '90%', margin: 'auto' }}>
            <div
              style={{
                backgroundImage: `url(${item.pic})`,
                height: '36vw',
                backgroundSize: '100%',
                borderRadius: '2.666667vw',
              }}
              onClick={() => {}}
            />
          </Swiper.Item>
        ))}
    </Swiper>
  );
}

export default Carousel;
