import { React, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import NavBar from "../shared/NavBar";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Col from "react-bootstrap/esm/Col";
import { updateSiteService } from "../../services/siteService";

export default function UpdateSite({ data }) {
  console.log("Update site", data);
  console.log("id>>", data._id);

  useEffect(() => {
    try {
      setSiteName(data.SiteName);
      setSiteCategory(data.SiteCategory);
      setDescription(data.Description);
      setValue(data.Value);
      setVisitingHours(data.VisitingHours);
      setTicketingDetails(data.TicketingDetails);
      setDressCode(data.DressCode);
      setBehaviour(data.Behaviour);
      setSiteImage1(data.SiteImage1);
      setSiteImage2(data.SiteImage2);
      setSiteImage3(data.SiteImage3);
      setSiteImage4(data.SiteImage4);
    } catch (err) {
      window.alert("something went wrong", err);
    }
  }, []);

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
    console.log("setfileto base2");
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

    const updateSite = {
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
    console.log("update>>", updateSite);
    let response = await updateSiteService(data._id, updateSite);
    if (response.ok) {
      Swal.fire({
        title: "Success!",
        text: "Site Details Updated Succesfully",
        icon: "success",
        showConfirmButton: false,
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
        text: `${response}`,
        confirmButtonColor: "#1fc191",
      });
    }

    // axios
    //   .post(`http://localhost:5000/site/updateSite/${data._id}`, updateSite)
    //   .then(() => {
    //     Swal.fire({
    //       title: "Success!",
    //       text: "Site Details Updated Succesfully",
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
      <Modal.Header closeButton>
        <Modal.Title>Update Site: {data.SiteName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
              value={SiteName}
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
              value={SiteCategory}
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
              value={Description}
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
              value={Value}
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
              value={VisitingHours}
            ></Form.Control>
          </Form.Group>

          <Form.Group style={{ paddingTop: "20px" }}>
            <Form.Label>Ticketing Details:</Form.Label>
            <Form.Control
              as="textArea"
              type="text"
              placeholder="Enter Ticketing Details"
              id="TicketingDetails"
              rows={3}
              required
              onChange={(e) => {
                setTicketingDetails(e.target.value);
              }}
            >
              {TicketingDetails}
            </Form.Control>
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
              value={DressCode}
            >
              {DressCode}
            </Form.Control>
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
              value={Behaviour}
            >
              {Behaviour}
            </Form.Control>
          </Form.Group>

          <Form.Group
            style={{
              paddingTop: "20px",
              justifyContent: "space-between",
              padding: "30px",
            }}
          >
            <Form.Label>Site Image 1:</Form.Label>
            <Row className="justify-content-center">
              {SiteImage1 && <img src={SiteImage1.url} />}
            </Row>
            <Row className="justify-content-center">
              <Form.Control
                style={{ width: "710px" }}
                type="file"
                id="SiteImage1"
                // required
                onChange={handleImage1}
                defaultValue={SiteImage1}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group style={{ paddingTop: "20px", padding: "30px" }}>
            <Form.Label>Site Image 2:</Form.Label>
            <Row className="justify-content-center">
              {SiteImage2 && <img src={SiteImage2.url} />}
            </Row>
            <Row className="justify-content-center">
              <Form.Control
                style={{ width: "710px" }}
                type="file"
                id="SiteImage2"
                // required
                onChange={handleImage2}
                defaultValue={SiteImage2}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group style={{ paddingTop: "20px", padding: "30px" }}>
            <Form.Label>Site Image 3:</Form.Label>
            <Row className="justify-content-center">
              {SiteImage3 && <img src={SiteImage3.url} />}
            </Row>
            <Row className="justify-content-center">
              <Form.Control
                style={{ width: "710px" }}
                type="file"
                id="SiteImage3"
                // required
                onChange={handleImage3}
                defaultValue={SiteImage3}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Form.Group style={{ paddingTop: "20px", padding: "30px" }}>
            <Form.Label>Site Image 4:</Form.Label>
            <Row className="justify-content-center">
              {SiteImage4 && <img src={SiteImage4.url} />}
            </Row>
            <Row className="justify-content-center">
              <Form.Control
                style={{ width: "710px" }}
                type="file"
                id="SiteImage4"
                // required
                onChange={handleImage4}
                defaultValue={SiteImage4}
              ></Form.Control>
            </Row>
          </Form.Group>

          <Row style={{ padding: "25px" }}>
            <Col style={{ marginLeft: "100px" }}>
              <Button variant="success" type="submit">
                Save
              </Button>
            </Col>

            <Col
              style={{
                marginRight: "100px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="danger" type="reset">
                Cancle
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </div>
  );
}
