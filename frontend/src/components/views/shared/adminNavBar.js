import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./adminNavBar.css";
import { Row } from "react-bootstrap";
import { FaRegUser } from 'react-icons/fa'

export default function AdminNavBar() {
    const [isSitesDropdownOpen, setIsSitesDropdownOpen] = useState(false);
    const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  
    const handleSitesDropdownMouseEnter = () => {
        setIsSitesDropdownOpen(true);
      };
    
      const handleSitesDropdownMouseLeave = () => {
        setIsSitesDropdownOpen(false);
      };

      const handleEventsDropdownMouseEnter = () => {
        setIsEventsDropdownOpen(true);
      };
    
      const handleEventsDropdownMouseLeave = () => {
        setIsEventsDropdownOpen(false);
      };

      const handleUserDropdownMouseEnter = () => {
        setIsUserDropdownOpen(true);
      };

      const handleUserDropdownMouseLeave = () => {
        setIsUserDropdownOpen(false);
      };


  return (
    <Navbar bg="light" expand="lg" style={{ height: "13vh" }}>
      <Container style={{ marginLeft: "3px", marginTop: "-2px"}}>
        <Navbar.Brand>
          <Image
            src="images/logo.png"
            alt="Logo"
            style={{ width: "300px", height: "80px", margin: "1px" }}
          ></Image>
        </Navbar.Brand>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Row>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/sites" style={{paddingRight:'50px', fontSize:'20px', color:'black'}}>Home</Nav.Link>
            <NavDropdown
              title="Sites"
              id="site-dropdown"
              onMouseEnter={handleSitesDropdownMouseEnter}
              onMouseLeave={handleSitesDropdownMouseLeave}
              show={isSitesDropdownOpen}
              className="custom-dropdown"
              style={{paddingRight:'50px'}}
            >
              <NavDropdown.Item href="/addSite" className="dropdown-item">
                Add New Site
              </NavDropdown.Item>

              <NavDropdown.Item href="/viewAll" className="dropdown-item">
                Site List
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>

            <NavDropdown
              title="Events"
              id="event-dropdown"
              onMouseEnter={handleEventsDropdownMouseEnter}
              onMouseLeave={handleEventsDropdownMouseLeave}
              show={isEventsDropdownOpen}
              className="custom-dropdown"
              style={{paddingRight:'50px'}}
            >
              <NavDropdown.Item href="/#" className="dropdown-item">
                Add New Event
              </NavDropdown.Item>

              <NavDropdown.Item href="/#" className="dropdown-item">
                Event List
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>

            <NavDropdown
                title={<FaRegUser />}
                id="user-dropdown"
                className="custom-dropdown"
                onMouseEnter={handleUserDropdownMouseEnter}
                onMouseLeave={handleUserDropdownMouseLeave}
                show={isUserDropdownOpen}
              >
                <NavDropdown.Item href="/#" className="dropdown-item">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="/#" className="dropdown-item">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
}
