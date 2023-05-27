import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { Modal } from 'react-bootstrap';
import "../views/profile.css";
import axios from "axios";
import ProfileUpdate from "../views/profileUpdate";
import { useHistory } from "react-router-dom";
import NavBar from './shared/NavBar';

export default function Profile() {

  const [user, setUser] = useState([]);
  const [id, setId] = useState("");

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  //const [Password, setPassword] = useState("");
  const [MobileNumber, setMobile] = useState("");
  const [Location, setLocation] = useState("");
  const [Bio, setBio] = useState("");

  const [ModalProfileUpdate, setModalProfileUpdate] = useState([]);
  const [ModalUpdateConfirm, setModalUpdateConfirm] = useState(false);

  let history = useHistory();
  const win = window.sessionStorage;

  const loadData = () => {
    // fetch buyer data
    axios.get(`https://culturalvoyagesl-backend-plcp.onrender.com/user/getUser/${Email}`).then((response) => {

        console.log(response.data);
        console.log(response.data.data[0])
        let data = {
            Name :response.data.data[0].Name
        }

        setUser(response.data.data[0]);

        setName(response.data.data[0].Name);
        setEmail(response.data.data[0].Email);
        //setPassword(response.data.data[0].Password);
        setMobile(response.data.data[0].MobileNumber);
        setLocation(response.data.data[0].Location);
        setBio(response.data.data[0].Bio);

        console.log(user);
    })
  }

  useEffect(() => {
    if (win.getItem("Email")) {
        setEmail(win.getItem("Email"));
        win.getItem("_id");
    } if (Email) {
        loadData();
        console.log(Email);
    }

  }, [Email])

  
  const openmodalUpdate = (data) => {
    console.log("openModalUpdate", data);
    setModalProfileUpdate(data);
    setModalUpdateConfirm(true);
  }

  return (
    <>
    <NavBar />
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="8" className="mb-4 mb-lg-5">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{Name}</MDBTypography>
                  <MDBCardText>Tour Guide</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">User Profile</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{Email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{MobileNumber}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Location</MDBTypography>
                        <MDBCardText className="text-muted">{Location}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Bio</MDBTypography>
                        <MDBCardText className="text-muted">{Bio}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <MDBBtn color='primary' onClick={() => openmodalUpdate(user)}>Edit</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


      <Modal
        show={ModalUpdateConfirm}
        onHide={() => setModalUpdateConfirm(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ProfileUpdate
          data={ModalProfileUpdate}
          onHide={() => setModalProfileUpdate(false)}
        />
      </Modal>

    </section>
    </>

  );
}