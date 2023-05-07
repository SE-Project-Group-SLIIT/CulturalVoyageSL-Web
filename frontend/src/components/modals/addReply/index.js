import React from 'react'
import { Modal } from "react-bootstrap";
import './addReply.css'

export default function addReply() {
  return (
    <div>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <section class="get-in-touch">
                    <h1 class="title">Write Reply</h1>
                    <form class="contact-form row">
                        <center>
                            <div class="form-field col-lg-12">
                                <input id="name" class="input-text js-input" type="text" required />
                                <label class="label" for="name">Reply:</label>
                            </div>
                        </center>
                        <div class="form-field col-lg-12 ">
                            <div className='row d-flex justify-content-end mr-5'>
                            <input class="submit-btn" type="submit" value="Submit" />
                            </div>
                            
                        </div>
                    </form>
                </section>
            </Modal.Body>
        </div>
  )
}
