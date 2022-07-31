import React from 'react';
import '../styles/storeInfo.css';
import { useNavigate } from 'react-router-dom';


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
                height: '200px',
                width: '100%',
                border: 'solid 1px',
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
            <div>
            </div>
        </div>
    );
}

export default StoreInfo;