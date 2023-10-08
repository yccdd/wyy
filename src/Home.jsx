import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import Carousel from './home_module/Carousel';

import './download (7)/font_7bu873hb4o6/iconfont.css';
import Iconame from './home_module/Iconame';
import Recommend from './home_module/Recommend';
import Newalbum from './home_module/Newalbum';
import Ranking from './home_module/Ranking';
import Hottopic from './home_module/Hottopic';
import Calendar from './home_module/Calendar';

const Div = styled.div`
  background-color: #f1f1f1;
  .top {
    /* margin-top: 2.666667vw; */
    width: 100%;
    /* border: 1px solid; */
    padding-bottom: 5.666667vw;
    box-sizing: border-box;
    margin-bottom: 2.666667vw;
    /* height: 56vw; */
    // background-color: aqua;

    .top_headr {
      padding: 3vw 0;
      // box-sizing: border-box;
      width: 100%;
      height: 10vw;
      display: flex;
      justify-content: space-around;
      .div1 {
        /* font-size: 9.33333vw; */
        font-size: 6.933333vw;

        /* align-items: center; */
        /* align-self: center; */
      }
      .div2 {
        font-size: 6.933333vw;
        /* align-self: center; */
      }
      .sous {
        align-items: center;
        width: 75.04vw;
        height: 10.00267vw;
        border: 1px solid;
        display: flex;
        justify-content: space-evenly;
        background: linear-gradient(to left, #f3d9ef, #d9ddfd);
        border-radius: 2.666667vw;
        input {
          background: none;
          outline: none;
          border: 0px;
          font-size: 4.8vw;
        }
        div {
          font-size: 5.00133vw;
        }
      }
    }
  }
  .congt {
    padding-bottom: 8vw;
  }
`;

function Home() {
  return (
    <Div>
      <div className="top">
        <div className="top_headr">
          <div className="iconfont icon-gengduo div1" />
          <Link to="/Fount">
            {' '}
            <div className="sous">
              <div className="iconfont icon-sousuo" />
              <input type="text" name="" id="" placeholder="Love is Gone" />
              <div className="iconfont icon-saoma" />
            </div>
          </Link>

          <div className="iconfont icon-01 div2" />
        </div>
      </div>

      <div className="congt">
        <Carousel />
        <Iconame />
        <Recommend />
        <Newalbum />
        <Ranking />
        <Hottopic />
        <Calendar />
      </div>
    </Div>
  );
}

export default Home;
