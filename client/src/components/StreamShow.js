import React from "react";
import "./StreamShow.css"
class StreamShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            animate:false
        }
    }
    renderAnimation=()=>{
        this.setState({animate:true})
    }
    render(){
    return(<div>
        {this.state.animate &&<div className={this.state.animate?"keyframe":""}>Streamshow</div>}
        <button onClick={e=>{this.renderAnimation()}}>Click</button>
        </div>
    )
}
}
export default StreamShow
