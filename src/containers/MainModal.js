//incorporate two modals into one container
//upon clicking login/signup modal, show the one clicked
//->use if else condition so if login is clicked on show login modal but hide signup & vice versa

import React from 'react'
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

class MainModal extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        isLogIn: true,
      };
    }

    logInToggle =()=> {
        this.setState({
          isLogIn: !this.state.isLogIn
        });
      }


    render(){
        const { toggle } = this.props
        return(
            this.state.isLogIn ? <LoginModal showModal = {this.state.showModal} logInToggle={this.logInToggle} isLogIn = {this.state.isLogIn} toggle = {toggle}/> : <SignUpModal logInToggle={this.logInToggle} isLogIn = {this.state.isLogIn} toggle = {toggle}/>
        )
    }
}

export default MainModal;