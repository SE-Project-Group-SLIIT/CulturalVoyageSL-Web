import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";

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

  function sendData(e) {
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

    axios
      .post("http://localhost:5000/site/addSite", newSite)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Site Details Added Succesfully",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          // window.location.replace("#");
          window.location.reload();
        });
      })
      .catch((err) => {
        const msgerr = err.response.data.status;
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: `${msgerr}`,
          confirmButtonColor: "#1fc191",
        });
      });
  }

  return (
    <Row
      style={{
        marginTop: "25px",
        marginBottom: "25px",
        backgroundColor: "ghostwhite",
        borderRadius: "20px",
        paddingLeft: "200px",
        paddingRight: "200px",
      }}
    >
      <Card style={{ padding: "5px" }}>
        <Card.Body>
          <div class="page-component-body">
            <div class="container input-main-form-emp pt-3">
              <div class="container border-top">
                <div class="row">
                  <Card.Title>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                      <h3 className="topic-V text-left mt-4 mb-4">
                        Add New Site
                      </h3>
                    </div>
                  </Card.Title>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form
                      id="contact-form"
                      class="form"
                      role="form"
                      onSubmit={sendData}
                    >
                      <div class="form-group">
                        <label class="form-label" for="SiteName">
                          Site Name :{" "}
                        </label>
                        <input
                          type="text"
                          class="form-control formInput"
                          id="SiteName"
                          name="SiteName"
                          placeholder="Site Name"
                          tabindex="1"
                          required
                          onChange={(e) => {
                            setSiteName(e.target.value); // assign value
                          }}
                        />
                      </div>

                      <div class="form-group col-sm">
                        <label class="form-label" for="SiteCategory">
                          Site Category:
                        </label>
                        <select
                          id="SiteCategory"
                          className="form-control formInput"
                          tabindex="2"
                          required
                          onChange={(e) => {
                            setSiteCategory(e.target.value); // assign value
                          }}
                        >
                          <option id="choose1">Select Site Category</option>
                          <option value="Historical Site">
                            Historical Site
                          </option>
                          <option value="Religious Site">Religious Site</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div class="form-group col-sm">
                        <label class="form-label" for="Description">
                          Description:
                        </label>
                        <textarea
                          class="form-control formInput"
                          placeholder="Enter Site Description"
                          id="Description"
                          tabindex="3"
                          required
                          onChange={(e) => {
                            setDescription(e.target.value); //assign value
                          }}
                        />
                      </div>

                      <div class="form-group col-sm">
                        <label class="form-label" for="Value">
                          Value:
                        </label>
                        <textarea
                          class="form-control formInput"
                          placeholder="Briefly Describe the Value of the Site"
                          id="Value"
                          tabindex="4"
                          // required
                          onChange={(e) => {
                            setValue(e.target.value); //assign value
                          }}
                        />
                      </div>

                      <div class="form-group col-sm">
                        <label class="form-label" for="VisitingHours">
                          Visiting Hours:{" "}
                        </label>
                        <input
                          type="time"
                          class="form-control"
                          id="VisitingHours"
                          placeholder="Visiting Hours"
                          tabindex="5"
                          required
                          onChange={(e) => {
                            setVisitingHours(e.target.value); // assign value
                          }}
                        />
                      </div>

                      <div class="form-group col-sm">
                        <label class="form-label" for="TicketingDetails">
                          Ticketing Details:
                        </label>
                        <textarea
                          class="form-control formInput"
                          placeholder="Enter Ticketing Details"
                          id="TicketingDetails"
                          tabindex="6"
                          required
                          onChange={(e) => {
                            setTicketingDetails(e.target.value); //assign value
                          }}
                        />
                      </div>

                      <div class="form-group col-sm">
                        <label class="form-label" for="DressCode">
                          Dress Code:
                        </label>
                        <textarea
                          class="form-control formInput"
                          placeholder="Enter Details about Dress Codes"
                          id="DressCode"
                          tabindex="7"
                          required
                          onChange={(e) => {
                            setDressCode(e.target.value); //assign value
                          }}
                        />
                      </div>

                      <div class="form-group col-sm">
                        <label class="form-label" for="Behaviour">
                          Behaviour:
                        </label>
                        <textarea
                          class="form-control formInput"
                          placeholder="Briefly explain about the behaviour that should maintain in the site"
                          id="Behaviour"
                          tabindex="8"
                          // required
                          onChange={(e) => {
                            setBehaviour(e.target.value); //assign value
                          }}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form4Example2">
                          Site Image1:{" "}
                        </label>
                        <input
                          onChange={handleImage1}
                          type="file"
                          id="formupload"
                          name="image"
                          className="form-control"
                        />
                      </div>
                      <img className="img-fluid" src={SiteImage1} alt="" />

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form4Example2">
                          Site Image2:{" "}
                        </label>
                        <input
                          onChange={handleImage2}
                          type="file"
                          id="formupload"
                          name="image"
                          className="form-control"
                        />
                      </div>
                      <img className="img-fluid" src={SiteImage2} alt="" />

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form4Example2">
                          Site Image3:{" "}
                        </label>
                        <input
                          onChange={handleImage3}
                          type="file"
                          id="formupload"
                          name="image"
                          className="form-control"
                        />
                      </div>
                      <img className="img-fluid" src={SiteImage3} alt="" />

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form4Example2">
                          Site Image4:{" "}
                        </label>
                        <input
                          onChange={handleImage4}
                          type="file"
                          id="formupload"
                          name="image"
                          className="form-control"
                        />
                      </div>
                      <img className="img-fluid" src={SiteImage4} alt="" />

                      <div className="row mt-2 mb-3">
                        <div className="col py-3 text-center">
                          <button type="submit" className="btn  btn-success">
                            Save
                          </button>
                        </div>
                        <div className="col py-3 text-center">
                          <button type="reset" className="btn btn-danger">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
}
