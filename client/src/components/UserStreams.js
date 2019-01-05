import React,{Component} from "react"
import {connect} from "react-redux"
import { Card, Icon, Image,Button } from 'semantic-ui-react'

import {fetchStreamsByUserId,deleteStream} from "../actions/streams"
class UserStreams extends Component{
   componentDidUpdate(){
       if(this.props.userId && this.props.streams.length===0){
           this.props.dispatch(fetchStreamsByUserId(this.props.userId))
       }
   }
    renderStreams(){
        return this.props.streams.map(stream=>{
            return <div style={{display:"inline-block"}} id="stream-list" key={stream._id}>
             <Card>
    <Image src='' height="140px" />
    <Card.Content>
      <Card.Header>{stream.title}</Card.Header>
      <Card.Meta>{stream.userId}</Card.Meta>
      <Card.Description>{stream.description}</Card.Description>
    </Card.Content>
      <Card.Content extra>
     <Button fluid positive>Edit</Button>
    <Button fluid negative onClick={e=>{this.props.dispatch(deleteStream(stream._id,this.props.history))}}>Delete</Button>
  
    </Card.Content>
  </Card>
            </div>
        })
    }
    render(){
         
        return(
            <div>{this.renderStreams()}</div>
        )
    }
}
const mapStateToProps=state=>{
    return{
    userId:state.auth.userId,
    streams:Object.values(state.streams)
}
}
export default connect(mapStateToProps)(UserStreams)