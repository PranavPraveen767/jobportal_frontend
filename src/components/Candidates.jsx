import React, { useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { deletecandi, getcandi } from '../Services/allApi';


function Candidates() {
  const [candi,setcandi] = useState([])

  const getCandidates = async()=>{
    const {data}= await getcandi()
    setcandi(data)
  }
  console.log(candi);

  useEffect(()=>{getCandidates()},[])

  const handledelete = async(id)=>{
       await deletecandi(id)
       getCandidates()
  }


  return (
   <>
     
     <div className='d-flex align-items-center justify-content-center p-5 flex-column' style={{marginBottom:"250px"}}>
           <h1 className='text-center text-primary fw-bolder fs-1'>Candidates Applied</h1>
                
                    <Table striped bordered hover variant="primary mt-3" style={{width:"1300px"}} >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Candidates Name</th>
                      <th>Candidates Phone No.</th>
                      <th>Candidates E-mail id</th>
                      <th>Qualification</th>
                      <th><span className='text-danger fw-bolder'>Company Applied</span></th>
                      <th><span className='text-danger fw-bolder'>Post Applied</span></th>

                      <th>Action</th>
                      
                    </tr>
                  </thead>
                  
                    <tbody>
                   
                { candi.length>0?
                   candi.map((item,index)=>(
                   <tr>
                    <td>{index+1}</td>
                      <td>{item.cname}</td>
                      <td>{item.cno}</td>
                      <td>{item.cemail}</td>
                    <td>{item.cqual}</td>
                      <td><span className='text-danger'>{item.company}</span></td>
                      <td><span className='text-danger'>{item.jtitle}</span></td>

                      <td><button onClick={()=>{handledelete(item?.id)}} className='btn btn-danger me-2 ms-2'><i class="fa-solid fa-trash"></i></button>
                  </td>
                    </tr>)):
                      <p className='text-danger text-center fw-bolder  fs-3'>No one Applied for any Jobs</p>
                   }
                    
                  </tbody>
                </Table>
           </div>


         

   </>
  )
}

export default Candidates