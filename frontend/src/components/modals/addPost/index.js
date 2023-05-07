import React from 'react';
import { Modal } from "react-bootstrap";
import './addPost.css'

export default function AddPost() {
    return (
        <div>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <section class="get-in-touch">
                    <h1 class="title">Write Question</h1>
                    <form class="contact-form row">
                        <center>
                            <div class="form-field col-lg-12">
                                <input id="name" class="input-text js-input" type="text" required />
                                <label class="label" for="name">Title :</label>
                            </div>
                        </center>
                        <center>
                        <div class="form-field col-lg-12">
                            <input id="message" class="input-text1 js-input" type="text" required />
                            <label class="label1" for="message">Message :</label>
                        </div>
                        </center>
                      
                        <center>
                            <div class="form-field col-lg-12">
                                <input id="name" class="input-text js-input" type="text" required />
                                <label class="label" for="name">Keywords :</label>
                            </div>
                        </center>
                        <center>
                            <div class="form-field col-lg-12">
                                <input id="name" class="input-text js-input" type="file" required />
                                <label class="label pr-4" for="name">Additional:</label>
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
