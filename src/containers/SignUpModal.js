import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'


class SignUpModal extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",

    };

  handleChange=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    });
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
    axios({
      method: 'POST',
      url: 'https://insta.nextacademy.com/api/v1/users/new',
      data: {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
    })
    .then(response => {
      alert("Congratulations! Your account has been registered!")
      this.setState({
        username: "",
        email: "",
        password: "",
    })
    })
    .catch (error => {
        console.log('ERROR', error)
        alert(JSON.stringify(error.response.data.message))
    })
    
  }

  render() {
    return (
      <div>
        <Modal isOpen={!this.props.isLogIn} toggle={this.props.toggle}>
          <ModalHeader>Nextagram</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Full Name</Label>
                <Input 
                    id="username" 
                    placeholder="Username" 
                    value={this.state.username} 
                    onChange={this.handleChange}>
                </Input>
              </FormGroup>

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
                <div>Already have an account?<Button onClick={this.props.logInToggle}>Log In</Button></div>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onSubmit={this.props.toggle} onClick={this.handleSubmit}>Register</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SignUpModal;