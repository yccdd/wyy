// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
// import BScroll from '@better-scroll/core';

const Div = styled.div`
  /* margin-top: 100px; */
  height: 80vw;
  background-color: #f1f1f1;
  .titme {
    padding: 2.666667vw 0;
    width: 90%;
    margin: auto;
    font-size: 4vw;
    display: flex;
    justify-content: space-between;
  }
  .top {
    height: 5.333333vw;
  }
  .wrapperX {
    width: 100%;
    height: 55.024vw;
    overflow: auto;
    display: flex;
    white-space: nowrap;
  }
  .wrapperX::-webkit-scrollbar {
    display: none;
  }
  .contentX {
    white-space: nowrap;
    display: inline-block;
  }

  .box {
    background-color: #f1f1f1;
    width: 300px;
    /* border: 1px solid; */
    /* height: 500px; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* color: red; */
    display: inline-block;

    .box_div {
      width: 100%;
      display: flex;
      /* justify-content: space-between; */
      padding-top: 4vw;
      padding-left: 2vw;
      p {
        line-height: 14.4vw;
        padding-left: 2.333333vw;
      }
    }
    img {
      width: 14.4vw;
      height: 14.4vw;
      border-radius: 2.666667vw;
    }
  }
`;

function Newalbum() {
  const [list, setlist] = useState();

  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page')
      .then((res) => {
        // console.log(res.data.data.blocks[5].creatives);
        setlist(res.data.data.blocks[5].creatives);
      });
  }, []);

  return (
    <Div>
      <div className="titme">
        <div>新歌新碟{' >'}</div>
        <div>:</div>
      </div>

      <div className="top">
        <div className="wrapperX">
          <div className="contentX">
            {list &&
              list.map((item) => (
                <div className="box">
                  {item &&
                    item.resources.map((value) => (
                      <div className="box_div">
                        <img src={value.uiElement.image.imageUrl} alt="" />
                        <p>{value.uiElement.mainTitle.title}</p>
                      </div>
                    ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </Div>
  );
}

export default Newalbum;
