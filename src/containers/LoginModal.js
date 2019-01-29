import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class LoginModal extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    });
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state)
    axios({
      method: 'POST',
      url: 'https://insta.nextacademy.com/api/v1/login',
      data: {
        email: this.state.email,
        password: this.state.password
      }
    })
    .then(response => {
      alert("You have logged in!")
      
      localStorage.setItem('jwt', response.data.auth_token)
      this.setState({
        email: "",
        password: "",
      })
    })
    .catch (error =>{
      console.log("ERROR", error)
      alert(JSON.stringify(error.response.data.message))
      })
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isLogIn} toggle={this.props.toggle}>
          <ModalHeader>Nextagram</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>E-mail</Label>
                <Input 
                  id="email" 
                  placeholder="E-mail"
                  value={this.state.email} 
                  onChange={this.handleChange}>
                  </Input>
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input 
                  id="password"
                  placeholder="Password"
                  type="Password"
                  value={this.state.password} 
                  onChange={this.handleChange}>
                  </Input>
              </FormGroup>
              <FormGroup>
                <div>Don't have an account?<Button onClick={this.props.logInToggle}> Register</Button></div>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onSubmit={this.props.toggle} onClick={this.handleSubmit}>Login</Button>
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;