import _ from "lodash"

const streamInitialState=[]

const streamReducer=(state=streamInitialState,action)=>{
    switch(action.type){
        case "FETCH_STREAMS":
        //return {...state,..._.mapKeys(action.payload,'_id')}
        return [...state,...action.payload]
        case "FETCH_STREAM":
         return action.payload
        case "EDIT_STREAM":
        return state.map(stream=>stream._id===action.payload._id)
        case "DELETE_STREAM":
       
         return state.filter(stream=>action.payload!==stream._id)
        

        case "CREATE_STREAM" :
        return [...state,action.payload]
        case "USER_STREAMS":
        return action.payload
        default:
        return state
    }
}
export default streamReducer;