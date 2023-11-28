import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Postjob from "../components/Postjob";
import AOS from "aos";
import "aos/dist/aos.css";
import Seekjob from "../components/Seekjob";
import accountancy from '../image/accountancy.jpeg'
import marketing from '../image/marketing.jpeg'
import design from '../image/designing.jpeg'
import development from '../image/development.jpeg'
import project from '../image/project.jpeg'
import auto from '../image/Automotive.jpeg'
AOS.init();

function Home() {
  return (
    <>
      <Row className="d-flex justify-content-center align-items-center" style={{backgroundColor:" rgb(219, 232, 232)"}}>
        <Col></Col>
        <Col
          lg={5} sm={2}
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
         >
          <h1 style={{ fontSize: "100px" }}>
            Job <span className="text-success">Nestle</span>
          </h1>
          <h2 className="mt-4">Looking For A Job?</h2>
          <h5>
            {" "}
            <p className="mt-4" style={{ textAlign: "justify" }}>
              {" "}
              These websites host a wide range of job listings across various industries and sectors, allowing individuals to browse, search, and apply for jobs based on their skills, qualifications, and preferences
            </p>
          </h5>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img
            className="mt-4"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            style={{ height: "90vh" }}
            src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fbanner-img-1.png&w=1920&q=75"
            alt=""
          />
        </Col>
      </Row>

      <div className="container d-flex justify-content-center align-items-center w-100 mt-5 mb-5 flex-column" >
      <h3 data-aos="zoom-in-up">Popular Job <span className='text-success'>Categories</span></h3>        <h5></h5>

        <div className="cardss d-flex justify-content-center align-items-evenly ms-2 mt-5 w-100  ">
          
            <Card
              data-aos="zoom-in-right"
              className="cardss p-4 ms-3"
              style={{
                width: "37rem",
                height: "17rem",
                backgroundImage: `url(${accountancy})`,
                backgroundSize: "cover",
                backdropFilter: "blur(8px)",
              }}
            >
              <Card.Body className="d-flex justify-content-center align-items-center">
                <Card.Title className="text-white">
                Accounting / Finance

                </Card.Title>
              </Card.Body>
            </Card>
          

          <Card 
            data-aos="zoom-in-right"
            className="p-4 ms-3 "
            style={{
              width: "37rem",
              height: "17rem",
              backgroundImage: `url(${marketing})`,
              backgroundSize: "cover",
              backdropFilter: "blur(8px)",
            }}
          
          >
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title className="text-white">
              Marketing
              </Card.Title>
              <Card.Text style={{ fontWeight: "500" ,color: "white" }}></Card.Text>
            </Card.Body>
          </Card>

          <Card
            data-aos="zoom-in-right"
            className="p-4 ms-3"
            style={{
              width: "37rem",
              height: "17rem",
              backgroundImage: `url(${design})`,
              backgroundSize: "cover",
              backdropFilter: "blur(8px)",
            }}
          >
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title className="text-white">
              Design
              </Card.Title>
              <Card.Text style={{ fontWeight: "500" ,color: "white" }}></Card.Text>
            </Card.Body>
          </Card>
          <br />

          <Card
            data-aos="zoom-in-left"
            className="p-4 ms-3"
            style={{
              width: "37rem",
              height: "17rem",
              backgroundImage: `url(${development})`,
              backgroundSize: "cover",
              backdropFilter: "blur(8px)",
            }}
          >
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title className="text-white">
              Development
              </Card.Title>
              <Card.Text style={{ fontWeight: "500" , color: "white" }}></Card.Text>
            </Card.Body>
          </Card>

          <Card
            data-aos="zoom-in-left"
            className="p-4 ms-3"
            style={{
              width: "37rem",
              height: "17rem",
              backgroundImage: `url(${project})`,
              backgroundSize: "cover",
              backdropFilter: "blur(8px)",
            }}
          >
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title className="text-white">
              Project Management
              </Card.Title>
              <Card.Text style={{ fontWeight: "500",color: "white" }}>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            data-aos="zoom-in-left"
            className="p-4 ms-3"
            style={{
              width: "37rem",
              height: "17rem",
              backgroundImage: `url(${auto})`,
              backgroundSize: "cover",
              backdropFilter: "blur(8px)",
            }}
          >
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title className="text-white">
              Automotive Jobs
              </Card.Title>
              <Card.Text style={{ fontWeight: "500" ,color: "white" }}>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row" style={{marginTop:"130px" }} >
        <div className="col-6">
          <Postjob />
        </div>
        <div className="col-6">
          <Seekjob />
        </div>
      </div>
    </>
  );
}

export default Home;
