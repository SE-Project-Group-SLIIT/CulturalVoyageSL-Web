import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { ProgressBar } from 'react-bootstrap';
import DropzoneArea from '../../dropZoneComponents/dropZone';
import { addEventsService } from '../services/eventService';

const AddEvents = () => {
    const [eventName,seteventName] = useState('');
    const [eventDescription,seteventDescription] =useState('');
    const [eventType,seteventType] = useState('');
    const [dateFrom,setdateFrom] = useState('');
    const [dateTo,setdateTo] = useState('');
    const [Time,setTime] = useState('');
    const [Location,setLocation] = useState('');
    const [Performer,setPerformer] = useState('');
    const [contactPerson,setcontactPerson] = useState('');
    const [Contact,setContact] = useState('');
    const [imageOne,setimageOne] = useState('');
    const [imageTwo,setimageTwo] = useState('');
    const [imageThree,setimageThree] = useState('');
    const [Agenda,setAgenda] = useState('');

    const [errFile, setErrFile] = useState(true);
    const [errType, setErrType] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(10)
    const [state, setState] = useState(false)

    const [errFileOne, setErrFileOne] = useState(true);
    const [errTypeOne, setErrTypeOne] = useState(true);
    const [loadingProgressOne, setLoadingProgressOne] = useState(10)
    const [stateOne, setStateOne] = useState(false)

    const [errFileTwo, setErrFileTwo] = useState(true);
    const [errTypeTwo, setErrTypeTwo] = useState(true);
    const [loadingProgressTwo, setLoadingProgressTwo] = useState(10)
    const [stateTwo, setStateTwo] = useState(false)

    const [errFileThree, setErrFileThree] = useState(true);
    const [errTypeThree, setErrTypeThree] = useState(true);
    const [loadingProgressThree, setLoadingProgressThree] = useState(10)
    const [stateThree, setStateThree] = useState(false)

   
    const onSubmit =async () =>{
        let event = {
            eventName:eventName, 
            eventDescription:eventDescription, 
            eventType:eventType,
            dateFrom:dateFrom,
            dateTo:dateTo, 
            Time:Time, 
            Location:Location, 
            Performer:Performer, 
            contactPerson:contactPerson, 
            Contact:Contact,
            imageOne:imageOne,
            imageTwo:imageTwo,
            imageThree:imageThree,
            Agenda:Agenda
        }
        console.log("event",event);
        let response = await addEventsService(event)
        console.log("responseEvents>>>",response);
    }

    const sendData = (data) => {
        console.log("data1",data);
        setErrFile(false)
        setimageOne(data)
    }
    
    const sendDataOne = (data) => {
        console.log("data2",data);
        setErrFileOne(false)
        setimageTwo(data)
    }

    
    const sendDataTwo = (data) => {
        console.log("data3",data);
        setErrFileTwo(false)
        setimageThree(data)
    }

    
    const sendDataThree = (data) => {
        console.log("data4",data);
        setErrFileThree(false)
        setAgenda(data)
    }

    const sendProgress = (data) => {
        console.log("DATAAAA1", data)
        setState(true)
        setLoadingProgress(data)
    }

    const sendProgressOne = (data) => {
        console.log("DATAAAA2", data)
        setStateOne(true)
        setLoadingProgressOne(data)
    }

    const sendProgressTwo = (data) => {
        console.log("DATAAAA3", data)
        setStateTwo(true)
        setLoadingProgressTwo(data)
    }

    const sendProgressThree = (data) => {
        console.log("DATAAAA4", data)
        setStateThree(true)
        setLoadingProgressThree(data)
    }

  
  return (
    <div>
        <Container>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={eventName} onChange={(e)=>{seteventName(e.target.value)}}>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={eventDescription} onChange={(e)=>{seteventDescription(e.target.value)}}>
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail"value={eventType} onChange={(e)=>{seteventType(e.target.value)}}>
        <Form.Label>Type</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={dateFrom} onChange={(e)=>{setdateFrom(e.target.value)}}>
        <Form.Label>DateFrom</Form.Label>
        <Form.Control type="date" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={dateTo} onChange={(e)=>{setdateTo(e.target.value)}}>
        <Form.Label>DateTo</Form.Label>
        <Form.Control type="date" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={Time} onChange={(e)=>{setTime(e.target.value)}}>
        <Form.Label>Time</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={Location} onChange={(e)=>{setLocation(e.target.value)}}>
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={Performer} onChange={(e)=>{setPerformer(e.target.value)}}>
        <Form.Label>Performer</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={contactPerson} onChange={(e)=>{setcontactPerson(e.target.value)}}>
        <Form.Label>ContactPerson</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={Contact} onChange={(e)=>{setContact(e.target.value)}}>
        <Form.Label>ContactNumber</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail"> 
        <Form.Label>Image1</Form.Label>
        <div className='col-4'>
        <DropzoneArea sendData={sendData} sendProgress={sendProgress}/>
        {/* {imageOne ? imageOne.substring(0, 30) + "..." : ''} */}
       
        <div>
        {errFile ? <small className='text-danger'>Must upload a file</small> : ""}
        </div>
        </div>
        <div className='col-8'>
        {!imageOne && state ? <ProgressBar now={loadingProgress} /> : ""}
        </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>image2</Form.Label>
        <div className='col-4'>
        <DropzoneArea sendData={sendDataOne} sendProgress={sendProgressOne}/>
        {/* {imageTwo ? imageTwo.substring(0, 30) + "..." : ''} */}
       
       <div>
       {errFileOne? <small className='text-danger'>Must upload a file</small> : ""}
       </div>
       </div>
       <div className='col-8'>
       {!imageTwo && state ? <ProgressBar now={loadingProgressOne} /> : ""}
       </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>image3</Form.Label>
        <div className='col-4'>
        <DropzoneArea sendData={sendDataTwo} sendProgress={sendProgressTwo}/>
        {/* {imageThree ? imageThree.substring(0, 30) + "..." : ''} */}
       
       <div>
       {errFileTwo? <small className='text-danger'>Must upload a file</small> : ""}
       </div>
       </div>
       <div className='col-8'>
       {!imageThree && state ? <ProgressBar now={loadingProgressTwo} /> : ""}
       </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>AgendaPDF</Form.Label>
        <div className='col-4'>
        <DropzoneArea sendData={sendDataThree} sendProgress={sendProgressThree}/>
         {/* {Agenda ? Agenda.substring(0, 30) + "..." : ''} */}
       
       <div>
       {errFileThree? <small className='text-danger'>Must upload a file</small> : ""}
       </div>
       </div>
       <div className='col-8'>
       {!Agenda && state ? <ProgressBar now={loadingProgressThree} /> : ""}
       </div>
        </Form.Group>
       
    
    </Form>
    <Button variant="primary" type="submit" onClick={()=>onSubmit()}>
        Submit
      </Button>
    </Container>

    </div>
  )
}

export default AddEvents