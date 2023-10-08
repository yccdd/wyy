import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

    let Div = styled.div`
        margin-top: 5.666667vw;
        .tit{
            width: 92vw;
            margin: auto;
            display: flex;
            justify-content: space-between;
            padding-bottom: 2.666667vw;
        }
        .conten{
            width: 95vw;
            margin: auto;
            background-color: #fff;
            border-radius: 2.666667vw;
            .details{
                display: flex;
                /* padding: .4vw; */
                padding-bottom: 2.666667vw;

            .left{
                width: 68vw;
                padding-top: 5vw;
                padding-left: 5.333333vw;
                
            }
            .right{
                padding-top: 5vw;
                img{
                    width: 14.933333vw;
                    height: 14.933333vw;
                }

            }
            }

        }

    `

function Calendar(){

    let [list,setlist] = useState()

    useEffect(()=>{
        axios.get(
            "https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1695625778307&endTime=1695712178306&cookie="
        ).then(res=>{
            console.log(res);
            setlist(res.data.data.calendarEvents)
        })
    },[])

    return (
        <Div>
        <div className="tit">
            <div>音乐日历{'>'}</div>
            <div>:</div>
        </div>

        <div className="conten">
            {list && list.map((item)=>(
                <div className="details">
                    <div className="left">
                        <div>9/26</div>
                        <div style={{marginTop:"2.666667vw"}}>{item.title}</div>
                    </div>
                    <div className="right">
                        <img src={item.imgUrl} alt="" />
                    </div>
                </div>
            ))}
        </div>

        </Div>
    )

}


export default Calendar