import React, { Component } from "react"
import { keys } from "../config/keys"
import {connect} from "react-redux"
import {signIn,signOut} from "../actions/auth"
import {Button,Icon} from "semantic-ui-react"
import "./GoogleAuth.css"
class GoogleAuth extends Component {
    constructor(props){
        super(props);
       
        this.onAuthChange=this.onAuthChange.bind(this)
        this.onSignIn=this.onSignIn.bind(this)
        this.onSignOut=this.onSignOut.bind(this)
    }


    renderAuthState(){
        if(this.props.isSignedIn===null){
            return null;
        }
        else if(this.props.isSignedIn===true){
            return(
                 <Button animated='vertical' onClick={this.onSignOut}>
      <Button.Content hidden>LogOut</Button.Content>
      <Button.Content visible>
        <Icon name='sign out alternate' />
      </Button.Content>
    </Button>
            )
        }
        else{
             return(
                 <Button animated='vertical' id="btn-login" onClick={this.onSignIn}>
      <Button.Content hidden>Login with Google</Button.Content>
      <Button.Content visible>
        <Icon name='google' />
      </Button.Content>
    </Button>
            )
        }
    }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: keys.googleClientId,
                scope: 'email profile'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
             this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onAuthChange(isSignedIn){
       if(isSignedIn){
           this.props.dispatch(signIn(this.auth.currentUser.get().getId()))
       }
       else if(!isSignedIn){
        this.props.dispatch(signOut())
       }
    }
    onSignIn(){
    this.auth.signIn()
}
onSignOut(){
    this.auth.signOut()
}
    render() {
        
        return (
            <div>{this.renderAuthState()}</div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        isSignedIn:state.auth.isSignedIn,
        userId:state.auth.userId
    }
}
export default connect(mapStateToProps)(GoogleAuth)