import React from "react";
import AdminNavBar from "./shared/adminNavBar";
import { Card, Col, Image, Navbar, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import './AdminHome.css'

export default function AdminHome() {
    let history = useHistory();
  return (
    <div>
      <div>
        <Navbar style={{ height: "18vh" }}>
        <Navbar.Brand>
          <Image
            src="images/logo.png"
            alt="Logo"
            style={{ width: "350px", height: "100px", margin: "1px" }}
          ></Image>
        </Navbar.Brand>
        </Navbar>
        </div>
      <Row
        style={{
          backgroundColor: "ghostwhite",
          //   marginTop: "25px",
          marginBottom: "25px",
          paddingTop: "35px",
          paddingBottom: "35px",
          paddingLeft: "350px",
          paddingRight: "350px",
          borderRadius: "20px",
        }}
      >
        <Card 
        style={{
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
            border: "none",
            boxShadow: "0 2px 35px rgba(0, 0, 0, 0.2)",
             borderRadius: 10, 
             height: "500px" ,
             width:'800px'
             }}>
          <Row
            style={{
              display: "flex",
              flexDirection: "row",
              position: "relative",
            }}
          >
            <Col>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "relative",
                  margin: "60px",
                }}
              >
                <Card
                    className="card-intro"
                  style={{
                    height: "150px",
                    width: "150px",
                    // padding: "20px",
                  }}
                  type='button'
                  onClick={()=>history.push('/#')}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="images/userManagement.jpg"
                      style={{
                        marginTop: "45px",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                    <div
                      style={{
                        marginTop: "20px",
                        textAlign: "center",
                        width: "200px",
                        fontWeight:'bold'
                      }}
                    >
                      User Management
                    </div>
                  </div>
                </Card>
                <Card
                className="card-intro"
                  style={{
                    height: "150px",
                    width: "150px",
                    marginLeft: "250px",
                    // padding: "20px",
                    position: "absolute",
                  }}
                  type='button'
                  onClick={()=>history.push('/viewAll')}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="images/siteManagement.jpg"
                      style={{
                        marginTop: "45px",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                    <div
                      style={{
                        marginTop: "20px",
                        textAlign: "center",
                        width: "200px",
                        fontWeight:'bold'
                      }}
                    >
                      Site Management
                    </div>
                  </div>
                </Card>

                <Card
                className="card-intro"
                  style={{
                    height: "150px",
                    width: "150px",
                    marginLeft: "0px",
                    marginTop: "200px",
                    // padding: "20px",
                    position: "absolute",
                  }}
                  type='button'
                  onClick={()=>history.push('/#')}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="images/EventsManagement.jpg"
                      style={{
                        marginTop: "45px",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                    <div
                      style={{
                        marginTop: "20px",
                        textAlign: "center",
                        width: "200px",
                        fontWeight:'bold'
                      }}
                    >
                      Event Management
                    </div>
                  </div>
                </Card>
                <Card
                className="card-intro"
                  style={{
                    height: "150px",
                    width: "150px",
                    marginLeft: "250px",
                    marginTop: "200px",
                    // padding: "20px",
                    position: "absolute",
                  }}
                  type='button'
                  onClick={()=>history.push('/#')}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="images/postManagement.jpg"
                      style={{
                        marginTop: "45px",
                        width: "100%",
                        height: "auto",
                      }}
                    />
                    <div
                      style={{
                        marginTop: "20px",
                        textAlign: "center",
                        width: "200px",
                        fontWeight:'bold'
                      }}
                    >
                      Post Management
                    </div>
                  </div>
                </Card>
              </Row>
            </Col>

            <Col
              xs={4}
              style={{
                height: "50px",
                backgroundColor: "black",
                marginLeft: "550px",
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                height: "500px",
                position: "absolute",
              }}
            >
              <h1
                style={{
                  fontFamily: "Roboto",
                  marginTop: "70px",
                  color: "white",
                  fontSize: "40px",
                }}
              >
                Welcome
              </h1>
              <h3
                style={{
                  fontFamily: "Roboto",
                  marginTop: "35px",
                  color: "white",
                  fontSize: "25px",
                }}
              >
                CulturalVoyageSL Management
              </h3>
              <p
                style={{
                  fontFamily: "Roboto",
                  marginTop: "25px",
                  color: "white",
                  fontSize: "19px",
                  paddingLeft:'18px',
                  paddingRight:'18px'
                }}
              >
                Let us assist tourists to a more secure, dependable, and
                pleasurable experience with showcasing, safeguarding, and
                promoting Sri Lanka's rich cultural and historical legacy!
              </p>
            </Col>
          </Row>
        </Card>
      </Row>
    </div>
  );
}
