import React from "react";
import {Field,reduxForm} from "redux-form"
import {Button,Form} from "semantic-ui-react"
import {connect} from "react-redux"
import {createStream} from "../actions/streams"
class StreamNew extends React.Component{
    renderInput(formProps){
        return <div><Form.Field><label style={{color:"white"}}>{formProps.label}</label><input {...formProps.input} autoComplete="off" /> </Form.Field> <br />
        <div>{formProps.meta.touched && formProps.meta.error ?formProps.meta.error:""}</div>
        </div>
    }

    onSubmit=(formValues)=>{
        this.props.dispatch(createStream(formValues,this.props.userId))
    }
    render(){
       
    return(
        <div>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}><Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description"  component={this.renderInput} label="Enter Description"/>
        <Button primary type="Submit">Submit</Button>
        </Form>
        </div>
    )
}
}
const validate=(formValues)=>{
    const errors={}
    if(!formValues.title){
        errors.title="You must enter a Title"
    }
    if(!formValues.description){
        errors.description="You must enter a description"
    }
    return errors;
}
const mapStateToProps=state=>{
    return{
        userId:state.auth.userId
    }
}
export default connect(mapStateToProps)(reduxForm({
    form:"streamCreate",validate
})(StreamNew));
