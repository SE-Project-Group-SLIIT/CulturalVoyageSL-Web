import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const EventSingleView = () => {
  return (
    <div>eventSingleView
       <Container>
       <Row>
        <Col>
        <img src="images/Dash.jpg" 
        style={{width: '100%',marginRight:'10px'}}
         alt="events" />
        </Col>
      </Row>
      <Row>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Events</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Dashboard</Nav.Link>
              <Nav.Link href="#features">All Events</Nav.Link>
              <Nav.Link href="#pricing">Events Calander</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </Row>
        <Row style={{height:'420px',backgroundColor:'ghostwhite',marginTop:'20px',marginBottom:'20px',borderRadius:'20px'}}>
          <Col >
            <Row style={{height:'180px',backgroundColor:'pink',margin:'20px'}}> image 1</Row>
            <Row style={{height:'180px',backgroundColor:"lightgreen" ,margin:'20px'}}> image 2</Row>
          </Col>
          <Col>
          <hr></hr>
            <Row style={{height:'180px',margin:'10px'}}><h2>Nuwara Perahara</h2>
             <small>The Nuwara Perahera is a grand annual procession held in Sri Lanka, usually in the month of August, to pay homage to the sacred tooth relic of Lord Buddha housed in the Temple of the Tooth in Kandy. The procession features beautifully adorned elephants, traditional dancers, drummers, and fire performers, as well as various other cultural displays, attracting large crowds of both locals and tourists. 
              The event lasts for 10 days and culminates in the final day's Esala Perahera, which is considered the most spectacular and significant event of the procession.
              </small> 
              </Row>
              <hr></hr>
            <Row style={{height:'65px',margin:'10px',alignItems:'flex-start'}}><h5> <b>Location : </b></h5> </Row>
            <Row style={{height:'65px',margin:'10px'}}>
              <Col><h5> <b>Date : </b></h5></Col>
              <Col><h5> <b>Time : </b></h5></Col>
            </Row>
          </Col>
        </Row>
        <Row style={{height:'235px',backgroundColor:"ghostwhite",marginTop:'20px',marginBottom:'20px',borderRadius:'20px'}}>
          <Col>
           <Row style={{height:'65px',margin:'10px'}}>  <h6> <b>Performer : </b></h6></Row>
            <Row style={{height:'65px',margin:'10px'}}> 
            <Col><h6> <b>Contact Person : </b></h6></Col>
            <Col style={{alignContent:'flex-start'}}>Name / Conatct </Col>
            </Row>

            </Col>
            <Col>
            <hr></hr><Row style={{height:'90px',backgroundColor:'lightgray',margin:'20px'}}><p><br></br>"Experience Sri Lanka's rich cultural heritage. Download our event agenda for full details and plan your unforgettable visit today!"</p></Row><hr></hr>
            <Row style={{height:'50px',backgroundColor:"lightgreen" ,margin:'20px'}}> pdf downloader</Row>
            </Col>
        </Row>
       </Container>

    </div>
  )
}

export default EventSingleView