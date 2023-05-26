import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavBar from "../shared/NavBar";
import Footer from '../shared/FooterBar'
import { useHistory } from "react-router-dom";
import './site.css';

const SiteDashboard = () => {
  const history = useHistory();
  return (
    <div>
      <Container>
        <NavBar></NavBar>
        <Row>
          <Col>
            <img
              src="images/siteDashboard.png"
              style={{ width: "100%", marginRight: "10px" }}
              alt="sites"
            />
          </Col>
        </Row>

        {/* <Row>
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
                </Row> */}

        <Row
          style={{
            marginTop: "25px",
            marginBottom: "25px",
            backgroundColor: "ghostwhite",
            borderRadius: "20px",
            paddingLeft: "170px",
            paddingRight: "170px",
          }}
        >
          <h1 style={{ fontFamily: "Roboto", marginTop: "25px" }}>
            Join us to Learn about Sri Lanka's Stunning Heritage, Culture,
            Identity, and Historical Significance!
          </h1>
          <hr></hr>
          <p>
            See, Experiance and Know the Tradition and Heritage of Sri Lanka!{" "}
            <br></br>
            Get a clearer sense of where you're going before you go. Learn more
            about the place to make your journey more pleasurable and
            stress-free from here. Have a wonderful journey!
          </p>
          <hr></hr>
          <br></br>

          <Col>
            <Row
              style={{
                marginTop: "25px",
                marginBottom: "25px",
                display: "flex",
            flexDirection: "row",
                justifyContent: "flex-start",
                paddingLeft: "2px",
                paddingRight: "2px",
              }}
            >
              <div
                className="Card"
                type="button"
                // border="info"
                style={{ height: "300px", width: "15rem",}}
                onClick={() => history.push("/allSites")}
              >
                <Card.Body>
                  <div className="img">
                    <img
                      src="images/AllSites.jpg"
                      style={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                      alt="sites"
                    />
                  </div>
                  <div
                    className="intro-title"
                    // style={{
                    //   height: "55px",
                    //   width: "200px",
                    //   padding: "6px",
                    //   boxSizing: "border-box",
                    //   position: "absolute",
                    //   background: "rgb(27, 27, 27, .5)",
                    //   color: "white",
                    //   bottom: "-169px",
                    //   borderRadius: "10px",
                    // }}
                  >
                    <h1 style={{ fontSize: "25px" }}>All Sites</h1>
                  </div>
                </Card.Body>
              </div>

              <div
                className="Card"
                type="button"
                // border="info"
                style={{ height: "300px", width: "15rem",}}
                onClick={() => history.push("/allHistorical")}
              >
                <Card.Body>
                  <div className="img">
                    <img
                      src="images/HistoricalSite.jpg"
                      style={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                      alt="sites"
                    />
                  </div>
                  <div
                    className="intro-title"
                    // style={{
                    //   height: "55px",
                    //   width: "200px",
                    //   padding: "6px",
                    //   boxSizing: "border-box",
                    //   position: "absolute",
                    //   background: "rgb(27, 27, 27, .5)",
                    //   color: "white",
                    //   bottom: "-169px",
                    //   borderRadius: "10px",
                    // }}
                  >
                    <h1 style={{ fontSize: "25px" }}>Historical Sites</h1>
                  </div>
                </Card.Body>
              </div>

              <div
                className="Card"
                type="button"
                // border="info"
                style={{ height: "300px", width: "15rem", }}
                onClick={() => history.push("/allReligious")}
              >
                <Card.Body>
                  <div className="img">
                    <img
                      src="images/ReligiousSite.jpg"
                      style={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                      alt="sites"
                    />
                  </div>
                  <div
                    className="intro-title"
                    // style={{
                    //   height: "55px",
                    //   width: "200px",
                    //   padding: "6px",
                    //   boxSizing: "border-box",
                    //   position: "absolute",
                    //   background: "rgb(27, 27, 27, .5)",
                    //   color: "white",
                    //   bottom: "-169px",
                    //   borderRadius: "10px",
                    // }}
                  >
                    <h1 style={{ fontSize: "25px" }}>Religious Sites</h1>
                  </div>
                </Card.Body>
              </div>

              <div
                className="Card"
                type="button"
                // border="info"
                style={{ height: "300px", width: "15rem",}}
                onClick={() => history.push("/allOther")}
              >
                <Card.Body>
                  <div className="img">
                    <img
                      src="images/OtherSite.jpg"
                      style={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                      alt="sites"
                    />
                  </div>
                  <div
                    className="intro-title"
                    // style={{
                    //   height: "55px",
                    //   width: "200px",
                    //   padding: "6px",
                    //   boxSizing: "border-box",
                    //   position: "absolute",
                    //   background: "rgb(27, 27, 27, .5)",
                    //   color: "white",
                    //   bottom: "-169px",
                    //   borderRadius: "10px",
                    // }}
                  >
                    <h1 style={{ fontSize: "25px" }}>Other Sites</h1>
                  </div>
                </Card.Body>
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Footer></Footer>
        </Row>
      </Container>
    </div>
  );
};
export default SiteDashboard;
