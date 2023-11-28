import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadJob } from '../Services/allApi';
import { Link } from 'react-router-dom';
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";




function Postjob() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [job,setjob] = useState({
        jobtitle:'',
        Cname:'',
        Curl:'',
        desc:'',
        jobtype:'',
        jobplace:'',
        vacancy:'',
        experience:''
    })
    console.log(job);

     const handlepost = async()=>{
        const {jobtitle, Cname,Curl,desc,jobtype,jobplace,vacancy,experience} = job
        if(!jobtitle || !Cname || !Curl || !desc || !jobtype || !jobplace ||!vacancy || !experience){
            toast.warning('Please fill the form completely')
        }
        else{
           const response =  await uploadJob(job)
           if(response.status>=200&&response.status<300){
           toast.success("Uploaded successfully")
            handleClose()

           }
        }
    } 

    return (
      <Row
        className="d-flex justify-content-center align-items-center"
        data-aos="fade-up"
        
      >
        <Col md={10}>
          <div
            style={{ border: "solid", borderRadius: "25px",height:'400px',backgroundColor:" #eaf3f3" ,borderColor:"#eaf3f3"}}
            className="shadow"
          >
            <h2 className="mt-5 ms-5 fs-1 text-success  fw-bolder"  style={{fontFamily:"serif" ,}}>Recruiting?</h2>
            <p className="mt-3 ms-5 me-5" style={{textAlign:'justify'}}>
              Promote your job vacancies to a vast audience of active job 
              seekers every month and gain access to our extensive database of
              15.8 million resumes. This is a unique opportunity to reach out to
              potential candidates from various industries and experience
              levels. Our platform allows you to streamline your recruitment
              process, ensuring that you find the right candidate for your
              organization. So why wait? Start advertising with us today and tap
              into the potential of millions of prospective employees.
            </p>
            <button
              onClick={handleShow}
              style={{ color: "white" }}
              className="btn btn-danger mb-5 ms-5 "
            >
              Start Recruiting Now
            </button>
            <Link style={{ textDecoration: "none" }} to={"/joblist"}>
              {" "}
              <button
                style={{ color: "white" }}
                className="btn btn-danger mb-5 ms-5 "
              >
                View Jobs
              </button>
            </Link>

           <Link style={{ textDecoration: "none" }} to={"/candidate"}>
              <button
                
                style={{ color: "white" }}
                className="btn btn-danger mb-5 ms-5 "
              >
                View Candidates
              </button>
           </Link>
            
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>POST JOB</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="border border-danger p-3 rounded ">
                <Form.Group
                  className="mb-1 d-flex"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label></Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      setjob({ ...job, jobtitle: e.target.value })
                    }
                    type="text"
                    placeholder="Job Title"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-1"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label></Form.Label>
                  <Form.Control
                    onChange={(e) => setjob({ ...job, Cname: e.target.value })}
                    type="text"
                    placeholder="Company Name"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-1"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label></Form.Label>
                  <Form.Control
                    onChange={(e) => setjob({ ...job, Curl: e.target.value })}
                    type="text"
                    placeholder="Company URL"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-1"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label></Form.Label>
                  <Form.Control
                    onChange={(e) => setjob({ ...job, desc: e.target.value })}
                    type="text area"
                    placeholder="Add Description"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-1"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label></Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      setjob({ ...job, vacancy: e.target.value })
                    }
                    type="number"
                    placeholder="Vacancies"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label></Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      setjob({ ...job, experience: e.target.value })
                    }
                    type="number"
                    placeholder="Experience in Years"
                  />
                </Form.Group>

                <Form.Select
                  aria-label="Default select example"
                  className="mb-4"
                  onChange={(e) => setjob({ ...job, jobtype: e.target.value })}
                >
                  <option>Choose Jobtype</option>
                  <option value="Fulltime">Full-time </option>
                  <option value="Contract">Contract</option>
                  <option value="Part time">Part-time</option>
                </Form.Select>

                <Form.Select
                  aria-label="Default select example"
                  className="mb-1"
                  onChange={(e) => setjob({ ...job, jobplace: e.target.value })}
                >
                  <option>Choose Job Environment</option>
                  <option value="Remote">Remote</option>
                  <option value="In-office">In-office</option>
                </Form.Select>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Button onClick={handlepost} variant="success">
                Post Job
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={2000}
        />
      </Row>
    );
}

export default Postjob