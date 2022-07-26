import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link } from 'react-router-dom';



function App() {

  let [review, setReview] = useState(data);

  return (
    <div className="App">

      <Routes>
        <Route path='/goTrip' element={<div>여행가기</div>}/>

        <Route path='/myInfo' element={<div>내 정보</div>}/>
      </Routes>



      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Wanna</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">홈화면</Nav.Link>
              <Nav.Link href="#features">여행가기</Nav.Link>
              <Nav.Link href="#pricing">캐릭터 정보</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <img className='main_photo' src='https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg'>
      </img>
      <Button variant="outline-primary">Primary</Button>{' '}

      <Card review={review} />


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
