import React, {Component} from 'react';
import {Button, Container} from 'reactstrap';

class Login extends Component {

    render(){
        return(
            <Container>
                <input type="text" className="input" placeholder="Search..." />
                <Button className="btn btn-success" color ="info" type="submit">Search</Button>
            </Container>
        );
    }
}

export default Login;