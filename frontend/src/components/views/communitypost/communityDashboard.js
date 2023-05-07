import React from 'react'
import './communityDashboard.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaSearch } from "react-icons/fa";
import { BiHeart, BiMailSend, BiMessageDots, BiNotification, BiNews, BiEditAlt } from "react-icons/bi";
import NavBar from '../shared/Navbar';
import SearchBar from './SearchBar';
import { Form } from "react-bootstrap";
import { GoLocation } from "react-icons/go"
import { RiHotelLine, RiNotification3Line } from "react-icons/ri"
import { BsCloudSun, BsFileEarmarkPerson, BsFillCarFrontFill } from "react-icons/bs"
import { MdOutlineSportsCricket } from "react-icons/md"


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
                <h3 style={{ fontFamily: "'Poppins', sans-serif", marginTop: 10 }}><strong>Related Searches</strong></h3>
                {/* <h3 style={{ fontFamily: 'Poppins', marginBottom: 20 }}></h3> */}
                <Col sm={8}>
                    <Row className='d-flex justify-content-center'>
                        <div className='col d-flex justify-content-center'>
                            <div className="card-new d-block justify-content-center" style={{ backgroundColor: '#FFF5F5', borderRadius: 10, width: 100, height: 100, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <GoLocation style={{ width: 70, height: 70, marginTop: 15 }} />
                                <p style={{ marginTop: 15 }}>Places</p>
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <div className="card-new d-block justify-content-center" style={{ backgroundColor: '#FF6C6C', borderRadius: 10, width: 100, height: 100, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <BsCloudSun style={{ width: 70, height: 70, marginTop: 15 }} />
                                <p style={{ marginTop: 15 }}>Weather</p>
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <div className="card-new d-block justify-content-center" style={{ backgroundColor: '#3480FF', borderRadius: 10, width: 100, height: 100, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <MdOutlineSportsCricket style={{ width: 70, height: 70, marginTop: 15, color: 'white' }} />
                                <p style={{ marginTop: 15 }}>Sports</p>
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <div className="card-new d-block justify-content-center" style={{ backgroundColor: '#011F53', borderRadius: 10, width: 100, height: 100, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <BiNews style={{ width: 70, height: 70, marginTop: 15, color: 'white' }} />
                                <p style={{ marginTop: 15 }}>News</p>
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <div className="card-new d-block justify-content-center" style={{ backgroundColor: '#730056', borderRadius: 10, width: 100, height: 100, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <BsFileEarmarkPerson style={{ width: 70, height: 70, marginTop: 15, color: 'white' }} />
                                <p style={{ marginTop: 15 }}>Guide</p>
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <div className="card-new d-block justify-content-center" style={{ backgroundColor: '#D80574', borderRadius: 10, width: 100, height: 100, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <BsFillCarFrontFill style={{ width: 70, height: 70, marginTop: 15 }} />
                                <p style={{ marginTop: 15 }}>Transport</p>
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <div className="card-new d-block justify-content-center" style={{ backgroundColor: '#FFE0F0', borderRadius: 10, width: 100, height: 100, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
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
                        <div className="col">
                        </div>
                        <div className='col-8'>
                            <div className='row d-flex justify-content-left'>
                                <div className='col-12 d-flex justify-content-between'>
                                    <h3 style={{ fontFamily: "'Poppins', sans-serif", marginLeft: 20 }}><strong>Any Question ?</strong></h3>
                                    <Button className="rounded-pill bg-warning" variant="outline-warning" style={{ width: 150, height: 40, borderRadius: '1.25rem', boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px', color: 'black', marginRight: 20 }}>
                                        <strong>Add Question</strong>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className='row d-flex justify-content-left'>
                                <div className='col-12 d-flex justify-content-between'>
                                    <h3 style={{ fontFamily: "'Poppins', sans-serif", marginLeft: 20, fontSize: 19, marginTop: 10 }}><strong>Notifiactions </strong></h3>
                                    <RiNotification3Line style={{ width: 30, height: 30, marginLeft: 10, marginRight: 10, marginTop: 5 }} />
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row className="mt-3" >
                        <div className="col">
                        </div>
                        <div className="col-8 ">
                            <div className="card" style={{ borderRadius: 10, height: 150, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }} >
                                <div className="card-header d-flex justify-content-left p-0">
                                    <div className='col-12 d-flex justify-content-between p-0'>
                                        <p style={{ paddingTop:10, marginTop: 5, marginLeft: 20 }}><strong>How much cost need to travel with three wheeler ?</strong></p>
                                        <BiEditAlt style={{ width: 25, height: 25, marginTop: 7, marginRight: 15 }} />
                                    </div>
                                </div>
                                <div className="card-body d-flex justify-content-left">
                                    <div className='row'>
                                        <div className='col-1'>
                                            <img src="images/Ella-Sri-Lanka.jpg" class="rounded" alt="Profile pic" style={{ width: 50, height: 50 }} />
                                        </div>
                                        <div className="col d-flex flex-column justify-content-left">
                                            <p className='d-flex justify-content-left pb-0 mb-0' style={{ marginLeft: 8 }}><strong>Anonymous</strong></p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </div>
                                    </div>
                                    <div className='row pt-0 pb-0'>
                                        <div className='col d-flex flex-row'></div>
                                    </div>
                                    {/* <blockquote className="blockquote mb-0">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-3 p-0" style={{ borderRadius: 10, boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px' }}>
                            <div className="card" style={{ borderRadius: 10, height: 150 }}>
                                <div className='row' style={{ marginTop: 30 }}>
                                    <div className='col-7' style={{ marginLeft: 12 }}>
                                        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, marginTop: 10, marginLeft: 3 }}> <strong> Any Related Questions?</strong></p>
                                    </div>
                                    <div className='col'>
                                        <div className='d-flex justify-content-center'>
                                            <Button className="rounded-pill" variant="outline-warning" style={{ width: 100, height: 40, borderRadius: '1.25rem', boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px', color: 'black' }}>
                                                <strong>Reply</strong>
                                            </Button>
                                            {/* <button type="button" className="rounded-pill" variant="outline-warning" style={{ width: 100, height: 40, borderRadius: '1.25rem', boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px', color: 'black' }}>Reply</button> */}
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
                            <div className="card p-0 m-0">
                                <div className="card-header">
                                    Advertisement
                                </div>
                                <div className='card-body p-0 m-0'>
                                    <img src='images/sigiriya.png' className='w-100' style={{ height: 500 }}/>
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