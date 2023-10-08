// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import React, { useRef, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Tabs, Swiper } from 'antd-mobile';
import Inland from './Mv_module/Inland';
import Gt from './Mv_module/Gt';
import Europe from './Mv_module/Europe';
import Korea from './Mv_module/Korea';
import Japan from './Mv_module/Japan';

export default function Mv() {
  document.body.style.background = '#FFF';
  document.body.style.margin = 0;
  document.body.style.padding = 0;
  const Div = styled.div`
    background-color: #ffffff;
    padding: 0;
    margin: 0;
    .heard {
      width: 100%;
      margin-top: 2.666667vw;
      text-align: center;
      font-weight: bold;
    }
  `;

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const tabItems = [
    { key: '0', title: '内地' },
    { key: '1', title: '港台' },
    { key: '2', title: '欧美' },
    { key: '3', title: '韩国' },
    { key: '4', title: '日本' },
  ];

  axios
    .get('https://netease-cloud-music-api-five-roan-88.vercel.app/top/mv?limit=50')
    .then((res) => {
      console.log(res);
    });

  return (
    <Div>
      <div className="heard">MV排行榜</div>

      <div>
        <Tabs
          activeKey={tabItems[activeIndex].key}
          onChange={(key) => {
            const index = tabItems.findIndex((item) => item.key === key);
            setActiveIndex(index);
            swiperRef.current?.swipeTo(index);
          }}
        >
          {tabItems && tabItems.map((item) => <Tabs.Tab title={item.title} key={item.key} />)}
        </Tabs>
        <Swiper
          direction="horizontal"
          loop
          indicator={() => null}
          ref={swiperRef}
          defaultIndex={activeIndex}
          onIndexChange={(index) => {
            setActiveIndex(index);
          }}
        >
          <Swiper.Item>
            <Inland />
          </Swiper.Item>
          <Swiper.Item>
            <Gt />
          </Swiper.Item>
          <Swiper.Item>
            <Europe />
          </Swiper.Item>
          <Swiper.Item>
            <Korea />
          </Swiper.Item>
          <Swiper.Item>
            <Japan />
          </Swiper.Item>
        </Swiper>
      </div>
    </Div>
  );

  // const tabItems = [
  //     { key: '1', title: '水果' },
  //     { key: '2', title: '蔬菜' },
  //     { key: '3', title: '动物' },
  //   ]

  //   const swiperRef = useRef(null)
  //   const [activeIndex, setActiveIndex] = useState(0)

  //   return (
  //     <>

  //         <Tabs
  //           activeKey={tabItems[activeIndex].key}
  //           onChange={key => {
  //             const index = tabItems.findIndex(item => item.key === key)
  //             setActiveIndex(index)
  //             swiperRef.current?.swipeTo(index)
  //           }}
  //         >
  //           {tabItems.map(item => (
  //             <Tabs.Tab title={item.title} key={item.key} />
  //           ))}
  //         </Tabs>
  //         <Swiper
  //           direction='horizontal'
  //           loop
  //           indicator={() => null}
  //           ref={swiperRef}
  //           defaultIndex={activeIndex}
  //           onIndexChange={index => {
  //             setActiveIndex(index)
  //           }}
  //         >
  //           <Swiper.Item>
  //             <Inland></Inland>
  //           </Swiper.Item>
  //           <Swiper.Item>
  //             <Gt></Gt>
  //           </Swiper.Item>
  //           <Swiper.Item>
  //             <Europe></Europe>
  //           </Swiper.Item>
  //         </Swiper>

  //     </>
  //   )
}
