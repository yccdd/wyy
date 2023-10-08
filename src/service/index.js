// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});
// 获取榜单详情
export const getToplistDetall = () => {
  axios.get('/toplist/detail');
};

// 获取生成二维码所需要的key

// export const createLoginQrkey = ()=>http.get("/login/qr/key")

// // export const createLoginQrImage = (params)=>http.get("./login/qr/create",{params:id})
// // 生成接口
// export const createLoginQrImage =(opt)=>{
//     http.get("./login/qr/create",{params:opt})
// }

// createLoginQrImage({key:1})

// // 二维码检查扫码状态接口

// export const checkLoginQr = (params)=>{
//     http.get("./login/qr",{params})
// }
// 获取生成二维码所需要的key
export const createLoginQrKey = () => http.get('/login/qr/key');
// 获取扫码登录的二维码
export const createLoginQrImage = (params) => http.get('/login/qr/create', { params });
// 二维码检测扫码状态接口
export const checkLoginQr = (params) => http.get('/login/qr/check', { params });
