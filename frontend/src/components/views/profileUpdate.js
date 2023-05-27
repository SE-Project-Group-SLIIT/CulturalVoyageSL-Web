import { React, useEffect, useState } from "react";
import { Modal, ModalTitle } from "react-bootstrap";
import { Card } from "react-bootstrap";
import axios from "axios";

export default function UpdateProfile({ data }) {
    console.log("UpdateProfile", data);

    useEffect(() => {
        try {
            console.log("set data>>>>>>", data);
            setName(data.Name);
            setEmail(data.Email);
            setMobile(data.MobileNumber);
            setPassword(data.Password);
            setLocation(data.Location);
            setBio(data.Bio);
        } catch (err) {
            window.alert("something went wrong", err);
        }
    }, []);

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [MobileNumber, setMobile] = useState("");
    const [Password, setPassword] = useState("");
    const [Location, setLocation] = useState("");
    const [Bio, setBio] = useState("");

    function sendData(e) {
        e.preventDefault();

        console.log("sendData");

        const updateProfile = {
            Name,
            Email,
            MobileNumber,
            Password,
            Location,
            Bio,
        }

        axios.post(`https://culturalvoyagesl-backend-plcp.onrender.com/user/updateUser/${data._id}`, updateProfile).then(() => {
            console.log(data._id);
            alert("User Updated")
            window.location.replace("/profile");
        }).catch((err) => {
            console.log("error")
            alert(err)
        })
    }

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Update Profile: {data.Name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
                <div>
                    <hr></hr>
                    <div className="container border-top">

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <form id="contact-form" className="form" role="form" onSubmit={sendData}>

                                    <div class="form-group col-sm">
                                        <label class="form-label" for="name">Name </label>
                                        <input
                                            type="text"
                                            class="form-control formInput"
                                            id="name"
                                            name="name"
                                            placeholder="Buyer Name"
                                            tabindex="1"
                                            required
                                            onChange={(e) => {
                                                setName(e.target.value); // assign value
                                            }}
                                            value={Name}
                                        />
                                    </div>

                                    <div class="form-group col-sm">
                                        <label class="form-label" for="email">Email </label>
                                        <input
                                            type="email"
                                            class="form-control formInput"
                                            id="email"
                                            name="email"
                                            placeholder="E-mail"
                                            tabindex="2"
                                            required
                                            onChange={(e) => {
                                                console.log("set email");
                                                setEmail(e.target.value); // assign value
                                            }}
                                            value={Email}
                                            disabled
                                        />
                                    </div>

                                    <div class="form-group col-sm">
                                        <label class="form-label" for="mobile">Mobile No. </label>
                                        <input
                                            type="text"
                                            class="form-control formInput"
                                            id="mobile"
                                            name="mobile"
                                            placeholder="Mobile No."
                                            tabindex="3"
                                            required
                                            onChange={(e) => {
                                                setMobile(e.target.value); // assign value
                                            }}
                                            value={MobileNumber}
                                        />
                                    </div>

                                    <div class="form-group col-sm">
                                        <label class="form-label" for="password">Password</label>
                                        <input
                                            type="text"
                                            class="form-control formInput"
                                            id="passwword"
                                            name="password"
                                            // placeholder="Enter Strong Password"
                                            tabindex="4"
                                            required
                                            value={Password}
                                            onChange={(e) => {
                                                console.log("set password");
                                                setPassword(e.target.value); // assign value
                                            }}
                                            
                                        />
                                    </div>

                                    <div class="form-group col-sm">
                                        <label class="form-label" for="mobile">Location </label>
                                        <input
                                            type="text"
                                            class="form-control formInput"
                                            id="location"
                                            name="location"
                                            placeholder="Location"
                                            tabindex="5"
                                            required
                                            onChange={(e) => {
                                                setLocation(e.target.value); // assign value
                                            }}
                                            value={Location}
                                        />
                                    </div>

                                    <div class="form-group col-sm">
                                        <label class="form-label" for="mobile">Bio </label>
                                        <input
                                            type="text"
                                            class="form-control formInput"
                                            id="bio"
                                            name="bio"
                                            placeholder="Bio"
                                            tabindex="6"
                                            required
                                            onChange={(e) => {
                                                setBio(e.target.value); // assign value
                                            }}
                                            value={Bio}
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
            </Modal.Body>
        </div>
    )
}