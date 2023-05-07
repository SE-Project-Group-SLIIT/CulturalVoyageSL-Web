import React from 'react';
import Row from 'react-bootstrap/Row';
import { Modal } from "react-bootstrap";

export default function ViewReplys() {
  return (
    <div>
      <Modal.Header closeButton>
        <h3>All Replies</h3>
      </Modal.Header>
      <Modal.Body>
        <Row className='mb-2'>
          <div className='col-1'>
            <img src="images/Ella-Sri-Lanka.jpg" class="rounded" alt="Profile pic" style={{ width: 50, height: 50 }} />
          </div>
          <div className="col-11 d-flex flex-column justify-content-left">
            <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 8 }}><strong>Anonymous</strong></p>
            <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 8 }}>Use uber or pickme, They gave u normal prices</p>
          </div>
        </Row>
        <hr />
        <Row className='mb-2'>
          <div className='col-1'>
            <img src="images/Ella-Sri-Lanka.jpg" class="rounded" alt="Profile pic" style={{ width: 50, height: 50 }} />
          </div>
          <div className="col-11 d-flex flex-column justify-content-left">
            <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 8 }}><strong>Anonymous</strong></p>
            <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 8 }}>Good to go with metered taxi services</p>
          </div>
        </Row>
        <hr />
        <Row className='mb-2'>
          <div className='col-1'>
            <img src="images/Ella-Sri-Lanka.jpg" class="rounded" alt="Profile pic" style={{ width: 50, height: 50 }} />
          </div>
          <div className="col-11 d-flex flex-column justify-content-left">
            <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 8 }}><strong>Anonymous</strong></p>
            <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 8 }}>Per 1km maybe rs 100.00</p>
          </div>
        </Row>
        <hr />
      </Modal.Body>
    </div>
  )
}
