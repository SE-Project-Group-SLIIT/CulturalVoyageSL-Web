import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
// import NavBar from "../shared/Navbar";
import NavBar from '../shared/adminNavBar'
import CardHeader from "react-bootstrap/esm/CardHeader";
import Col from "react-bootstrap/esm/Col";
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
        showConfirmButton: true,
        // timer: 2000,
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
      <div className="container" style={{ textAlign: "start" }}>
        <div className="p-5  col-lg-10 col-xl-7 flex-row mx-auto px-0 ">
          <Card
            style={{
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(5px)",
              borderRadius: "10px",
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
    </div>
  );
  // <div className="row mt-2 mb-3">
  //   //                       <div className="col py-3 text-center">
  //   //                         <button type="submit" className="btn  btn-success">
  //   //                           Save
  //   //                         </button>
  //   //                       </div>
  //   //                       <div className="col py-3 text-center">
  //   //                         <button type="reset" className="btn btn-danger">
  //   //                           Cancel
  //   //                         </button>
  //   //                       </div>
  //   //                     </div>
}

// <div>
//   <div>
//     <NavBar />
//   </div>
//   <Row
//     style={{
//       marginTop: "5px",
//       marginBottom: "25px",
//       backgroundColor: "ghostwhite",
//       borderRadius: "20px",
//       paddingLeft: "200px",
//       paddingRight: "200px",
//       paddingTop: "75px",
//     }}
//   >
//     <Card
//       style={{ padding: "5px", width: "75%" }}
//       className="p-5 ms-auto me-auto pt-0 pb-0 mt-3  shadow-sm"
//     >
//       <Card.Body>
//         <div class="page-component-body">
//           <div class="container input-main-form-emp pt-3">
//             <div class="container border-top">
//               <div class="row">
//                 <Card.Title>
//                   <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
//                     <h3 className="topic-V text-left mt-4 mb-4">
//                       Add New Site
//                     </h3>
//                   </div>
//                 </Card.Title>
//               </div>
//               <div class="row">
//                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                   <form
//                     id="contact-form"
//                     class="form"
//                     role="form"
//                     onSubmit={sendData}
//                   >
//                     <div class="form-group">
//                       <label class="form-label" for="SiteName">
//                         Site Name :{" "}
//                       </label>
//                       <input
//                         type="text"
//                         class="form-control formInput"
//                         id="SiteName"
//                         name="SiteName"
//                         placeholder="Site Name"
//                         tabindex="1"
//                         required
//                         onChange={(e) => {
//                           setSiteName(e.target.value); // assign value
//                         }}
//                       />
//                     </div>

//                     <div class="form-group col-sm">
//                       <label class="form-label" for="SiteCategory">
//                         Site Category:
//                       </label>
//                       <select
//                         id="SiteCategory"
//                         className="form-control formInput"
//                         tabindex="2"
//                         required
//                         onChange={(e) => {
//                           setSiteCategory(e.target.value); // assign value
//                         }}
//                       >
//                         <option id="choose1">Select Site Category</option>
//                         <option value="Historical Site">
//                           Historical Site
//                         </option>
//                         <option value="Religious Site">
//                           Religious Site
//                         </option>
//                         <option value="Other">Other</option>
//                       </select>
//                     </div>

//                     <div class="form-group col-sm">
//                       <label class="form-label" for="Description">
//                         Description:
//                       </label>
//                       <textarea
//                         class="form-control formInput"
//                         placeholder="Enter Site Description"
//                         id="Description"
//                         tabindex="3"
//                         required
//                         onChange={(e) => {
//                           setDescription(e.target.value); //assign value
//                         }}
//                       />
//                     </div>

//                     <div class="form-group col-sm">
//                       <label class="form-label" for="Value">
//                         Value:
//                       </label>
//                       <textarea
//                         class="form-control formInput"
//                         placeholder="Briefly Describe the Value of the Site"
//                         id="Value"
//                         tabindex="4"
//                         // required
//                         onChange={(e) => {
//                           setValue(e.target.value); //assign value
//                         }}
//                       />
//                     </div>

//                     <div class="form-group col-sm">
//                       <label class="form-label" for="VisitingHours">
//                         Visiting Hours:{" "}
//                       </label>
//                       <input
//                         type="text"
//                         class="form-control"
//                         id="VisitingHours"
//                         placeholder="Visiting Hours"
//                         tabindex="5"
//                         required
//                         onChange={(e) => {
//                           setVisitingHours(e.target.value); // assign value
//                         }}
//                       />
//                     </div>

//                     <div class="form-group col-sm">
//                       <label class="form-label" for="TicketingDetails">
//                         Ticketing Details:
//                       </label>
//                       <textarea
//                         class="form-control formInput"
//                         placeholder="Enter Ticketing Details"
//                         id="TicketingDetails"
//                         tabindex="6"
//                         required
//                         onChange={(e) => {
//                           setTicketingDetails(e.target.value); //assign value
//                         }}
//                       />
//                     </div>

//                     <div class="form-group col-sm">
//                       <label class="form-label" for="DressCode">
//                         Dress Code:
//                       </label>
//                       <textarea
//                         class="form-control formInput"
//                         placeholder="Enter Details about Dress Codes"
//                         id="DressCode"
//                         tabindex="7"
//                         required
//                         onChange={(e) => {
//                           setDressCode(e.target.value); //assign value
//                         }}
//                       />
//                     </div>

//                     <div class="form-group col-sm">
//                       <label class="form-label" for="Behaviour">
//                         Behaviour:
//                       </label>
//                       <textarea
//                         class="form-control formInput"
//                         placeholder="Briefly explain about the behaviour that should maintain in the site"
//                         id="Behaviour"
//                         tabindex="8"
//                         // required
//                         onChange={(e) => {
//                           setBehaviour(e.target.value); //assign value
//                         }}
//                       />
//                     </div>

//                     <div className="form-outline mb-4">
//                       <label className="form-label" htmlFor="form4Example2">
//                         Site Image1:{" "}
//                       </label>
//                       <input
//                         onChange={handleImage1}
//                         type="file"
//                         id="formupload"
//                         name="image"
//                         className="form-control"
//                       />
//                     </div>
//                     <img className="img-fluid" src={SiteImage1} alt="" />

//                     <div className="form-outline mb-4">
//                       <label className="form-label" htmlFor="form4Example2">
//                         Site Image2:{" "}
//                       </label>
//                       <input
//                         onChange={handleImage2}
//                         type="file"
//                         id="formupload"
//                         name="image"
//                         className="form-control"
//                       />
//                     </div>
//                     <img className="img-fluid" src={SiteImage2} alt="" />

//                     <div className="form-outline mb-4">
//                       <label className="form-label" htmlFor="form4Example2">
//                         Site Image3:{" "}
//                       </label>
//                       <input
//                         onChange={handleImage3}
//                         type="file"
//                         id="formupload"
//                         name="image"
//                         className="form-control"
//                       />
//                     </div>
//                     <img className="img-fluid" src={SiteImage3} alt="" />

//                     <div className="form-outline mb-4">
//                       <label className="form-label" htmlFor="form4Example2">
//                         Site Image4:{" "}
//                       </label>
//                       <input
//                         onChange={handleImage4}
//                         type="file"
//                         id="formupload"
//                         name="image"
//                         className="form-control"
//                       />
//                     </div>
//                     <img className="img-fluid" src={SiteImage4} alt="" />

//                     <div className="row mt-2 mb-3">
//                       <div className="col py-3 text-center">
//                         <button type="submit" className="btn  btn-success">
//                           Save
//                         </button>
//                       </div>
//                       <div className="col py-3 text-center">
//                         <button type="reset" className="btn btn-danger">
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Card.Body>
//     </Card>
//   </Row>
// </div>
