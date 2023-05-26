import React from "react";
import { Button, Modal } from "react-bootstrap";
import NavBar from "../shared/NavBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function ViewSiteModal(site) {
  console.log("open profile view modal", site);

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>
          {site.data.SiteName}
          {/* <Row> */}
          {/* <NavBar></NavBar> */}
          {/* </Row> */}
        </Modal.Title>
      </Modal.Header>
      <br></br>
      <Modal.Body>
        <Row>
          <Col>
            <img
              src={site.data.SiteImage1.url}
              style={{ width: "100%", height: "250px", marginRight: "10px" }}
              alt="sites"
            />
          </Col>
        </Row>
        <Container>
          <Row
            style={{
              height: "1030px",
              backgroundColor: "ghostwhite",
              marginTop: "20px",
              paddingTop: "0px",
              marginBottom: "20px",
              borderRadius: "20px",
            }}
          >
            <Col>
              <Row style={{ height: "210px", margin: "20px" }}>
                <img
                  src={site.data.SiteImage2.url}
                  style={{ marginRight: "10px", height: "205px" }}
                  alt="sites"
                ></img>
              </Row>

              <Row style={{ height: "210px", margin: "20px" }}>
                <img
                  src={site.data.SiteImage3.url}
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
                  <small>{site.data.VisitingHours}</small>
                </Col>
              </Row>
              <Row style={{ height: "65px", margin: "10px" }}>
                <Col>
                  <h5>Ticketing Details</h5>
                  <small>{site.data.TicketingDetails}</small>
                </Col>
              </Row>
              <hr></hr>

              <Row style={{ height: "65px", margin: "10px" }}>
                <Col>
                  <h5>Dress Code</h5>
                  <small>{site.data.DressCode}</small>
                </Col>
              </Row>
            </Col>

            <Col>
              <hr></hr>
              <Row style={{ margin: "10px" }}>
                <h1>{site.data.SiteName}</h1>
                <small>{site.data.Description}</small>
              </Row>

              {/* <hr></hr> */}

              <Row
                style={{ margin: "20px", alignItems: "flex-start" }}
                className="mt-3"
              >
                <small>{site.data.Value}</small>
              </Row>
              <hr></hr>

              <Row
                style={{ margin: "20px", alignItems: "flex-start" }}
                className="mt-3"
              >
                <h4>Remember ...</h4>
                <small>{site.data.Behaviour}</small>
              </Row>

              <hr></hr>
              <br></br>
              <Row style={{ height: "210px", margin: "20px" }}>
                <img
                  src={site.data.SiteImage4.url}
                  style={{ marginRight: "10px", height: "205px" }}
                  alt="sites"
                ></img>
              </Row>
            </Col>

            {/* <Col>
                        <Row style={{height:'65px',margin:'10px'}}>
                            <Col>
                            <h5>Visiting Hours</h5>
                            <small>{site.data.VisitingHours}</small>
                            </Col>
                        </Row>
                        </Col> */}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={site.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </div>
  );
}
