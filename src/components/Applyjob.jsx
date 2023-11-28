import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { applyJob, getJob, getcandi } from "../Services/allApi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Applyjob() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleshow = (title, cname) => {
    handleShow();
    setapply({ ...apply, jtitle: title, company: cname });
  };

  const [jlist, setjlist] = useState([]);

  const [apply, setapply] = useState({
    cname: "",
    cno: "",
    cemail: "",
    cqual: "",
    company: "",
    jtitle: "",
  });

  const getalljobs = async () => {
    const response = await getJob();
    const { data } = response;
    setjlist(data);
  };

  useEffect(() => {
    getalljobs();
  }, []);

  const handleupdate = async () => {
    const { cname, cno, cemail, cqual } = apply;
    if (!cname || !cno || !cemail || !cqual) {
      toast.warning("Please fill the form completely");
    } else {
      const response = await applyJob(apply);
      if (response.status >= 200 && response.status < 300) {
        toast.success("Application Form submitted");
        handleClose();
      }
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center p-5 flex-column">
        <h1 className="text-center text-primary fw-bolder fs-1">Available Jobs</h1>

        <Table striped bordered hover variant="warning mt-3" style={{ width: "1400px" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Company Url</th>
              <th>Description</th>
              <th>Vacancy</th>
              <th>Experience</th>
              <th>Job Type</th>
              <th>Job Environment</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {jlist.length > 0 ? (
              jlist.map((data, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{data.jobtitle}</td>
                  <td>{data.Cname}</td>
                  <td>
                    <a href={`${data.Curl}`} target="_blank">
                      {data.Curl}
                    </a>
                  </td>
                  <td>{data.desc}</td>
                  <td>{data.vacancy}</td>
                  <td>{data.experience}</td>
                  <td>{data.jobtype}</td>
                  <td>{data.jobplace}</td>
                  <td className="d-flex">
                    <button
                      onClick={() => {
                        handleshow(data.jobtitle, data.Cname);
                      }}
                      className="btn btn-success me-2 ms-2"
                    >
                      <i class="fa-solid fa-pen-nib me-1"></i>Apply
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <p className="text-danger text-center fw-bolder  fs-3">No jobs to display</p>
            )}
          </tbody>
        </Table>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Apply For Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="border border-primary p-3 rounded ">
            <Form.Group className="mb-1 d-flex" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                onChange={(e) => {
                  setapply({ ...apply, cname: e.target.value });
                }}
                type="text"
                placeholder="Candidate's Name"
              />
            </Form.Group>

            <Form.Group className="mb-1 d-flex" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                onChange={(e) => {
                  setapply({ ...apply, cno: e.target.value });
                }}
                type="number"
                placeholder="Phone Number"
              />
            </Form.Group>

            <Form.Group className="mb-1 d-flex" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                onChange={(e) => {
                  setapply({ ...apply, cemail: e.target.value });
                }}
                type="email"
                placeholder="E-mail"
              />
            </Form.Group>

            <Form.Select aria-label="Default select example" className="mb-4" onChange={(e) => setapply({ ...apply, cqual: e.target.value })}>
              <option>Choose Qualification</option>
              <option value="SSLC">SSLC </option>
              <option value="Plus two">Plus two</option>
              <option value="Diploma">Diploma</option>
              <option value="Degree">Degree</option>
              <option value="Post-Graduate">Post-Graduate</option>
            </Form.Select>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleupdate} variant="primary">
            Apply
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </>
  );
}

export default Applyjob;
