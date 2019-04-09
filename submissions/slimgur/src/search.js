import React, { Component} from "react";

import { Button } from 'reactstrap';

class Search extends Component{

    render(){
        return(
            <div>
                <input type="text" className="input" placeholder="Search..." />
                <Button class="btn btn-success" color ="primary" type="submit">Search</Button>
            </div>

        );
    }
}

export default Search;