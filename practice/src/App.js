import './App.css';
import { Routes, Route, Link, useNavigate, Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyInfo from './components/MyInfo';
import StoreInfo from './components/StoreInfo';
import MainPage from './components/MainPage';

{/* 폰트 적용 방법 참고 https://coding-hwije.tistory.com/50 */ }
{/* 요소 배열 방법 참고 https://oneroomtable.tistory.com/entry/flex-%EC%86%8D%EC%84%B1-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95-%EC%A2%8C%EC%B8%A1-%EC%9A%B0%EC%B8%A1-%EC%A4%91%EC%95%99-%EC%A0%95%EB%A0%AC-%EB%93%B1 */ }
{/* Grid 개념 참고 https://studiomeal.com/archives/533 */ }

function App() {
  return (
        <Routes>
          <Route path='/' exact={true} element={<MainPage />} />
          <Route path='/goTrip' element={<div>여행가기</div>} />
          <Route path='/myInfo' element={<MyInfo />} />
          <Route path='/storeInfo' element={<StoreInfo />} />
        </Routes>
  );
}

// function Card(props) {
//   return (
//     <div style={{
//       textAlign: 'center',
//       border: '1px solid black',
//       margin: '10px 100px 10px 100px'
//     }}>
//       {props.review.map(function (a, i) {
//         return (
//           <div key={i} style={{
//             display: 'inline-block',
//             width: '300px',
//             marginLeft: 50,
//             marginRight: 50
//           }}>
//             <img src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'} width="100%" />
//             <h4>{props.review[i].title}</h4>
//             <h6>{props.review[i].content}</h6>
//             <h6>{props.review[i].price}</h6>
//           </div>
//         )
//       })}
//     </div>
//   )
// }


export default App;
