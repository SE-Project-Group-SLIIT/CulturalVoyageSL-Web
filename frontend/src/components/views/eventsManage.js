import React, { useState,useEffect } from 'react'
import "./table.css";
import { Container,Button } from 'react-bootstrap';
import { getAllEventsService } from '../services/eventService';

const EventsManage = () => {
  const [eventsDetails, setEventsDetails] = useState([])

  const getAllEvents=async() => {
    let response = await getAllEventsService()
    if (response.ok){
      setEventsDetails(response.data.data)
    }
    console.log(">>>>",response);
  }

  useEffect (() => {
    getAllEvents()
  },[])

  return (
    <div>
      <Container>
  <h2 style={{marginTop:'50px'}}>All Events </h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Event Name</div>
      <div class="col col-2">Date From</div>
      <div class="col col-3">Date To</div>
      <div class="col col-4">Time</div>
      <div class="col col-5">Location</div>
      <div class="col col-6">Actions</div>

    </li>
    { eventsDetails.map((events)=>{
      return(
        <li class="table-row">
        <div class="col col-1" data-label="Job Id">{events.eventName}</div>
        <div class="col col-2" data-label="Customer Name">{events.dateFrom}</div>
        <div class="col col-3" data-label="Amount">{events.dateTo}</div>
        <div class="col col-4" data-label="Payment Status">{events.Time}</div>
        <div class="col col-5" data-label="Amount">{events.Location}</div>
        <div class="col col-6" data-label="Payment Status"><Button variant="warning">Update</Button> &nbsp;
        <Button variant="danger">Delete</Button></div>
        
      </li>
      )})}

     
 
  </ul>
  </Container>
</div>
        
  
  )
}

export default EventsManage