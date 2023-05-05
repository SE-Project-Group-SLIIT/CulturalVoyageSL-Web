import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Calendar, dateFnsLocalizer, momentLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getAllEventsService } from '../services/eventService';

// const locales = {
//   'en-US': {
//     format: (date, formatStr, options) => format(date, formatStr, { locale: enUS, ...options }),
//     ...enUS
//   }
// }
const localizer = momentLocalizer(moment)

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales
// })








const EventsCalendar = () => {

  const [eventsDetails, setEventsDetails] = useState([]);
  const [calenederEvents, setCalendarEvents] = useState([])




  const getAllEvents = async () => {
    let response = await getAllEventsService()
    console.log('respose', response);
    if (response.ok) {
      // await setEventsDetails(response.data.data)
      // console.log("state>>", eventsDetails)S
      console.log('eventdetails>>', response.data.data.length);
      if (response.data.data.length != 0) {
        const eventArray = []
        for (let i = 0; i < response.data.data.length; i++) {
          let eventObject = {
            title: response.data.data[i].eventName,
            allDay: false,
            start: moment(response.data.data[i].dateFrom),
            end: moment(response.data.data[i].dateTo) .add(1, 'days')
            .subtract(1, 'seconds'),
            type: response.data.data[i].eventType
          }
          eventArray.push(eventObject)
        }
        setCalendarEvents(eventArray)
        console.log("eventArray >>", eventArray);
      }
    }
    console.log(">>>>", calenederEvents);
  }

  // const getEventStyle = (calenederEvents, start, end, isSelected) => {
  //   let backgroundColor = ''
  //   switch (calenederEvents.eventType) {
  //     case 'conference':
  //       backgroundColor = 'Pink'
  //       break
  //     case 'entertain':
  //       backgroundColor = 'lightGreen'
  //       break
  //     case 'Festival':
  //       backgroundColor = 'lightSkyBlue'
  //       break
  //     case 'religious':
  //       backgroundColor = 'lightSkyBlue'
  //       break
  //     default:
  //       backgroundColor = 'lightBlue'
  //   }
  //   return {
  //     style: {
  //       backgroundColor: backgroundColor
  //     }
  //   }
  // }

  const getEventStyle = (event) => {
    let backgroundColor = '';
    switch (event.eventType) {
      case 'conference':
        backgroundColor = 'Pink';
        break;
      case 'entertain':
        backgroundColor = 'lightGreen';
        break;
      case 'Festival':
        backgroundColor = 'lightSkyBlue';
        break;
      case 'religious':
        backgroundColor = 'lightSkyBlue';
        break;
      default:
        backgroundColor = 'lightBlue';
    }
    return {
      style: {
        backgroundColor: backgroundColor
      }
    };
  };


  useEffect(() => {
    getAllEvents()
  }, [])

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src="images/DashOne.jpg"
              style={{ width: '100%', marginRight: '10px',height:'400px'}}
              alt="events" />
          </Col>
        </Row>
        <Row >

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
        <Row style={{ marginTop: '50px', marginBottom: '50px' }}>
          {console.log("calender.evnts>>>", calenederEvents)}
          <Calendar
            localizer={localizer}
            events={calenederEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 800, backgroundColor: 'lightgoldenrodyellow', padding: 20, borderRadius: 20 }}
            eventPropGetter={getEventStyle}
          />
        </Row>
      </Container>
    </div>
  )
}

export default EventsCalendar
