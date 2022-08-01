import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, BrowserRouter as Router } from 'react-router-dom';


function MainPage() {

  let [review, setReview] = useState();
  let navigate = useNavigate();
  let  btc_price, btc_change, eth_price, eth_change, xrp_price, xrp_change, neo_price, neo_change = 0;
  const [coin, setCoin] = useState({});


  // 코인 시세 업데이트 기능
  // cors 이슈 참고: https://sennieworld.tistory.com/m/49 
  function updateQuoation(){
    axios.get('https://api.upbit.com/v1/ticker',{
      params: {
        markets: 'KRW-BTC'
      }
    })
    .then(function(response){
      console.log(response.data[0].trade_price);
      console.log(response.data[0].change_price);
      btc_price = response.data[0].trade_price;
      btc_change = response.data[0].change_price;
    })
    .catch(function(error){
      console.log('에러: '+error);
    });
    axios.get('https://api.upbit.com/v1/ticker',{
      params: {
        markets: 'KRW-ETH'
      }
    })
    .then(function(response){
      console.log(response.data[0].trade_price);
      console.log(response.data[0].change_price);
      eth_price = response.data[0].trade_price;
      eth_change = response.data[0].change_price;
    })
    .catch(function(error){
      console.log('에러: '+error);
    });
    axios.get('https://api.upbit.com/v1/ticker',{
      params: {
        markets: 'KRW-XRP'
      }
    })
    .then(function(response){
      console.log(response.data[0].trade_price);
      console.log(response.data[0].change_price);
      xrp_price = response.data[0].trade_price;
      xrp_change = response.data[0].change_price;
    })
    .catch(function(error){
      console.log('에러: '+error);
    });
    axios.get('https://api.upbit.com/v1/ticker',{
      params: {
        markets: 'KRW-NEO'
      }
    })
    .then(function(response){
      console.log(response.data[0].trade_price);
      console.log(response.data[0].change_price);
      neo_price = response.data[0].trade_price;
      neo_change = response.data[0].change_price;
    })
    .catch(function(error){
      console.log('에러: '+error);
    });
  }



  updateQuoation();
 setInterval(updateQuoation,10000);
 
  return (
    <div>
      <div className="App box" style={{
        border: 'solid 1px',
        width: '360px',
        height: '640px',
        overflow: 'auto',
        scrollbarWidth: 'none',
        fontFamily: 'nanum'
      }}>

        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>

          {/* 캐릭터 정보  */}
          <img onClick={() => { navigate('/myInfo') }} src='/img/profile_sample.png' style={{
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
          <div style={{
            margin: '30px 10px 10px 10px'
          }}>
            <Table striped bordered hover size="sm" style={{
              // borderRadius: '15px',
              // borderCollapse: 'collapse',
            }}>
              <thead>
                <tr>
                  <th>코인</th>
                  <th>현재 가격(원)</th>
                  <th>변화량(원)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BitCoin</td>
                  <td>{btc_price}</td>
                  <td>{btc_change}</td>
                </tr>
                <tr>
                  <td>Ethereum</td>
                  <td>{eth_price}</td>
                  <td>{eth_change}</td>
                </tr>
                <tr>
                  <td>XRP</td>
                  <td><h2>{xrp_price}</h2></td>
                  <td><h2>{xrp_change}</h2></td>
                </tr>
                <tr>
                  <td>NEO</td>
                  <td>{neo_price}</td>
                  <td>{neo_change}</td>
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
                  <h6>해운대 앞바다와 마천루가 선사하는 근사한 야경</h6>
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
                  <h6>고즈넉한 분위기의 전통 한옥마을</h6>
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
    </div>
  );
};

export default MainPage;