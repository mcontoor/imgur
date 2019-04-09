import React, { Component} from "react";

import { Button, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Nav, Container, Row, Col  } from 'reactstrap';

import Search from './search.js';

class Header extends Component{

    render(){

        return(
            <div className = 'title'>
                <nav className="navbar navbar-light bg-dark">
                <Container>
                    <Row>
                        <Col lg ="4">
                            <a className="navbar-brand" href="https://www.google.com"><h1>SLIMGUR</h1></a>
                        </Col>
                        
                        <Col lg ="4">
                            <Search />
                        </Col>

                        <Col lg ="4">
                            <Button className ="float-right" color="info">SIGN UP</Button>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col>
                            <Nav>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        MOST VIRAL
                                    </DropdownToggle>
                                    <DropdownMenu left>
                                        <DropdownItem>
                                            MOST VIRAL
                                        </DropdownItem>
                                        <DropdownItem>
                                            USER SUBMITTED
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>

                        </Col>
                    </Row>
                </Container>


                </nav>

            </div>
            );
    }
}

export default Header;
