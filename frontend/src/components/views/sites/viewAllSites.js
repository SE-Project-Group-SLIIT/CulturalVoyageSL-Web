import { React, useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, ModalHeader } from "react-bootstrap";
import Swal from "sweetalert2";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ViewSiteModal from "./viewSiteModal";
import NavBar from '../shared/adminNavBar'
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import UpdateSite from "./updateSite";
import FooterBar from "../shared/FooterBar";
import { deleteSiteService,searchSiteService } from "../../services/siteService";

const ViewAllSites = () => {
  const [viewSite, setViewSite] = useState([]);

  const [search, setSearch] = useState("");

  const [modalData, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const [modalDataDelete, setModalDataDelete] = useState([]);
  const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);

  const [modalDataUpdate, setModalDataUpdate] = useState([]);
  const [ModalUpdateConfirm, setModalUpdateConfirm] = useState(false);

  useEffect(() => {
    console.log("view All...");
    getSites();
  }, []);

  function getSites() {
    console.log("view all sites - admin");

    axios
      .get(`http://localhost:5000/site/allSites`)
      .then((res) => {
        console.log(res.data.data);
        setViewSite(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  useEffect(() => {}, [modalDataDelete]);

  const openModal = (site) => {
    setData(site);
    handleViewOnClick();
  };

  const handleViewOnClick = () => {
    setModalShow(true);
  };

  // delete modal
  const openModalDelete = (data) => {
    setModalDataDelete(data);
    setModalDeleteConfirm(true);
  };

  // update modal
  const openModalUpdate = (data) => {
    console.log("openModalUpdate", data);
    setModalDataUpdate(data);
    setModalUpdateConfirm(true);
  };

  async function deleteSite(data) {
    console.log("delete site", data);
    // let response = await deleteSiteService({data});
    // if(response.ok){
    //   Swal.fire({
    //     title: 'Are you sure?',
    //     text:'Do you want to delete this record permenently',
    //     icon:'warning',
    //     timer:2000,
    //     showCancelButton:true,
    //     confirmButtonText:'Delete',

    //   }).then((result)=>{
    //     if(result.isConfirmed){
    //       Swal.fire({
    //         title:'Deleted',
    //         text: 'Site Deleted Permenently',
    //         icon:'success',
    //         timer:2000
    //       }).then(()=>{
    //         window.location.reload();
    //       })
    //     }
    //   })
    // }else{
    //   console.log("error",response);
    //   Swal.fire({
    //           icon: "warning",
    //           title: "Oops...",
    //           text: `${response}`,
    //           confirmButtonColor: "#1fc191",
    //         });
    // }
    axios
      .delete(`http://localhost:5000/site/deleteSite`, { data })
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Buyer Profile Deleted Succesfully",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          window.location.reload();
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: `${err}`,
          confirmButtonColor: "#1fc191",
        });
      });
  }

  async function searchSite(e) {
    console.log("search...", search);
    e.preventDefault();

    let response = await searchSiteService(search);
    if (response.ok) {
      console.log("search>>", response.data.data);
      setViewSite(response.data.data);
    }
  }

  // refresh page
  function refreshPage() {
    window.location.reload();
  }

  const history = useHistory();

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Row
        style={{
          //   marginTop: "20px",
          //   marginBottom: "25px",
          //   backgroundColor: "ghostwhite",
          //   borderRadius: "20px",
          paddingLeft: "100px",
          paddingRight: "100px",
          //   paddingTop: "2px",
        }}
      >
        <div className="page-component-body">
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <ViewSiteModal
              data={modalData}
              onHide={() => setModalShow(false)}
            />
          </Modal>
          <div className="table-emp ml-5 mr-5">
            <div className="ml-5 mr-5">
              <div
                class="py-4 text-center"
                style={{ fontFamily: "sans-serif",fontWeight: "bold",
                fontSize: "30px" }}
              >
                <h1>List of Sites</h1>
              </div>

              <Row style={{marginBottom:'25px', alignContent:'center'}}>
              <Col className='d-flex justify-content-flex-end' style={{ width: 1000, height: 50, marginTop: 3, }}>
                <Form className="d-flex" onSubmit={searchSite}>
                  <Form.Control
                    type="search"
                    placeholder="Search Site..."
                    className="rounded-pill me-2"
                    aria-label="Search"
                    style={{ width: 400, height: 50, marginLeft: 40 }}
                    value={search}
                    onChange={(site) => {
                      setSearch(site.target.value);
                    }}
                  ></Form.Control>
                 
                  <Button
                    class="rounded-pill me-4"
                    variant="outline-warning"
                    style={{width: 50, height: 50, position: '',top: 0,  borderTopLeftRadius: 30, borderBottomLeftRadius: 30,borderTopRightRadius: 30, borderBottomRightRadius: 30, marginRight: 400}}
                    type="submit"
                  >
                    <FaSearch style={{ width: 25, height: 25, }}/>
                  </Button>
                </Form>
                <Button
                  variant="success"
                  onClick={() => {
                    history.push("/addSite");
                  }}
                  style={{justifyContent: "flex-end",width: 150,borderTopLeftRadius: 30, borderBottomLeftRadius: 30,borderTopRightRadius: 30, borderBottomRightRadius: 30}}
                >
                  Add New Site
                </Button>
                </Col>
                
                </Row>

              {/* <div
                style={{
                  marginTop: "3px",
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: "60px",
                }}
              >
                <Button
                  variant="success"
                  onClick={() => {
                    history.push("/addSite");
                  }}
                >
                  Add Site
                </Button>
              </div> */}

              <table class="table table-striped" id="myTable">
                <thead className="table-dark">
                  <tr>
                    <th class="text-center">Site Name</th>
                    <th class="text-center">Site Category</th>
                    <th class="text-center">Visiting Hours</th>
                    {/* <th class="text-center">Ticketing Details</th> */}
                    <th class="text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {viewSite.map((site) => {
                    return (
                      <tr>
                        <td
                          class="text-center"
                          onClick={() => openModal(site)}
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Click to view site"
                          className="view-td"
                        >
                          {site.SiteName}
                        </td>

                        <td class="text-center">{site.SiteCategory}</td>
                        <td class="text-center">{site.VisitingHours}</td>
                        {/* <td class="text-center">{site.TicketingDetails}</td> */}
                        <td class="text-center">
                          <div
                            class="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button
                              class="btn btn-warning btn-sm"
                              onClick={() => openModalUpdate(site)}
                              style={{marginRight: "10px", borderRadius: '50px'}}
                            >
                              update
                            </button>

                            <button
                              class="btn btn-danger btn-sm"
                              onClick={() => {
                                openModalDelete(site);
                              }}
                              style={{marginLeft: "10px",borderRadius: '50px'}}
                              role="button"
                            >
                              remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Row style={{marginTop: 80}}>
          <FooterBar></FooterBar>
        </Row>
      </Row>

      <Modal
        show={ModalUpdateConfirm}
        onHide={() => setModalUpdateConfirm(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <UpdateSite
          data={modalDataUpdate}
          onHide={() => setModalDataUpdate(false)}
        />
      </Modal>

      <Modal
        show={modalDeleteConfirm}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton >
          <Modal.Title >Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{textAlign:'center', fontSize:'25px'}}>
          <p>Are you want to delete this site ?</p>
        </Modal.Body>
        <Modal.Footer>
          <div className="row">
            <div className="col-6 mt-1">
              <Button
                type="submit"
                className="btn btn-danger"
                onClick={() => {
                  deleteSite(modalDataDelete);
                }}
                style={{borderRadius: '50px'}}
              >
                Confirm
              </Button>
            </div>
            <div
              className="col-6 text-right mt-1"
              onClick={() => setModalDeleteConfirm(false)}
            >
              <Button type="reset" className="btn btn-warning" style={{borderRadius: '50px'}}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewAllSites;
