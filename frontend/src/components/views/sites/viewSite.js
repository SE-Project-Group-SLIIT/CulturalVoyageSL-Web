import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavBar from "../shared/NavBar";
import FooterBar from "../shared/FooterBar";

const ViewSite = (props) => {
  const [siteDetails, setSiteDetails] = useState(props.history.location.state);
  console.log(siteDetails);

  return (
    <div>
      <Container>
        <NavBar></NavBar>
        <Row>
          <Col>
            <img
              src={siteDetails.SiteImage1.url}
              style={{ width: "100%", marginRight: "10px" }}
              alt="sites"
            />
          </Col>
        </Row>

        <Row style={{ marginRight: "0px", marginLeft: "0px" }}>
          <Navbar bg="dark" variant="dark">
            <Container>
              {/* <Navbar.Brand href="/allHistorical">Historical Sites</Navbar.Brand> */}
              <Nav className="me-auto">
                <Nav.Link href="/sites">Dashboard</Nav.Link>
                <Nav.Link href="/allSites">All Sites</Nav.Link>
                <Nav.Link href="/allHistorical">Historical Sites</Nav.Link>
                <Nav.Link href="/allReligious">Religious Sites</Nav.Link>
                <Nav.Link href="/allOther">Other Sites</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Row>

        <Container>
          <Row
            style={{
              height: "800px",
              backgroundColor: "ghostwhite",
              marginTop: "20px",
              marginBottom: "20px",
              borderRadius: "20px",
            }}
          >
            <Col>
              <Row style={{ height: "210px", margin: "20px" }}>
                <img
                  src={siteDetails.SiteImage2.url}
                  style={{ marginRight: "10px", height: "205px" }}
                  alt="sites"
                ></img>
              </Row>

              <Row style={{ height: "210px", margin: "20px" }}>
                <img
                  src={siteDetails.SiteImage3.url}
                  style={{ marginRight: "10px", height: "205px" }}
                  alt="sites"
                ></img>
              </Row>
              {/* <br></br> */}
              {/* <br></br> */}
              <hr></hr>

              <Row style={{ height: "65px", margin: "10px" }}>
                <Col>
                  <h5>Visiting Hours</h5>
                  <small>{siteDetails.VisitingHours}</small>
                </Col>
              </Row>
              <Row style={{ height: "65px", margin: "10px" }}>
                <Col>
                  <h5>Ticketing Details</h5>
                  <small>{siteDetails.TicketingDetails}</small>
                </Col>
              </Row>
              <hr></hr>

              <Row style={{ height: "65px", margin: "10px" }}>
                <Col>
                  <h5>Dress Code</h5>
                  <small>{siteDetails.DressCode}</small>
                </Col>
              </Row>
            </Col>

            <Col>
              <hr></hr>
              <Row style={{ margin: "10px" }}>
                <h1>{siteDetails.SiteName}</h1>
                <small>{siteDetails.Description}</small>
              </Row>

              {/* <hr></hr> */}

              <Row
                style={{ margin: "20px", alignItems: "flex-start" }}
                className="mt-3"
              >
                <small>{siteDetails.Value}</small>
              </Row>
              <hr></hr>

              <Row
                style={{ margin: "20px", alignItems: "flex-start" }}
                className="mt-3"
              >
                <h4>Remember ...</h4>
                <small>{siteDetails.Behaviour}</small>
              </Row>

              <hr></hr>
              <br></br>
              <Row style={{ height: "210px", margin: "20px" }}>
                <img
                  src={siteDetails.SiteImage4.url}
                  style={{ marginRight: "10px", height: "205px" }}
                  alt="sites"
                ></img>
              </Row>
            </Col>

            {/* <Col>
                        <Row style={{height:'65px',margin:'10px'}}>
                            <Col>
                            <h5>Visiting Hours</h5>
                            <small>{siteDetails.VisitingHours}</small>
                            </Col>
                        </Row>
                        </Col> */}
          </Row>
        </Container>
        <Row>
          <FooterBar></FooterBar>
        </Row>
      </Container>
    </div>
  );
};
export default ViewSite;
