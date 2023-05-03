import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Calendar, dateFnsLocalizer,momentLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

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

const events = [
  {
    title: 'big meeting',
    allDay: true,
    start: moment('2023-07-01'),
    end: moment('2023-07-01'),
    type:'special'
  },
  {
    title: 'Vacation',
    allDay: true,
    start: moment('2023-05-01'),
    end: moment('2023-05-21'),
    type:'new'
  },
  {
    title: 'Conference',
    allDay: true,
    start: moment('2023-05-01'),
    end: moment('2023-05-15'),
    type:'holiday'
  }
]

const getEventStyle = (event, start, end, isSelected) => {
    let backgroundColor = ''
    switch(event.type) {
      case 'special':
        backgroundColor = 'Pink'
        break
      case 'new':
        backgroundColor = 'lightGreen'
        break
      case 'holiday':
        backgroundColor = 'lightSkyBlue'
        break
      default:
        backgroundColor = 'lightBlue'
    }
    return {
      style: {
        backgroundColor: backgroundColor
      }
    }
  }
  

const EventsCalendar = () => {
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
            <Row style={{marginTop:'50px',marginBottom:'50px'}}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 ,backgroundColor:'lightgoldenrodyellow',padding:20,borderRadius:20}}
        eventPropGetter={getEventStyle}
      />
      </Row>
      </Container>
    </div>
  )
}

export default EventsCalendar
