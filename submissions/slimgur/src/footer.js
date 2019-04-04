import React, { Component} from "react";

import { Button,Nav, NavLink } from 'reactstrap';

// import Search from './search.js';

class Footer extends Component{

    render(){

        return(
            <div className = 'title'>
                <nav class="navbar fixed-bottom navbar-light bg-dark">
                    <a class="navbar-brand" href="https://www.google.com">@2019, Slimgur Inc.</a>
                    <Nav>
                        <NavLink href="https://www.google.com">About</NavLink>
                        <NavLink href="https://www.google.com">Press</NavLink> 
                        <NavLink href="https://www.google.com">Blog</NavLink>
                        <NavLink href="https://www.google.com">Privacy</NavLink>  
                        <NavLink href="https://www.google.com">Terms</NavLink>
                        <NavLink href="https://www.google.com">Advertise</NavLink> 
                        <NavLink href="https://www.google.com">Careers</NavLink>
                        <NavLink href="https://www.google.com">Help</NavLink>   
                    </Nav>

                    <Button className ="float-right" color="primary">GET THE APP</Button>
                </nav>

            </div>
            );
    }
}

export default Footer;
