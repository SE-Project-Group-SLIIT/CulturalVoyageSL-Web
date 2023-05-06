import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const SiteDashboard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <img src='images/siteDashboard.png'
                            style={{ width: '100%', marginRight: '10px' }}
                            alt='sites' />
                    </Col>
                </Row>

                <Row>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#">Dashboard</Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link href="/allSites">All Sites</Nav.Link>
                                <Nav.Link href="/allHistorical">Historical Sites</Nav.Link>
                                <Nav.Link href="/allReligious">Religious Sites</Nav.Link>
                                <Nav.Link href="#">Other</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </Row>

                <Row style={{ marginTop: '25px', marginBottom: '25px', backgroundColor: 'ghostwhite', borderRadius: '20px', paddingLeft:'200px',paddingRight:'200px'}}>
                    <h1 style={{ fontFamily: 'Roboto', marginTop: '25px' }}>Join us to Learn about Sri Lanka's Stunning Heritage, Culture, Identity, and Historical Significance!</h1>
                    <hr></hr>
                    <p >
                    See, Experiance and Know the Tradition and Heritage of Sri Lanka! <br></br>
                    Get a clearer sense of where you're going before you go. Learn more about the place to make your journey more pleasurable and stress-free  from here. 
                    Have a wonderful journey!
                    </p>
                    <hr></hr>
                    <Col>
                        <Row style={{ marginTop: '5px', marginBottom: '25px', justifyContent: 'space-between', paddingLeft: '150px', paddingRight: '150px' }}>
                            <Card
                                border="info"
                                style={{ width: '9rem', transition: 'transform .2s' }}
                            >
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '12px', color: '#0dcaf0' }}>Historical Sites</Card.Title>
                                    <Card.Text>
                                        <img src='images/HistoricalSite.jpg'
                                            style={{width: '100%'}}
                                            alt='sites'/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card
                                border="info"
                                style={{ width: '9rem', transition: 'transform .2s' }}
                            >
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '12px', color: '#0dcaf0' }}>Religious Sites</Card.Title>
                                    <Card.Text>
                                        <img src='images/ReligiousSite.jpg'
                                            style={{width: '100%'}}
                                            alt='sites'/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card
                                border="info"
                                style={{ width: '9rem', transition: 'transform .2s' }}
                            >
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '12px', color: '#0dcaf0' }}>Other Sites</Card.Title>
                                    <Card.Text>
                                        <img src='images/OtherSite.jpg'
                                            style={{width: '100%'}}
                                            alt='sites'/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>

    )
}
export default SiteDashboard;