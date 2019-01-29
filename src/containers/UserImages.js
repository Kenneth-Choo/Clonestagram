import React from 'react';
import axios from 'axios';
import ShowLoader from '../components/Loader';

  class UserImages extends React.Component {
    state = {
        images: [],
      }

    componentDidMount(){
      axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${this.props.userId}`)
      .then(images => {
        this.setState({images: images.data})
      })
      .catch (error => {
        console.log('ERROR', error)
      })
    }

    render(){
        if (!this.state.images.length){
            return (
            <ShowLoader />
            )}
      return(
          this.state.images.map((image, index) =>
            <div key={index}>
            <img src = {image} alt=''/>
            </div>
            )
      )
    }
  }
   
  export default UserImages;