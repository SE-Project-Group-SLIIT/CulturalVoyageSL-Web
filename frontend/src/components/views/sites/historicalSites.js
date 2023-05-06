import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaSearch } from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from "react-bootstrap/esm/Button";

const HistoricalSites = () => {

    const [historicalSiteDetails, setHistoricalSiteDeatils] = useState([]);

    let history = useHistory();

    useEffect(() => {
        console.log("all historical sites");
        getHistoricalSites();
    }, []);

    function getHistoricalSites() {
        console.log("get historical sites...");
        axios.get(`http://localhost:5000/site/viewSites/Historical Site`).then((res) => {
            console.log(res.data.data);

            setHistoricalSiteDeatils(res.data.data);
        }).catch((error) => {
            console.log("error", error);
        })
    }

    const viewSite = async(data) => {
        console.log("view site", data);
        history.push({
            pathname:'/viewSite',
            state: data
        })
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <img src='images/HistoricalSite2.jpg'
                            style={{ width: '100%', marginRight: '10px' }}
                            alt='sites' />
                    </Col>
                </Row>

                <Row>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/allHistorical">Historical Sites</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/sites">Dashboard</Nav.Link>
                                <Nav.Link href="/allSites">All Sites</Nav.Link>
                                <Nav.Link href="allReligious">Religious Sites</Nav.Link>
                                <Nav.Link href="/allOther">Other</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </Row>

                <Row style={{ marginTop: '25px', marginBottom: '25px', backgroundColor: 'ghostwhite', paddingTop: '25px', paddingBottom: '25px', paddingLeft: '275px', paddingRight: '275px', borderRadius: '20px' }}>

                    <h1 style={{ fontFamily: 'Roboto', marginTop: '25px' }}>Join us to Learn about Sri Lanka's Stunning Heritage, Culture, Identity, and Historical Significance!</h1>
                    <hr></hr>
                    <p >
                        Get a clearer sense of where you're going before you go. Learn more about the place to make your journey more pleasurable and stress-free  from here. <br></br>
                        Have a wonderful journey!
                    </p>
                    <hr></hr>
                </Row>

                <Row>
                    <div class="row table-head-search">
                        <div className="col-md-8"></div>
                        <div className="col">
                            <div class="input-group input-group-search">
                                <div class="searchbar">
                                    <form id="contactform" class="form" >
                                        <input class="search_input" type="text" name="" placeholder="Search..." required />
                                        <button
                                            class="btn search_icon"
                                            type="submit" id="submit" name="submit" style={{ marginLeft: '263px', marginTop: '-32px' }}> &nbsp;<FaSearch></FaSearch></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>

                <Row style={{ marginTop: '25px', marginBottom: '25px', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    {historicalSiteDetails.map((sites) => {
                        return (
                            <Card style={{ width: '18rem', display: 'block', maxWidth: '480px', backgroundColor: 'ghostwhite', borderRadius: "1.75rem", padding: " .75rem", boxShadow: "0 16px 24px -12px rgba(black,0.15)", border: 'none', marginRight: '40px', marginBottom: '50px', height: '35rem' }} >
                                {console.log("historical sites", sites)}
                                <Card.Img style={{
                                    textAlign: "center",
                                    borderRadius: "1.25rem",
                                    Container: "contents",
                                    fit: "fill-box",
                                    height: '12rem',
                                    marginBottom: "1rem",
                                    boxShadow: "0 16px 24px -12px rgba(black,0.15)"
                                }}
                                    variant="top" src="images/HistoricalSite.jpg" ></Card.Img>
                                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <Card.Title>{sites.SiteName}</Card.Title>
                                    <Card.Text style={{ textAlign: 'left' }}>
                                        {sites.Description.substring(0, 200)}...
                                    </Card.Text>

                                    <Button style={{ borderRadius: '1.25rem' }} variant="primary" onClick={()=>{viewSite(sites)}}>Read More</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default HistoricalSites;