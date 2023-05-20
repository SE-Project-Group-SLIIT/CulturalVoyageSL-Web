import { React, useState, useEffect } from "react";
import axios from "axios";
import { Modal, ModalHeader } from "react-bootstrap";
import Swal from "sweetalert2";
// import ViewSite from './viewSite';
import Row from "react-bootstrap/Row";

const ViewAllSites = () => {
  const [viewSite, setViewSite] = useState([]);

  const [modalData, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

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

  const openModal = (site) => {
    setData(site);
    handleViewOnClick();
  };

  const handleViewOnClick = () => {
    setModalShow(true);
  };

  return (
    <Row
      style={{
        marginTop: "25px",
        marginBottom: "25px",
        backgroundColor: "ghostwhite",
        borderRadius: "20px",
        paddingLeft: "150px",
        paddingRight: "150px",
      }}
    >
      <div className="page-component-body">
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* <ViewSite data={modalData} onHide={() => setModalShow(false)} /> */}
        </Modal>
        <div className="table-emp ml-5 mr-5">
          <div className="ml-5 mr-5">
            <div class="py-5 text-center">
              <h2>List of Sites</h2>
            </div>

            <table class="table table-striped" id="myTable">
              <thead className="table-dark">
                <tr>
                  <th class="text-center">Site Name</th>
                  <th class="text-center">Site Category</th>
                  <th class="text-center">Visiting Hours</th>
                  <th class="text-center">Ticketing Details</th>
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
                        title="Click to view reservation"
                        className="view-td"
                      >
                        {site.SiteName}
                      </td>

                      <td class="text-center">{site.SiteCaategory}</td>
                      <td class="text-center">{site.VisitingHours}</td>
                      <td class="text-center">{site.TicketingDetails}</td>
                      <td class="text-center">
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button
                            class="btn btn-light btn-sm"
                            // onClick={() => openModalUpdate(profile)}
                          >
                            update
                          </button>

                          <button
                            class="btn btn-danger btn-sm"
                            // onClick={() => {
                            //     openModalDelete(profile);
                            // }}
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
    </Row>
  );
};

export default ViewAllSites;
