import axios from "axios"

export const createStream=(formValues,id)=>{
const stream={...formValues,userId:id}
    return async dispatch=>{
       const res=await axios.post("/addStream",stream)
        dispatch({type:"CREATE_STREAM",payload:res.data})
    }
}
export const fetchStreams=()=>{
    return async dispatch =>{
        const res=await axios.get("/streams")
        dispatch({type:"FETCH_STREAMS",payload:res.data})
    }
}
export const fetchStreamsByUserId=(id)=>{
    const body={id}
    
    return async dispatch =>{
        const res=await axios.post("/mystreams",body)
        console.log(res.data)
        dispatch({type:"USER_STREAMS",payload:res.data})
    }
}
export const fetchStream=(id)=>{
    return async dispatch =>{
        const res=await axios.get(`/stream/${id}`)
        dispatch({type:"FETCH_STREAM",payload:res.data})
    }
}
export const editStream=(id,formValues)=>{
    return async dispatch =>{
        const res=await axios.put(`/stream/${id}`,formValues)
        dispatch({type:"EDIT_STREAM",payload:res.data})
    }
}
export const deleteStream=(id,history)=>{

    return async dispatch =>{
        const res= await axios.delete(`/stream/${id}`)
      
        dispatch({type:"DELETE_STREAM",payload:id})
      
    }
    
}