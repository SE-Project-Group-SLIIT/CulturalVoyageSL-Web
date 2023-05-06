import React from 'react'
import './communityDashboard.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaSearch } from "react-icons/fa";
import { BiHeart, BiMailSend, BiMessageDots, BiNotification, BiNews } from "react-icons/bi";
import NavBar from '../shared/Navbar';
import SearchBar from './SearchBar';
import { Form } from "react-bootstrap";
import { GoLocation } from "react-icons/go"
import {RiHotelLine} from "react-icons/ri"
import {BsCloudSun, BsFileEarmarkPerson ,BsFillCarFrontFill} from "react-icons/bs"
import {MdOutlineSportsCricket} from "react-icons/md"


const CommunityDashboard = () => {
    return (
        <>
            <NavBar />
            <Row>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{ borderRadius: 10 }}>
                    <div class="carousel-inner">
                        <div class="carousel-item active" style={{ height: 650 }}>
                            <img class="d-block w-100" src="images/sri-lanka-banner.png" alt="First slide" style={{ height: 700, width: 1884 }} />
                        </div>
                        <div class="carousel-item" style={{ height: 650 }}>
                            <img class="d-block w-100" src="images/Sri-lanka-cover.jpg" alt="Second slide" style={{ height: 650 }} />
                        </div>
                        <div class="carousel-item" style={{ height: 650 }}>
                            <img class="d-block w-100" src="images/Ella-Sri-Lanka.jpg" alt="Third slide" style={{ height: 650 }} />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </Row>
            <SearchBar />
            {/* <Row>
                <Col className='d-flex justify-content-center' style={{ width: 1000, height: 50, marginTop: 30 }}>
                    <Form className="d-flex" >
                        <Form.Control
                            type="search"
                            placeholder="   Search About Needs"
                            className="me-2 rounded-pill"
                            aria-label="Search"
                            style={{ width: 700, height: 50 }}
                        />
                        <Button className="rounded-pill" variant="outline-warning">
                            <FaSearch style={{ width: 25, height: 25 }} />
                        </Button>
                    </Form>
                </Col>
            </Row> */}
            <Row className='mt-4 d-flex justify-content-center'>
                <h3 style= {{fontFamily: 'Poppins',marginBottom:20}}>Related Searches</h3>
                <Col sm={8}>
                    <Row className='d-flex justify-content-center'>
                        <div className='col d-flex justify-content-center'>
                            <div className="card d-block justify-content-center" style={{ backgroundColor: '#FFF5F5', borderRadius: 10, width: 100, height: 100, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <GoLocation style={{ width: 70, height: 70, marginTop: 15 }} />
                                <p style={{ marginTop: 15 }}>Places</p>
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <div className="card d-block justify-content-center" style={{ backgroundColor: '#FF6C6C', borderRadius: 10, width: 100, height: 100, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <BsCloudSun style={{ width: 70, height: 70, marginTop: 15 }} />
                                <p style={{ marginTop: 15 }}>Weather</p>
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <div className="card d-block justify-content-center" style={{ backgroundColor: '#3480FF', borderRadius: 10, width: 100, height: 100, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <MdOutlineSportsCricket style={{ width: 70, height: 70, marginTop: 15 , color: 'white' }} />
                                <p style={{ marginTop: 15 }}>Sports</p>
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <div className="card d-block justify-content-center" style={{ backgroundColor: '#011F53', borderRadius: 10, width: 100, height: 100, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <BiNews style={{ width: 70, height: 70, marginTop: 15 , color: 'white'}} />
                                <p style={{ marginTop: 15 }}>News</p>
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <div className="card d-block justify-content-center" style={{ backgroundColor: '#730056', borderRadius: 10, width: 100, height: 100, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <BsFileEarmarkPerson style={{ width: 70, height: 70, marginTop: 15, color: 'white' }} />
                                <p style={{ marginTop: 15 }}>Guide</p>
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <div className="card d-block justify-content-center" style={{ backgroundColor: '#D80574', borderRadius: 10, width: 100, height: 100, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <BsFillCarFrontFill style={{ width: 70, height: 70, marginTop: 15 }} />
                                <p style={{ marginTop: 15 }}>Transport</p>
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <div className="card d-block justify-content-center" style={{ backgroundColor: '#FFE0F0', borderRadius: 10, width: 100, height: 100, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <RiHotelLine style={{ width: 70, height: 70, marginTop: 15 }} />
                                <p style={{ marginTop: 15 }}>Hotels</p>
                            </div>
                        </div>
                    </Row>
                </Col>

            </Row>


            <Row className="mt-5">

                <div className="col-9">
                    <Row>
                        <div className='d-flex justify-content-end'>
                            <button type="button" class="btn btn-primary">Primary</button>
                            <BiNotification style={{ width: 30, height: 30, marginLeft: 10, marginRight: 10 }} />
                        </div>
                    </Row>
                    <Row className="mt-3" >
                        <div className="col">
                        </div>
                        <div className="col-8 ">
                            <div className="card" style={{ borderRadius: 10, height: 150, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <div className="card-header d-flex justify-content-left">
                                    Quote
                                </div>
                                <div className="card-body d-flex justify-content-left">
                                    <blockquote className="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 p-0" style={{ borderRadius: 10, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }}>
                            <div className="card" style={{ borderRadius: 10, height: 150 }}>
                                <div className='row' style={{ marginTop: 30 }}>
                                    <div className='col-7' style={{ marginLeft: 10 }}>
                                        <p style={{ fontFamily: "Gill Sans", fontSize: 19, marginTop: 5 }}>Any Related Questions?</p>
                                    </div>
                                    <div className='col'>
                                        <div className='d-flex justify-content-center'>
                                            <button type="button" class="btn btn-primary btn-outline-info" style={{ width: 100, height: 40, borderRadius: '1.25rem', boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px', color: 'white' }}>Reply</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col d-flex justify-content-center'>
                                        <p style={{ fontFamily: "Gill Sans", fontSize: 19, marginTop: 2, marginRight: 3 }}>3</p>
                                        <BiHeart style={{ width: 30, height: 30 }} />
                                    </div>
                                    <div className='col d-flex justify-content-center'>
                                        <p style={{ fontFamily: "Gill Sans", fontSize: 19, marginTop: 2, marginRight: 3 }}>3</p>
                                        <BiMessageDots style={{ width: 30, height: 30 }} />
                                    </div>
                                    <div className='col d-flex justify-content-center'>
                                        <BiMailSend style={{ width: 30, height: 30 }} />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </Row>
                    <Row className="mt-3" >
                        <div className="col">
                        </div>
                        <div className="col-8 ">
                            <div className="card" style={{ height: 150 }} >
                                <div className="card-header d-flex justify-content-left">
                                    Quote
                                </div>
                                <div className="card-body d-flex justify-content-left">
                                    <blockquote className="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 p-0" style={{ borderRadius: 10, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }}>
                            <div className="card" style={{ height: 150, borderRadius: 10 }}>
                                <div className='row' style={{ marginTop: 30 }}>
                                    <div className='col-7' style={{ marginLeft: 10 }}>
                                        <p style={{ fontFamily: "Gill Sans", fontSize: 19, marginTop: 5 }}>Any Related Questions?</p>
                                    </div>
                                    <div className='col'>
                                        <div className='d-flex justify-content-center'>
                                            <button type="button" class="btn btn-primary btn-outline-info" style={{ width: 100, height: 40, borderRadius: '1.25rem', boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px', color: 'white' }}>Reply</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col d-flex justify-content-center'>
                                        <p style={{ fontFamily: "Gill Sans", fontSize: 19, marginTop: 2, marginRight: 3 }}>3</p>
                                        <BiHeart style={{ width: 30, height: 30 }} />
                                    </div>
                                    <div className='col d-flex justify-content-center'>
                                        <p style={{ fontFamily: "Gill Sans", fontSize: 19, marginTop: 2, marginRight: 3 }}>3</p>
                                        <BiMessageDots style={{ width: 30, height: 30 }} />
                                    </div>
                                    <div className='col d-flex justify-content-center'>
                                        <BiMailSend style={{ width: 30, height: 30 }} />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </Row>
                    <Row className="mt-3">
                        <div className="col">
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <div className="card-header">
                                    Quote
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">
                                    Quote
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row className="mt-3">
                        <div className="col">
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <div className="card-header">
                                    Quote
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">
                                    Quote
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row className="mt-3">
                        <div className="col">
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <div className="card-header">
                                    Quote
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header">
                                    Quote
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
                <div className="col-2">
                    <Row className='mt-3'>
                        <div className="col">
                        </div>
                        <div className="col-10">
                            <div className="card">
                                <div className="card-header">
                                    Top Members
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </Row>
        </>
    )
}

export default CommunityDashboard