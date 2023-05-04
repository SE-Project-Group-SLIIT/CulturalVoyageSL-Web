import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {FaSearch}  from "react-icons/fa";
import { getAllEventsService } from '../services/eventService';
import { useLocation, useHistory } from 'react-router-dom';

const Events = () => {
  const [eventsDetails, setEventsDetails] = useState([])

  
  let history = useHistory();
  const getAllEvents=async() => {
    let response = await getAllEventsService()
    if (response.ok){
      setEventsDetails(response.data.data)
    }
    console.log(">>>>",response);
  }

  const viewOne = async (data) => {
    console.log(">>", data)
    history.push({
      pathname: '/eventSingle',
      state: data
    })
  }

  useEffect (() => {
    getAllEvents()
  },[])

  return (
    <div>
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
    <Row style={{marginTop:'25px',marginBottom:'25px',backgroundColor:'ghostwhite' ,paddingTop:'25px',paddingBottom:'25px',paddingLeft:'275px',paddingRight:'275px',borderRadius:'20px'}}>
        <hr></hr>
        <p>
        "Discover the vibrant world of Sri Lankan heritage with our comprehensive events page.
        Explore the latest cultural activities, workshops,
        and exhibitions taking place across the country,
        and stay up-to-date with everything related
        to Sri Lanka's rich cultural traditions.
        Plan your next adventure and immerse yourself
        in the beauty and diversity of Sri Lanka's 
        heritage today!"

        </p>
        <br></br>
        <hr></hr>
    </Row>
    <Row>
    <div class="row table-head-search">
                    <div className="col-md-8"></div>
                    <div className="col">
                        <div class="input-group input-group-search">
                            <div class="searchbar">
                                <form id="contactform" class="form" >
                                    <input class="search_input" type="text" name="" placeholder="Search..."   required />
                                    <button 
                                    class="btn search_icon" 
                                    type="submit" id="submit" name="submit" style={{marginLeft:'263px',marginTop:'-32px'}}> &nbsp;<FaSearch></FaSearch></button>
                                </form>
                            </div>
                        </div>
            </div>
            </div>
    </Row>
    <Row style={{marginTop:'25px',marginBottom:'25px',display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
    { eventsDetails.map((events)=>{
      return(
  
        <Card style={{ width: '18rem',display: 'block',maxWidth: '480px',backgroundColor: 'ghostwhite',borderRadius: "1.75rem",padding:" .75rem",boxShadow: "0 16px 24px -12px rgba(black,0.15)",border:'none',marginRight:'50px',marginBottom:'50px',}} >
          { console.log("events",events)}
        <Card.Img style={{textAlign : "center",borderRadius: "1.25rem",Container: "contents",
      fit: "fill-box",
      marginBottom: "1rem",
      boxShadow: "0 16px 24px -12px rgba(black,0.15)"}} 
          variant="top" src={events.imageOne != 0 ? events.imageOne : "images/calander.jpg"} />
        <Card.Body style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
          <Card.Title>{events.eventName}</Card.Title>
          <Card.Text style={{textAlign:'left'}}>
           {events.eventDescription}
          </Card.Text>
          <Button style={{borderRadius:'1.25rem'}} variant="primary" onClick={() => { viewOne(events) }}>View More</Button>
        </Card.Body>
      </Card>
      )
    })
   
    }
    </Row>
    </Container>
    </div>
  )
}

export default Events