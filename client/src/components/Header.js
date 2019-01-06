import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { withRouter,Link } from "react-router-dom"
import GoogleAuth from "./GoogleAuth"
import { connect } from "react-redux"
import { Modal, Button, Icon } from "semantic-ui-react"
import StreamNew from "./StreamNew"
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { activeItem: 'home', modalOpen: false }
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })
    handleItemClick = (e, { name, href }) => {
       
       
    }


    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} href="/" />

                    {this.props.isSignedIn && <Menu.Item name='home' active={activeItem === 'create'} onClick={this.handleItemClick}>  <Modal
                        trigger={<Button onClick={this.handleOpen}>Create New Stream</Button>}
                        open={this.state.modalOpen}
                        onClose={this.handleClose}
                        basic
                        size='small'
                    >
                        <Header icon='browser' content='Cookies policy' />
                        <Modal.Content>
                            <StreamNew />
                        </Modal.Content>

                    </Modal></Menu.Item>}
                    {this.props.isSignedIn && <Menu.Item name='mystreams' active={activeItem === 'create'} onClick={this.handleItemClick} href="/streams/mystreams" />}
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='friends'
                            active={activeItem === 'friends'}
                            onClick={this.handleItemClick}
                        ><GoogleAuth /></Menu.Item>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }
}
export default connect(mapStateToProps)(Header)