import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';

function App() {

  let [review, setReview] = useState(data);

  return (
    <div className="App box" style={{
      border: 'solid 1px',
      width: '360px',
      height: '640px',
      overflow: 'auto',
      scrollbarWidth: 'none',
      fontFamily: 'nanum'
    }}>

      <Routes>
        <Route path='/goTrip' element={<div>여행가기</div>} />
        <Route path='/myInfo' element={<div>내 정보</div>} />
      </Routes>
      {/* 폰트 적용 방법 참고 https://coding-hwije.tistory.com/50 */}
      {/* 요소 배열 방법 참고 https://oneroomtable.tistory.com/entry/flex-%EC%86%8D%EC%84%B1-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95-%EC%A2%8C%EC%B8%A1-%EC%9A%B0%EC%B8%A1-%EC%A4%91%EC%95%99-%EC%A0%95%EB%A0%AC-%EB%93%B1 */}

      <div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>

        {/* 캐릭터 정보  */}
        <img src='/img/profile_sample.png' style={{
          width: '60px',
          height: '60px',
          borderRadius: '70%'
        }}></img>

        {/* 로고 */}
        <div>
          <h2 style={{
            fontSize: '50px',
            fontFamily: 'cute'
          }}>Wanna</h2>
        </div>

        {/* 네비게이션바 */}
        <button style={{
          border: 'none',
          backgroundColor: 'white'
        }}><img style={{
          width: '40px',
          height: '40px'
        }} src='/img/menu.png'></img>
        </button>
      </div>

      <div style={{
        height: '400px'
      }}>
        <div style={{
          height: '20px'
        }}>

        </div>
        <h5 style={{
          fontFamily: 'cute'
        }}>OOO님, 안녕하세요!</h5>

        {/* 검색창 */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <img style={{
            width: '50px',
            height: '50px'
          }} src='/img/search.png'></img>
          <div class="inner">
            <input type="search" />
            <div class="searching">
            </div>
            <div class="icon_ect">
            </div>
          </div>
        </div>

        {/* 기능 버튼 */}
        <div>
          <Button style={{
            height: '70px',
            width: '70px'
          }} variant="outline-primary">여행가기</Button>{' '}
          <Button style={{
            height: '70px',
            width: '70px'
          }} variant="outline-primary">우리 지역 <br></br> 큐레이팅</Button>{' '}
          <Button style={{
            height: '70px',
            width: '70px'
          }} variant="outline-primary">이벤트</Button>{' '}
          <Button style={{
            height: '70px',
            width: '70px'
          }} variant="outline-primary">더 보기</Button>{' '}
        </div>

        {/* 실시간 코인 시세 현황 */}
        <div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>코인</th>
                <th>현재 가격</th>
                <th>Last Nam</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BitCoin</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <td>eth</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <td>솔라나</td>
                <td>Thornton</td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/* 베스트 리뷰 */}
        <div style={{
          padding: '10px'
        }}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img style={{
                borderRadius: '15px'
              }}
                className="d-block w-100"
                src="\img\pusan.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 style={{
                  fontSize: '20px'
                }}>부산 해운대</h3>
                <h6>해운대 앞바다와 마천루가 선사하는 근사한 야경 abc</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img style={{
                borderRadius: '15px'
              }}
                className="d-block w-100"
                src="\img\bookchon.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 style={{
                  fontSize: '20px'
                }}>서울 북촌 한옥마을</h3>
                <h6>고즈넉한 분위기의 전통 한옥!</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{
                borderRadius: '15px'
              }}
                className="d-block w-100"
                src="\img\geoje.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 style={{
                  fontSize: '20px'
                }}>경남 거제시</h3>
                <h6>조용하고 따뜻한 바다마을을 여행하고 싶다면.. 거제로!</h6>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* <Card review={review} /> */}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div style={{
      textAlign: 'center',
      border: '1px solid black',
      margin: '10px 100px 10px 100px'
    }}>
      {props.review.map(function (a, i) {
        return (
          <div key={i} style={{
            display: 'inline-block',
            width: '300px',
            marginLeft: 50,
            marginRight: 50
          }}>
            <img src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'} width="100%" />
            <h4>{props.review[i].title}</h4>
            <h6>{props.review[i].content}</h6>
            <h6>{props.review[i].price}</h6>
          </div>
        )
      })}
    </div>
  )
}

export default App;
