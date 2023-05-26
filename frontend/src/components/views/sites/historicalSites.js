import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import NavBar from "../shared/NavBar";
import FooterBar from "../shared/FooterBar";
import './site.css';
import { getSiteCategoryService, searchSiteService } from "../../services/siteService";

const HistoricalSites = () => {
  const [historicalSiteDetails, setHistoricalSiteDeatils] = useState([]);
  const [search, setSearch] = useState("");

  let history = useHistory();

  useEffect(() => {
    console.log("all historical sites");
    getHistoricalSites();
  }, []);

  async function getHistoricalSites() {
    console.log("get historical sites...");

    let category = "Historical Site";
    let response = await getSiteCategoryService(category);
    if (response.ok) {
      console.log(response.data.data);
      setHistoricalSiteDeatils(response.data.data);
    }
    // axios
    //   .get(`http://localhost:5000/site/viewSites/Historical Site`)
    //   .then((res) => {
    //     console.log(res.data.data);

    //     setHistoricalSiteDeatils(res.data.data);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
  }

  const viewSite = async (data) => {
    console.log("view site", data);
    history.push({
      pathname: "/viewSite",
      state: data,
    });
  };

  async function searchSite(e) {
    console.log("search...", search);
    e.preventDefault();

    let response = await searchSiteService(search);
    if (response.ok) {
      console.log("search>>", response.data.data);
      setHistoricalSiteDeatils(response.data.data);    }
  }

  return (
    <div>
      <Container>
        <NavBar></NavBar>
        <Row>
          <Col>
            <img
              src="images/HistoricalSite2.jpg"
              style={{ width: "100%", marginRight: "10px" }}
              alt="sites"
            />
          </Col>
        </Row>

        <Row style={{ marginRight: "0px", marginLeft: "0px" }}>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/allHistorical">
                Historical Sites
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/sites">Dashboard</Nav.Link>
                <Nav.Link href="/allSites">All Sites</Nav.Link>
                <Nav.Link href="/allReligious">Religious Sites</Nav.Link>
                <Nav.Link href="/allOther">Other Sites</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Row>

        <Row
          style={{
            marginTop: "25px",
            marginBottom: "25px",
            backgroundColor: "ghostwhite",
            paddingTop: "25px",
            paddingBottom: "25px",
            paddingLeft: "275px",
            paddingRight: "275px",
            borderRadius: "20px",
          }}
        >
          <h1 style={{ fontFamily: "Roboto", marginTop: "25px" }}>
            Join us to Learn about Sri Lanka's Stunning Heritage, Culture,
            Identity, and Historical Significance!
          </h1>
          <hr></hr>
          <p>
            Get a clearer sense of where you're going before you go. Learn more
            about the place to make your journey more pleasurable and
            stress-free from here. <br></br>
            Have a wonderful journey!
          </p>
          <hr></hr>
        </Row>

        <Row>
              <Col className='d-flex justify-content-center' style={{ width: 1000, height: 50, marginTop: 10, }}>
                <Form className="d-flex" onSubmit={searchSite}>
                  <Form.Control
                    type="search"
                    placeholder="Search Site..."
                    className="rounded-pill me-2"
                    aria-label="Search"
                    style={{ width: 700, height: 50 }}
                    value={search}
                    onChange={(site) => {
                      setSearch(site.target.value);
                    }}
                  ></Form.Control>
                 
                  <Button
                    class="rounded-pill"
                    variant="outline-warning"
                    style={{width: 50, height: 50, position: '',top: 0,  borderTopLeftRadius: 30, borderBottomLeftRadius: 30,borderTopRightRadius: 30, borderBottomRightRadius: 30}}
                    type="submit"
                  >
                    <FaSearch style={{ width: 25, height: 25, }}/>
                  </Button>
                </Form>
                </Col>
                </Row>

        <Row
          style={{
            marginTop: "25px",
            marginBottom: "25px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          {historicalSiteDetails.map((sites) => {
            return (
              <div
                className="Card"
                type="button"
                // border="info"
                style={{ height: "300px", width: "15rem", margin: "20px" }}
                onClick={() => {
                  viewSite(sites);
                }}
              >
                <Card.Body style={{ fontSize: "12px" }}>
                  <div className="img">
                    <img
                      src={sites.SiteImage1.url}
                      style={{
                        width: "100%",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                      alt="sites"
                    />
                  </div>
                  <div className="intro-title">
                    <h1 style={{ fontSize: "20px" }}>{sites.SiteName}</h1>
                  </div>
                  {/* <h1 style={{ fontSize: "20px" }}>{sites.SiteName}</h1> */}
                  {/* <p
                      style={{
                        fontSize: "15px",
                        margin: "20px",
                        visibility: "hidden",
                        opacity: "0",
                      }}
                    >
                      {sites.Description.substring(0, 200)}...
                    </p> */}
                  {/* </div> */}
                </Card.Body>
              </div>
            );
          })}
        </Row>
        <Row>
          <FooterBar></FooterBar>
        </Row>
      </Container>
    </div>
  );
};
export default HistoricalSites;
