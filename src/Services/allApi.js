import { commonAPI } from "./commonAPI"
import { serverURL } from "./severURL"


//to upload job
export const uploadJob = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/Recruit`,reqBody)
 }


//to get jobs
export const getJob = async()=>{
    return await commonAPI('GET',`${serverURL}/Recruit`,"")
}


//to delete jobs
export const deleteJob = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/Recruit/${id}`,{})
}

//to update vacancy
export const updatejob = async(id,body)=>{
    return await commonAPI('PUT',`${serverURL}/Recruit/${id}`,body)
 }


 //to geta specific job
export const getAJob = async(id)=>{
    return await commonAPI('GET',`${serverURL}/Recruit/${id}`,"")
}

//to apply job
export const applyJob = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/AppliedJobs`,reqBody)
 }

 //to get Candidates
export const getcandi = async()=>{
    return await commonAPI('GET',`${serverURL}/AppliedJobs`,"")
}

 //to delete Candidates
 export const deletecandi = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/AppliedJobs/${id}`,{})
}

