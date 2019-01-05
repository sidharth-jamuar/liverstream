import _ from "lodash"

const streamInitialState={}

const streamReducer=(state=streamInitialState,action)=>{
    switch(action.type){
        case "FETCH_STREAMS":
        return {...state,..._.mapKeys(action.payload,'_id')}
        case "FETCH_STREAM":
         return {...state,[action.payload.id]:action.payload}
        case "EDIT_STREAM":
        return {...state,[action.payload.id]:action.payload}
        case "DELETE_STREAM":
       
        return _.omit(state,action.payload)
        case "CREATE_STREAM" :
        return {...state,[action.payload.id]:action.payload}
        case "USER_STREAMS":
        return action.payload
        default:
        return state
    }
}
export default streamReducer;