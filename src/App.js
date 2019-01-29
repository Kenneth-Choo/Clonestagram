import React from 'react';
import axios from 'axios';
import HomePage from './pages/HomePage';
import ShowLoader from './components/Loader';
import { Route, Switch } from "react-router-dom";
import UserProfilePage from './pages/UserProfilePage';
import NavbarTop from './components/Navbar';

  class App extends React.Component {
    state = {
        users: [],
        // isLoading: false,
      }
   
    componentDidMount(){
      axios.get('https://insta.nextacademy.com/api/v1/users')
      .then (users => {
        this.setState({
          // isLoading: true,
          users : users.data,
        })
      })
      .catch (error => {
        console.log('ERROR', error)
      })
    }

    render(){
      if (!this.state.users.length){
        return (
        <ShowLoader />
        )}
      return (
        <div>
          <NavbarTop />
          <Switch>
            <Route exact path = "/" component = {props => <HomePage users = {this.state.users} />} />
            <Route path = "/users/:id" component = {UserProfilePage} />
          </Switch>
        </div>
        
      )
    }
  }

  export default App;
