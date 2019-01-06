import React from "react";
import {connect} from "react-redux"
import { Card, Icon, Image } from 'semantic-ui-react'
import {fetchStreams} from "../actions/streams"
import {Link} from "react-router-dom"
class StreamList extends React.Component{
    componentDidMount(){
        this.props.dispatch(fetchStreams())
    }
    
    renderStreams(){
        return this.props.streams.map(stream=>{
            return <div style={{display:"inline-block"}} id="stream-list" key={stream._id}>
             <Link to={`/streams/${stream._id}`}><Card >
    <Image src='' height="140px" />
    <Card.Content>
      <Card.Header>{stream.title}</Card.Header>
      <Card.Meta>{stream.userId}</Card.Meta>
      <Card.Description>{stream.description}</Card.Description>
    </Card.Content>
    
  </Card></Link>
            </div>
        })
    }
    render(){
        
       if(this.props.streams.length===0){
           return <div> ... Loading</div>
       }
       if(this.props.streams.length >0){
    return(
        <div>
        {this.renderStreams()}
        </div>
    )
}
    }
}
const mapStateToProps=state=>{
    return{
        streams:state.streams
    }
}
export default connect(mapStateToProps)(StreamList)
