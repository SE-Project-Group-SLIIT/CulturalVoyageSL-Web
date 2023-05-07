import React, { useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { useHistory } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';

export default function Register() {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [MobileNumber, setMobile] = useState("");
    const [Password, setPassword] = useState("");
    const [Location, setLocation] = useState("");
    const [Bio, setBio] = useState("");

    let history = useHistory();


    function sendData(e) {
        e.preventDefault();
        console.log("send data");

        const newUser = {
            Name,
            Email,
            MobileNumber,
            Password,
            Location,
            Bio
        };

        axios.post("http://localhost:5000/user/addUser", {
            Name,
            Email,
            MobileNumber,
            Password,
            Location,
            Bio
        }).then(() => {
            alert("User Added")
            // window.location.reload();
            history.push("/login");
            window.location.reload();
        }).catch((err) => {
            console.log("error")
            alert(err)
        })
    }


    return (
      <form>
        <MDBContainer fluid>
    
          <MDBRow className='d-flex justify-content-center align-items-center'>
    
            <MDBCol lg='5'>
    
              <MDBCard className='my-5 rounded-3' style={{maxWidth: '600px'}}>
                <MDBCardImage src='https://us.123rf.com/450wm/mlnuwan/mlnuwan1903/mlnuwan190300001/121794885-panoramic-picture-of-sigiriya-rock-fortress-a-unesco-world-heritage-site-seen-from-sigiriya-lake.jpg?ver=6' className='w-100 rounded-top'  alt="Sample photo"/>
    
                <MDBCardBody className='px-5'>
    
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Form</h3>
          
    
                  <MDBRow>
    
                    <MDBCol md='6'>
                      <MDBInput wrapperClass='datepicker mb-4' label='Name' id='form1' type='text'/>
                      <MDBInput wrapperClass='mb-4' label='Email' id='form2' type='text'/>
                      <MDBInput wrapperClass='mb-4' label='Location' id='form6' type='text'/>
                    </MDBCol>
    
                    <MDBCol md='6' className='mb-4'>
                      <MDBInput wrapperClass='mb-4' label='Phone No' id='form3' type='text'/>
                      <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='text'/>
                    </MDBCol>
    
                  </MDBRow>
    
                  <MDBRow>
                    
                      <MDBInput wrapperClass='mb-4' label='Bio' id='form5' type='text'/>
                    
                  </MDBRow>

                  <MDBCol md='12' className='mb-4'>
                  <MDBBtn color='success' type="submit" className='mb-4' size='sm'>Submit</MDBBtn>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <MDBBtn color='danger' type="reset" className='mb-4' size='sm'>Cancel</MDBBtn>
                  </MDBCol>

                </MDBCardBody>
              </MDBCard>
    
            </MDBCol>
          </MDBRow>
    
        </MDBContainer>
        </form>
      );
    }