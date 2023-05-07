import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";


//import OrderUpdateModal from "./OrderUpdate";

function UserlList() {

    let history = useHistory();

    
    const [orderlList, setOrderList] = useState([]);
   
    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);

    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);
   

    useEffect(() => {

      
            function getOrder() {
                axios.get(`http://localhost:5000/user/getAllUsers`).then((res) => { //normally the fetched rental record details are displayed through this
                    //setRentals(res.data.reverse());
                    setOrderList(res.data.data);
                }).catch((error) => {
                    alert(error.message);
                    
                })
            }
            getOrder();
    }, []);

    useEffect(() => {

    }, [modalDataDelete]);

    // set delete modal
    const openModalDelete = (data) => {
        setModalDataDelete(data);
        setModalDeleteConfirm(true);
    };

    // set update modal
    const openModalUpdate = (data) => {
        console.log("request came for modal updateeeeeee", data);
        setModalDataUpdate(data);
        setModalUpdate(true);

    }

    function deleteOrder(data) {
        axios.delete(`http://localhost:5000/user/deleteUser`, { data, }).then(() => {
            alert("Data deleted");
            window.location.reload();
        }).catch((err) => {
            alert("error", err);
        })
    }

    // refresh page
    function refreshPage() {
        window.location.reload();
    }


    return (
        
        <div className="page-component-body">
            
            
            
            <div className="table-emp ">
                <div class="row table-head mt-3">
                    <div class="col">
                        <center><h3 className="float-left">List of Users</h3></center>
                    </div>
                    
                    
                </div>
                <div class="row table-head-search">
                    <div className="col-md-8"></div>

                    <div className="col">
                        <div class="input-group input-group-search">
                           
                        </div>
                    </div>

                </div>


                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Phone no</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Location</th>
                            <th>Bio</th>
                            <th></th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {orderlList.map((user) => {
                            return (

                                <tr >

                                    <td >{user.Name}</td>
                                    <td >{user.MobileNumber}</td>
                                    <td >{user.Email}</td>
                                    <td >{user.Password}</td>
                                    <td >{user.Location}</td>
                                    <td >{user.Bio}</td>
                                    <td>

                                        <button
                                            class="btn btn-light btn-sm"
                                            onClick={() => openModalUpdate(user)}
                                        >
                                            update
                                        </button>
                                        
                                        <button
                                            class="btn btn-danger btn-sm"
                                            onClick={() => {
                                                openModalDelete(user);
                                            }}
                                            role="button">
                                                    remove
                                        </button>

                                    </td>
                                   
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            
            <Modal
                show={modalDeleteConfirm}
                size='md'
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you want to delete this Order ?</p>
                </Modal.Body>
                <Modal.Footer>
                    <div className='row'>
                        <div className='col-6 mt-1'>
                            <button
                                type='submit'
                                className='btn btn-danger'
                                onClick={()=>{
                                    deleteOrder(modalDataDelete);
                                }}
                            >
                                Confirm
                            </button>
                        </div>
                        <div
                            className='col-6 text-right mt-1'
                            onClick={()=>setModalDeleteConfirm(false)}
                        >
                            <button type='reset' className='btn btn-warning'>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>

                              

        </div >
    )


}

export default UserlList;