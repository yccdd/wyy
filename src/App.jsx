// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import Home from './Home'
// import Mv from './Mv'
// import Fount from './Fount'
// import styled from 'styled-components'




// function App () {
//   return (

  
//       <div>
//         <div >
//         <Link to="/">首页</Link>
//         <Link to="/Mv">排行榜</Link>
//         <Link to="/">我的</Link>
//         <Link to="/Mv">关注</Link>
//         <Link to="/Mv">社区</Link>
// </div>
//         <Routes>

//           <Route path='/' element={<Home />}></Route>
//           <Route path='/Mv' element={<Mv/>}></Route>
//           <Route path='/Mv' element={<Mv/>}></Route>
//           <Route path='/Mv' element={<Mv/>}></Route>
//           <Route path='/Mv' element={<Mv/>}></Route>
//         </Routes>
//       </div>
    
//   )
// }
 
// export default App


// import React from "react";
// import Home from "./Home";
// import Mv from "./Mv";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// export default function App() {
//   const navigate = useNavigate();
//   const navList = [
//     { to: "/Telegraphs", title: "电报" },
//     { to: "/Exclusive", title: "内参" },
//     { to: "/Themes", title: "题材" },
//     { to: "/Depth", title: "深度" },
//   ];

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Navigate to="/Home" />} />

//         <Route path="/Home" element={<Home />} />
//         <Route path="/Mv" element={<Mv/>} />
//         <Route path="/Home" element={<Home />} />
//         <Route path="/Home" element={<Home />} />
//         <Route path="/Home" element={<Home />} />
     
        
//       </Routes>

//       <div className="flex fixed left-0 bottom-0 right-0">
//         {navList.map(({ to, title }) => (
//           <div
//             onClick={() => navigate(to)}
//             className="flex-1 text-center border-t-[1px] leading-10 text-[14px]"
//             key={to}
//           >
//             {title}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }



import React from "react";
import Home from "./Home"
import Mv from "./Mv"
import Fount from "./Fount";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import Login from "./login";

let Div = styled.div`
    .icon{
        width: 5.866667vw;
        height: 5.866667vw;
    }

`
export default function App() {
  const navigate = useNavigate();
  const navList = [
    { to: "/Home", title: "首页",icon:<Icon  className="icon" icon="ri:netease-cloud-music-fill" /> },
    { to: "/Mv", title: "排行榜" ,icon:<Icon className="icon" icon="icon-park-outline:ranking" />},
    { to: "/Login", title: "我的",icon:<Icon className="icon" icon="maki:music" /> },
    { to: "/Depth", title: "关注" ,icon:<Icon className="icon" icon="fluent-mdl2:follow-user" />},
    { to: "/Depth", title: "社区" ,icon:<Icon className="icon" icon="ph:wechat-logo" />},
  ];

 return (
    <Div>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
     
        <Route path="/Home" element={<Home />} >
        <Route path="Fount" element={<Fount/>} />
        </Route>
        <Route path="/Fount" element={<Fount/>} />
        <Route path="/Mv" element={<Mv/>} />
        <Route path="/Login" element={<Login/>} />
        
       
       
      </Routes>

      <div className="flex fixed left-0 bottom-0 right-0">
        {navList.map(({ to, title ,icon}) => (
          <div 
            onClick={() =>{navigate(to) 
            
        } 
                
            }
            className="wd flex-1 text-center border-t-[1px] leading-10 text-[14px]"
            key={to}
            style={{width:"20%", textAlign:"center"}}
          >
            <div style={{display:"flex",justifyContent:"center"}}>{icon}</div>
            <p>{title}</p>
          </div>
        ))}
      </div>
    </Div>
  );
}
