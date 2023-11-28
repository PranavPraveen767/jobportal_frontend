import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Seekjob() {
    

    return (
      <Row
        className="d-flex justify-content-center align-items-center "
        data-aos="fade-up" style={{marginBottom:"100px"}}
      >
        <Col md={10}>
          <div
            style={{ border: "solid", borderRadius: "25px",height:'400px', backgroundColor:" #eaf3f3",borderColor:"#eaf3f3"}}
            className="shadow "
          >
            <h3 className="mt-5 ms-5 fs-1 text-success  fw-bolder"  style={{fontFamily:"serif"}}>Job Seeking?</h3>
            <p className="mt-3 ms-5 me-5" style={{textAlign:'justify'}}>
            Our platform intricately connects you to numerous job opportunities across various industries to discover a career that aligns with your specific skills and passions. We help you find a role that not only suits your professional qualifications and work experience, but also complements your personal growth and long-term goals. Start your customized job search with us today and step into a genuinely fulfilling career that fits you perfectly.
            </p>
            <Link style={{textDecoration:'none'}} to={'/Applyjob'}> <button style={{ color: "white" }} className='btn btn-danger mb-5 ms-5'>Apply Job</button></Link>

          </div>
         
        </Col>
      </Row>
    );
}

export default Seekjob