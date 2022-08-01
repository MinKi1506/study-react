import React from 'react';
import '../styles/storeInfo.css';
import { useNavigate } from 'react-router-dom';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";



function StoreInfo() {

    let navigate = useNavigate();

    return (
        <div style={{
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

                {/* 뒤로가기  */}
                <img onClick={() => { navigate(-1) }} src='/img/back.png' style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '70%'
                }}></img>

                {/* 페이지명 */}
                <div>
                    <h2 style={{
                        fontFamily: 'cafe',
                        fontSize: '39px'
                    }}>가게 정보</h2>
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

            {/* 가게 사진 */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                columnGap: '1px',
                gridTemplateRows: 'repeat(4, 1fr)',
                rowGap: '1px',
                height: '180px',
                width: '100%',
                padding: '5px'
            }}>
                <div style={{
                    border: 'solid 1px',
                    gridColumn: '1 / 3',
                    gridRow: '1 / 3'
                }}>
                    <img className='store_photo' src='./img/store_1.png'></img>
                </div>
                <div style={{
                    border: 'solid 1px',

                }}>
                    <img className='store_photo' src='./img/store_3.png'></img>
                </div>
                <div style={{
                    border: 'solid 1px',

                }}>
                    <img className='store_photo' src='./img/store_4.png'></img>
                </div>
                <div style={{
                    border: 'solid 1px',

                }}>
                    <img className='store_photo' src='./img/store_5.png'></img>
                </div>
                <div style={{
                    border: 'solid 1px',
                    padding: '20px',


                }}>
                    <img className='store_photo' src='./img/more.png'></img>
                </div>
            </div>
            <div style={{
                textAlign: 'center',
                fontFamily: 'cafe',
                fontSize: '30px',
                borderBottom: 'double 5px'
            }}>
                <h3 style={{
                    display: 'inline-block'
                }}>업체명 <span style={{
                    fontSize: '15px'
                }}>＜점포 카테고리＞</span></h3>
            </div>
            <div style={{
                padding: '10px',
                borderBottom: 'double 5px'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '5px',
                    marginBottom: '10px'
                }}>
                    <h3><span style={{
                        color: 'blue',
                        fontWeight: 'bold',

                    }}>n</span>개의 리뷰가 있는 곳이에요!</h3>

                    <AwesomeButton style={{
                        width: '100px'
                    }} type='secondary'>리뷰 보러 가기</AwesomeButton>

                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <h3>검증중인 리뷰가 <span style={{
                        color: 'red',
                        fontWeight: 'bold'
                    }}>n</span>개있어요.</h3>

                    <AwesomeButton style={{
                        width: '100px',
                        marginBottom: '10px'
                    }} type='secondary'>투표 하러 가기</AwesomeButton>
                </div>
            </div>
            <div style={{
                boderBottom: 'borderBottom: double 5px'
            }}>
                <div>
                    <h3>주소: <span>경남 거제시 일운면 지세포로 122</span></h3>
                    <h3>영업시간: <span>오전 11시</span>~<span>오후 10시</span></h3>
                    <h3>홈페이지: <span>www.naver.com</span></h3>
                    <h3>Instagram: <span>www.naver.com</span></h3>
                    <h3>Tel: <span>055-541-8426</span></h3>
                </div>

            </div>
        </div>
    );
}

export default StoreInfo;