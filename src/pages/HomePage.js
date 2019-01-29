import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap'
import UserImages from '../containers/UserImages'
import { Link } from "react-router-dom"


    class HomePage extends React.Component {

        render(){
        return (
            <div>
              <Container>
                <ul>
                {this.props.users.map((user,index) =>
                  <li key = {index}> 
                    <Row>
                      <Col>
                        <img src = {user.profileImage} alt = '' />
                        <div>{user.username}</div>
                        <Link to = "/users/:id"><Button color='light'>{user.id}</Button></Link>
                      </Col>
                      <UserImages userId = {user.id}/>
                    </Row>
                  </li>)}
                </ul>
              </Container>
            </div>
        )
        }
    }

export default HomePage;