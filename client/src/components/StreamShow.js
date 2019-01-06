import React from "react";
import "./StreamShow.css"
import {connect} from "react-redux"
import { fetchStream } from "../actions/streams";
import flvjs from "flv.js"
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";
class StreamShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            animate:false
        }
        this.videoref=React.createRef()
    }
    componentDidMount(){
        console.log(this.videoref)
        this.props.dispatch(fetchStream(this.props.match.params.id))

  
        this.buildPlayer();
 
    }
    componentDidUpdate(){
        this.buildPlayer();
    }
    componentWillUnmount(){
        console.log("unmounted")
    }
    
    
    buildPlayer(){
        if(this.player || !this.props.streams){
            return;
        }
        this.player= flvjs.createPlayer({
            type: 'flv',
            url:  `http://localhost:8000/live/${this.props.match.params.id}.flv`
        });
        this.player.attachMediaElement(this.videoref.current);
        this.player.load();
    }
    renderAnimation=()=>{
        this.setState({animate:true})
    }
    render(){
        console.log(this.props.streams)
        if(!this.props.streams){
            return <div>...LOading</div>
        }
        else{

        
    return(<div>
        <video ref={this.videoref} style={{width:'100%'}} controls/>
        {this.state.animate &&<div className={this.state.animate?"keyframe":""}>Streamshow</div>}
        <button onClick={e=>{this.renderAnimation()}}>Click</button>
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
export default connect(mapStateToProps)(StreamShow)
