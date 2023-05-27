import { React, useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

import { Modal } from "react-bootstrap";




function UserUpdate({data}) {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [Password, setPassword] = useState("");
    const [Location, setLocation] = useState("");
    const [Bio, setBio] = useState("");

    useEffect(() => {
        console.log("set data>>>>>>", data);
            setName(data.Name);
            setEmail(data.Email);
            setMobileNumber(data.MobileNumber);
            setPassword(data.Password);
            setLocation(data.Location);
            setBio(data.Bio);
    }, [data]);


    const onSubmit = async e => {
        e.preventDefault();//to prevent the default submission by submit button

        //alert(penDay);
        //alert(rem);

        //const answer = window.confirm("Are you sure you want to update details?");
        Swal.fire({
            title: "Are you sure you want to confirm submission? ",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Proceed",
            denyButtonText: "Cancel",
            confirmButtonColor: "#1fc191",

        }).then((result) => {

            if (result.isConfirmed) {

                const newUser = { Name, Email, MobileNumber, Password, Location, Bio }

                axios.post(`https://culturalvoyagesl-backend-plcp.onrender.com/user/updateUser/${data._id}`, newUser).then(() => {
                    //alert("Rental Record successfully Updated");
                    Swal.fire({
                        title: "Order Record successfully Updated! ",
                        icon: 'success',
                        confirmButtonColor: "#207159",


                    }).then((res) => {
                        if (res.isConfirmed) {
                            window.location.replace('/admin');
                        }
                    })


                }).catch((err) => {
                    //alert(err.response.data.error);
                    Swal.fire({
                        title: "Error occured ! ",
                        text: `${err.response.data.error}`,
                        icon: 'error',
                        confirmButtonColor: "#207159",

                    })

                })

            } else if (result.isDenied) {
                refreshPage();
            }

        })
    }


    function refreshPage() {
        window.location.reload();
    }

    return (

        <div>
            <Modal.Header closeButton>
                <Modal.Title>User - {Name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form onSubmit={onSubmit} action="post" id="contact-form" class="form" role="form">
                            <div class="container">
                                <div class="form-row">
                                    <div class="col-md-3">
                                        <label class="customersize2" for="customer">User Accounts</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <br></br>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md"  >

                                            <div className="form-group col-md-6 ">
                                                <label class="form-label" for="cName">Name :</label>
                                                <input
                                                    required
                                                    id="name"
                                                    type="text"
                                                    className="form-control formInput"
                                                    value={Name}
                                                    
                                                    onChange={(e) => {
                                                        setName(e.target.value);
                                                    }}
                                                />
                                            </div>
                                            
                                        </div>

                                        <div className="row">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                                <div class="d-grid gap-2 d-md-flex justify-content-md"  >
                                                    <div className="form-group col-md-6 ">
                                                        <label class="form-label" for="cAddress">Email:</label>
                                                        <input
                                                            required
                                                            id="email"
                                                            type="text"
                                                            className="form-control formInput "
                                                            value={Email}
                                                            
                                                            onChange={(e) => {
                                                                setEmail(e.target.value);
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="form-group col-md-6 ">
                                                        <label class="form-label" for="cNIC">Mobile Number:</label>
                                                        <input
                                                            required
                                                            id="phone"
                                                            type="text"
                                                            className="form-control formInput"
                                                            value={MobileNumber}
                                                            
                                                            onChange={(e) => {
                                                                setMobileNumber(e.target.value);
                                                            }}
                                                        />
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                                <div class="d-grid gap-2 d-md-flex justify-content-md"  >
                                                    <div className="form-group col-md-6 ">
                                                        <label class="form-label" for="cAddress">Password:</label>
                                                        <input
                                                            required
                                                            id="pass"
                                                            type="text"
                                                            className="form-control formInput "
                                                            value={Password}
                                                            
                                                            onChange={(e) => {
                                                                setPassword(e.target.value);
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="form-group col-md-6 ">
                                                        <label class="form-label" for="cAddress">Location:</label>
                                                        <input
                                                            required
                                                            id="location"
                                                            type="text"
                                                            className="form-control formInput "
                                                            value={Location}
                                                            
                                                            onChange={(e) => {
                                                                setLocation(e.target.value);
                                                            }}
                                                        />
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                                <div class="d-grid gap-2 d-md-flex justify-content-md"  >
                                                    <div className="form-group col-md-6 ">
                                                        <label class="form-label" for="cAddress">Bio:</label>
                                                        <input
                                                            required
                                                            id="bio"
                                                            type="text"
                                                            className="form-control formInput "
                                                            value={Bio}
                                                            
                                                            onChange={(e) => {
                                                                setBio(e.target.value);
                                                            }}
                                                        />
                                                    </div>

                                                    

                                                    

                                                    

                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col py-3 text-center">
                                        <button type="submit" className="btn btn-ok">
                                            Update
                                        </button>
                                    </div>
                                    <div className="col py-3 text-center">
                                        <button type="reset" className="btn btn-reset">
                                            Cancel
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </Modal.Body >


        </div >
    )
}

export default UserUpdate;