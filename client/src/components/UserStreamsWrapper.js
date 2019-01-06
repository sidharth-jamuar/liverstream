import React,{Component} from "react"
import {connect} from "react-redux"
import UserStreams from "./UserStreams"
class UserStreamsWrapper extends Component{
  
render(){
   console.log("rendered wrapper")
    if(this.props.userId ){
    return(
        <div>
            <UserStreams userId={this.props.userId} />
        </div>
    )
}
else{
    return <div>...Loading</div>
}
}

}
const mapStateToProps=state=>{
    return{
    userId:state.auth.userId,
   
}
}
export default connect(mapStateToProps)(UserStreamsWrapper)