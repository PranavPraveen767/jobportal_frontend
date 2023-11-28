import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { deleteJob, getAJob, getJob, updatejob} from '../Services/allApi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Joblist() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [jlist,setjlist] = useState([])
    const [update,setupdate] = useState({
      vacancy:'',
      jobtype:''
    })
    const [vacancyid,setvacancyid] = useState(0)
    const [job,setjob] = useState({})
   

    

    const getalljobs = async() => {
        const response = await getJob()
        const {data} = response
        setjlist(data)
    }

    console.log(jlist);

    useEffect(()=>{getalljobs()},[])

    

    const handledelete = async(id) => {
        await deleteJob(id)
        getalljobs()
    }


    const handleupdate = async(id)=>{
       handleShow()
       setvacancyid(id)
      const response =  await getAJob(id)
      const {data} = response
      setjob(data)
    }


    const vacancyupdate = async(id)=>{
      const {vacancy,jobtype} = update
      if(!vacancy || !jobtype){
        toast.warning('Please update the two form')
      }
      else{
        job["vacancy"] = vacancy
        job["jobtype"] = jobtype
      const response =   await updatejob(id,job)
         if(response.status>=200&&response.status<300){
          toast.success('Updated Successfuly')
          handleClose()
         }
         getalljobs() 
      }
    }



    

  return (
    <>
   
           <div className='d-flex align-items-center justify-content-center p-5 flex-column' style={{marginBottom:"250px"}}>
           <h1 className='text-center text-primary fw-bolder fs-1'>Posted Jobs</h1>
                
                    <Table striped bordered hover variant="primary mt-3" style={{width:"1300px"}} >
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
                    {
                    jlist.length>0?
                    jlist.map((data,index)=>(
                    <tr>
                      <td>{index+1}</td>
                      <td>{data.jobtitle}</td>
                      <td>{data.Cname}</td>
                      <td><a href={`${data.Curl}`} target='_blank'>{data.Curl}</a></td>
                      <td>{data.desc}</td>
                      <td>{data.vacancy}</td>
                      <td>{data.experience}</td>
                      <td>{data.jobtype}</td>
                      <td>{data.jobplace}</td>
                      <td className='d-flex'>
                        <button onClick={()=>{handledelete(data?.id)}} className='btn btn-danger me-2 ms-2'><i class="fa-solid fa-trash"></i></button>
                        <button onClick={()=>{handleupdate(data?.id)}} className='btn btn-primary'><i class="fa-solid fa-pen-to-square"></i></button>
                      </td>
                    </tr>)):
                    <p className='text-danger text-center fw-bolder  fs-3'>No jobs Posted</p> 
                     }
                    
                  </tbody>
                </Table>
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

                        <form className='border p-3 rounded '>

                        <Form.Group className="mb-1 d-flex" controlId="exampleForm.ControlInput1">
                                <Form.Label></Form.Label>
                                <Form.Control onChange={(e)=>{setupdate({update,vacancy:e.target.value})}}  type="number" placeholder="Vacancies" />
                            </Form.Group>

                          
                           <Form.Select aria-label="Default select example" className='mb-4' onChange={(e)=>setupdate({...update,jobtype:e.target.value})} >
                            <option>Choose Jobtype</option>
                              <option value="Fulltime">Fulltime</option>
                              <option value="Contract">Contract</option>
                              <option value="Part time">Part time</option>                           
                            </Form.Select>
                            
                            </form> 
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button onClick={()=>vacancyupdate(vacancyid)} variant="primary">Update</Button>
                    </Modal.Footer>
                </Modal>
                <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={2000}
        />      
   
    </>
  )
}

export default Joblist