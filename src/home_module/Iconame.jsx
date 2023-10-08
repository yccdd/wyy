// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const Div = styled.div`
  .nav {
    margin-top: 2.666667vw;
    width: 100vw;
    height: 14.117647vw;
    // background-color: firebrick;
    font-size: 3.2vw;
    display: flex;
    //  justify-content: space-between;
    // position: relative;

    padding-bottom: 4vw;
  }

  .b_list {
    padding: 0 2.66667vw;
    height: 20vw;
    // width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    overflow: auto;
    display: flex;
    white-space: nowrap;
  }
  .b_list::-webkit-scrollbar {
    display: none;
  }
  .imgdd {
    /* border: 1px solid; */
  }
  .b_item {
    width: 20vw;
    height: 20vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    // background-color: rgb(173, 255, 224);
  }

  .b_list .b_item img {
    width: 13.33333vw;
    height: 13.33333vw;
    filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");

    /* background-color: red; */
    // color: red;
  }

  .b_list .b_item p {
    margin: 0;
    padding: 0;
    width: 40vw;
    text-align: center;
    font-size: 3.2vw;
  }
  .red-image {
    color: red;
    /* background-color: red; */
  }
`;

function Iconame() {
  const [list, setList] = useState();

  useEffect(() => {
    axios
      .get('https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/dragon/ball')
      .then((res) => {
        // console.log(res.data.data);
        setList(res.data.data);
      });
  }, []);

  return (
    <Div>
      <div className="nav">
        <div className="b_list">
          {list &&
            list.map((item) => (
              <div className="b_item">
                <div className="imgdd">
                  {/* <div className=""></div> */}
                  <img src={item.iconUrl} alt="" className="red-image" />
                </div>
                <p>{item.name}</p>
              </div>
            ))}
        </div>
      </div>
    </Div>
  );
}

export default Iconame;
