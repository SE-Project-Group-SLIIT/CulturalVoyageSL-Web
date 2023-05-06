import React, { useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import Card from 'react-bootstrap/Card';

export default function AddSite() {
    const [SiteName, setSiteName] = useState("");
    const [SiteCategory, setSiteCategory] = useState("");
    const [Description, setDescription] = useState("");
    const [Value, setValue] = useState("");
    const [VisitingHours, setVisitingHours] = useState("");
    const [TicketingDetails, setTicketingDetails] = useState("");
    const [DressCode, setDressCode] = useState("");
    const [Behaviour, setBehaviour] = useState("");

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
            Behaviour
        }

        axios.post("http://localhost:5000/site/addSite", newSite).then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Site Details Added Succesfully',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                // window.location.replace("#");
                window.location.reload();
            })
        }).catch((err) => {
            const msgerr = err.response.data.status
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: `${msgerr}`,
                confirmButtonColor: '#1fc191',

            })
        })
    }

    return (
        <Card style={{ padding: '15px' }}>
            <Card.Body>
                <div class="page-component-body">
                    <div class="container input-main-form-emp pt-3">
                        <div class="container border-top">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <h3 className="topic-V text-left mt-4 mb-4">Add New Site</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <form id="contact-form" class="form" role="form" onSubmit={sendData}>

                                        <div class="form-group">
                                            <label class="form-label" for="SiteName">Site Name : </label>
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
                                            <label class="form-label" for="SiteCategory">Site Category:</label>
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
                                                <option value="Historical Site">Historical Site</option>
                                                <option value="Religious Site">Religious Site</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div class="form-group col-sm">
                                            <label class="form-label" for="Description">Description:</label>
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
                                            <label class="form-label" for="Value">Value:</label>
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
                                            <label class="form-label" for="VisitingHours">Visiting Hours: </label>
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
                                            <label class="form-label" for="TicketingDetails">Ticketing Details:</label>
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
                                            <label class="form-label" for="DressCode">Dress Code:</label>
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
                                            <label class="form-label" for="Behaviour">Behaviour:</label>
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
    )
}