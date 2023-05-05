import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaRegFilePdf } from "react-icons/fa";

const EventSingleView = (props) => {
  const [eventsDetails, setEventsDetails] = useState(props.history.location.state)

  const dowloadPDF = async () =>{
    window.open(eventsDetails.Agenda)
  }

  return (
    <div>eventSingleView
     
       {/* <Row> */}
        <Col>
        <img src={eventsDetails.imageOne}
        // "images/Dash.jpg" 
        style={{width: '100%',marginRight:'10px',height:'400px'}}
         alt="events" />
        </Col>
      {/* </Row> */}
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
        <Container>
        <Row style={{height:'420px',backgroundColor:'ghostwhite',marginTop:'20px',marginBottom:'20px',borderRadius:'20px'}}>
          <Col >
            <Row style={{height:'180px',margin:'20px'}}>  <img src={eventsDetails.imageTwo}
        style={{marginRight:'10px',height:'180px'}}
         alt="events" /></Row>
            <Row style={{height:'180px',margin:'20px'}}><img src={eventsDetails.imageThree}
        style={{marginRight:'10px',height:'180px'}} alt="events" /></Row>
          </Col>
          <Col>
          <hr></hr>
            <Row style={{height:'220px',margin:'10px'}}><h2>{eventsDetails.eventName}</h2>
             <small>{eventsDetails.eventDescription}
              </small> 
              </Row>
              <hr></hr>
            <Row style={{height:'65px',margin:'10px',alignItems:'flex-start'}}><h5> <b>Location : {eventsDetails.Location} </b></h5> </Row>
            <Row style={{height:'65px',margin:'10px'}}>
              <Col><h5> Date :{eventsDetails.dateFrom}-{eventsDetails.dateTo} </h5></Col>
              <Col><h5> <b>Time :{eventsDetails.Time} </b></h5></Col>
            </Row>
          </Col>
        </Row>
        <Row style={{height:'235px',backgroundColor:"ghostwhite",marginTop:'20px',marginBottom:'20px',borderRadius:'20px'}}>
          <Col>
           <Row style={{height:'65px',margin:'10px'}}>  <h6> <b>Performer / Organizer : {eventsDetails.Performer}</b></h6></Row>
            <Row style={{height:'65px',margin:'10px'}}> 
            <Col><h6> <b>Contact Person :{eventsDetails.contactPerson} </b></h6></Col>
            <Col style={{alignContent:'flex-start'}}>{eventsDetails.contactPerson} / {eventsDetails.Contact} </Col>
            </Row>

            </Col>
            <Col>
            <hr></hr><Row style={{height:'85px',backgroundColor:'lightgray',margin:'20px',padding:'5px'}}><p >"Experience Sri Lanka's rich cultural heritage. Download our event agenda/supportive guides for full details and plan your unforgettable visit today!"</p></Row><hr></hr>
            <Row style={{height:'50px',margin:'20px'}}> Download the Agenda / Supportive Guide : <FaRegFilePdf onClick={dowloadPDF} style={{marginTop:'-30px',marginLeft:'30px'}} size={42}/>
            <sub style={{color:'red'}}> * click on the PDF icon to download the agenda..</sub>
             </Row>
            </Col>
        </Row>
       </Container>

    </div>
  )
}

export default EventSingleView