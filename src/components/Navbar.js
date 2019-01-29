import React from 'react'
import { Link } from "react-router-dom";
import {Navbar, Row, Button} from 'reactstrap'
import MainModal from '../containers/MainModal';

class NavbarTop extends React.Component{
    state = {
        showModal: false,
    }

    toggle =()=>{
        this.setState({showModal: !this.state.showModal})
    }

    render(){
        return (
          <>
          {this.state.showModal ? <MainModal showModal = {this.state.showModal} toggle = {this.toggle} /> : null }
          <Navbar style={{backgroundColor: 'rgb(144, 198, 149)', padding: '30px'}}>
            <Row>
                <h1>Nextagram</h1>
            </Row>
            <Row>
                <Link to = "/">Home </Link>
            </Row>
            <Row>
                <Link to = "/users/:id">My Profile</Link>
            </Row> 
            <Row>
                <Button color="primary" onClick={this.toggle}>Log In / Register</Button> 
            </Row>
          </Navbar>
          </>
        )
    }
}

export default NavbarTop;
