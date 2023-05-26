import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
// import NavBar from "../shared/Navbar";
import NavBar from "../shared/adminNavBar";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Col from "react-bootstrap/esm/Col";
import FooterBar from "../shared/FooterBar";
import { addSiteService } from "../../services/siteService";

export default function AddSite() {
  const [SiteName, setSiteName] = useState("");
  const [SiteCategory, setSiteCategory] = useState("");
  const [Description, setDescription] = useState("");
  const [Value, setValue] = useState("");
  const [VisitingHours, setVisitingHours] = useState("");
  const [TicketingDetails, setTicketingDetails] = useState("");
  const [DressCode, setDressCode] = useState("");
  const [Behaviour, setBehaviour] = useState("");
  const [SiteImage1, setSiteImage1] = useState([]);
  const [SiteImage2, setSiteImage2] = useState([]);
  const [SiteImage3, setSiteImage3] = useState([]);
  const [SiteImage4, setSiteImage4] = useState([]);

  // handle and convert image in base 64
  const handleImage1 = (e) => {
    const file = e.target.files[0];
    setFileToBase1(file);
    console.log(file);
  };
  const handleImage2 = (e) => {
    const file = e.target.files[0];
    setFileToBase2(file);
    console.log(file);
  };
  const handleImage3 = (e) => {
    const file = e.target.files[0];
    setFileToBase3(file);
    console.log(file);
  };
  const handleImage4 = (e) => {
    const file = e.target.files[0];
    setFileToBase4(file);
    console.log(file);
  };

  const setFileToBase1 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSiteImage1(reader.result);
    };
  };
  const setFileToBase2 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSiteImage2(reader.result);
    };
  };
  const setFileToBase3 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSiteImage3(reader.result);
    };
  };
  const setFileToBase4 = (file) => {
    console.log("setfileto base4");
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSiteImage4(reader.result);
    };
  };

  async function sendData(e) {
    e.preventDefault();

    const newSite = {
      SiteName,
      SiteCategory,
      Description,
      Value,
      VisitingHours,
      TicketingDetails,
      DressCode,
      Behaviour,
      SiteImage1,
      SiteImage2,
      SiteImage3,
      SiteImage4,
    };

    let response = await addSiteService(newSite);
    if (response.ok) {
      Swal.fire({
        title: "Success!",
        text: "Site Details Added Succesfully",
        icon: "success",
        // showConfirmButton: true,
        timer: 2000,
      }).then(() => {
        // window.location.replace("#");
        window.location.replace("/viewAll");
      });
    } else {
      console.log("error", response);
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        // text: `${msgerr}`,
        confirmButtonColor: "#1fc191",
      });
    }
    // axios
    //   .post("http://localhost:5000/site/addSite", newSite)
    //   .then(() => {
    //     Swal.fire({
    //       title: "Success!",
    //       text: "Site Details Added Succesfully",
    //       icon: "success",
    //       showConfirmButton: false,
    //       timer: 2000,
    //     }).then(() => {
    //       // window.location.replace("#");
    //       window.location.replace("/viewAll");
    //     });
    //   })
    //   .catch((err) => {
    //     const msgerr = err.response.data.status;
    //     Swal.fire({
    //       icon: "warning",
    //       title: "Oops...",
    //       text: `${msgerr}`,
    //       confirmButtonColor: "#1fc191",
    //     });
    //   });
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Row
        style={{
          backgroundColor: "ghostwhite",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <div className="container" style={{ textAlign: "start" }}>
          <div className="p-5  col-lg-10 col-xl-7 flex-row mx-auto px-0 ">
            <Card
              style={{
                padding: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(5px)",
                borderRadius: "10px",
                border: "none",
                boxShadow: "0 2px 35px rgba(0, 0, 0, 0.2)",
              }}
              className="p-5 "
            >
              <CardHeader>
                <Card.Title
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "30px",
                    fontFamily: "sans-serif",
                  }}
                >
                  Add New Site
                </Card.Title>
              </CardHeader>
              <Card.Body>
                <Card.Text>
                  <Form
                    style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
                    onSubmit={sendData}
                  >
                    <Form.Group style={{ paddingTop: "3px" }}>
                      <Form.Label>Site Name:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Site Name "
                        id="SiteName"
                        required
                        onChange={(e) => {
                          setSiteName(e.target.value);
                        }}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group style={{ paddingTop: "20px" }}>
                      <Form.Label>Site Category:</Form.Label>
                      <Form.Select
                        type="text"
                        placeholder="Select Site Category "
                        id="SiteCategory"
                        required
                        onChange={(e) => {
                          setSiteCategory(e.target.value);
                        }}
                      >
                        <option disabled value="" selected>
                          Select Site Category
                        </option>
                        <option value="Historical Site">Historical Site</option>
                        <option value="Religious Site">Religious Site</option>
                        <option value="Other">Other Site</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group style={{ paddingTop: "20px" }}>
                      <Form.Label>Description:</Form.Label>
                      <Form.Control
                        as="textarea"
                        type="text"
                        placeholder="Enter Site Description"
                        id="Description"
                        rows={5}
                        required
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group style={{ paddingTop: "20px" }}>
                      <Form.Label>Value:</Form.Label>
                      <Form.Control
                        as="textarea"
                        type="text"
                        placeholder="Enter Value of the Site Briefly"
                        id="Value"
                        rows={3}
                        required
                        onChange={(e) => {
                          setValue(e.target.value);
                        }}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group style={{ paddingTop: "20px" }}>
                      <Form.Label>Visiting Hours:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Details about Visiting Hours"
                        id="VisitingHours"
                        required
                        onChange={(e) => {
                          setVisitingHours(e.target.value);
                        }}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group style={{ paddingTop: "20px" }}>
                      <Form.Label>Ticketing Details:</Form.Label>
                      <Form.Control
                        as="textArea"
                        type="text"
                        placeholder="Enter Ticketing Details"
                        id="TicketingDetails"
                        required
                        onChange={(e) => {
                          setTicketingDetails(e.target.value);
                        }}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group style={{ paddingTop: "20px" }}>
                      <Form.Label>Dress Code:</Form.Label>
                      <Form.Control
                        as="textArea"
                        type="text"
                        placeholder="Enter Details about Suitable Dress Codes"
                        id="DressCode"
                        required
                        onChange={(e) => {
                          setDressCode(e.target.value);
                        }}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group style={{ paddingTop: "20px" }}>
                      <Form.Label>Behaviour:</Form.Label>
                      <Form.Control
                        as="textArea"
                        type="text"
                        placeholder="Enter Brief Description about How to Behave"
                        id="Behaviour"
                        required
                        onChange={(e) => {
                          setBehaviour(e.target.value);
                        }}
                      ></Form.Control>
                    </Form.Group>

                    <div style={{ display: "flex" }}>
                      <div style={{ width: "110px" }}>
                        <Form.Group
                          style={{
                            paddingTop: "20px",
                            justifyContent: "space-between",
                          }}
                        >
                          <Form.Label>Site Image 1:</Form.Label>
                          <Form.Control
                            type="file"
                            id="SiteImage1"
                            required
                            onChange={handleImage1}
                          ></Form.Control>
                        </Form.Group>
                      </div>

                      <div
                        style={{
                          width: "110px",
                          justifyContent: "space-between",
                          marginLeft: "40px",
                          marginRight: "20px",
                        }}
                      >
                        <Form.Group style={{ paddingTop: "20px" }}>
                          <Form.Label>Site Image 2:</Form.Label>
                          <Form.Control
                            type="file"
                            id="SiteImage2"
                            required
                            onChange={handleImage2}
                          ></Form.Control>
                        </Form.Group>
                      </div>

                      <div
                        style={{
                          width: "110px",
                          justifyContent: "space-between",
                          marginLeft: "20px",
                          marginRight: "20px",
                        }}
                      >
                        <Form.Group style={{ paddingTop: "20px" }}>
                          <Form.Label>Site Image 3:</Form.Label>
                          <Form.Control
                            type="file"
                            id="SiteImage3"
                            required
                            onChange={handleImage3}
                          ></Form.Control>
                        </Form.Group>
                      </div>

                      <div
                        style={{
                          width: "110px",
                          justifyContent: "space-between",
                          marginLeft: "20px",
                        }}
                      >
                        <Form.Group style={{ paddingTop: "20px" }}>
                          <Form.Label>Site Image 4:</Form.Label>
                          <Form.Control
                            type="file"
                            id="SiteImage4"
                            required
                            onChange={handleImage4}
                          ></Form.Control>
                        </Form.Group>
                      </div>
                    </div>

                    <Row
                      style={{
                        marginTop: "50px",
                        marginBottom: "1px",
                        marginLeft: "16px",
                      }}
                    >
                      <Col style={{ paddingLeft: "100px" }}>
                        <Button
                          type="submit"
                          variant="success"
                          size="m"
                          className="h-100 w-35"
                        >
                          Save
                        </Button>
                      </Col>

                      <Col>
                        <Button
                          type="reset"
                          variant="danger"
                          size="m"
                          className="h-100 w-35"
                        >
                          Cancel
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Row>
          <FooterBar></FooterBar>
        </Row>
      </Row>
    </div>
  );
}

