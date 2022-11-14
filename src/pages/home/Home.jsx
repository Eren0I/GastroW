import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./main.css"

const Home = () => {
  return (
    <Container className="contt">
      <Row>

        <Col  className="col2">
        <img className="mainpng" src="images/a1.jpg"/>
        <img className="mainpng" src="images/a0.jpg"/>
        <img className="mainpng" src="images/register.jpg"/>
        </Col>
        <Col className="col1">
        <img className="mainpng" src="images/a3.jpg"/>
        <img className="mainpng" src="images/a2.jpg"/>
        <img className="mainpng" src="images/a4.jpg"/>
        </Col>
        <Col className="col2">
        <img className="mainpng" src="images/a5.jpg"/>
        <img className="mainpng" src="images/a8.jpg"/>
        <img className="mainpng" src="images/a6.jpg"/>
        </Col>
        <Col className="col1">
        <img className="mainpng" src="images/a7.jpg"/>
        <img className="mainpng" src="images/a9.jpg"/>
        <img className="mainpng" src="images/a11.jpg"/>
        </Col>
        <Col>
        <img className="mainpng" src="images/a14.jpg"/>

        <img className="mainpng" src="images/a13.jpg"/>
        <img className="mainpng" src="images/a12.jpg"/>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
// src="../../public/register.jpg"