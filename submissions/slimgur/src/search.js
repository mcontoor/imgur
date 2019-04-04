import React, { Component} from "react";

// import { Button } from 'reactstrap';

class Search extends Component{

    render(){
        return(
            <div>
                <input type="text" className="input" placeholder="Search..." />
                <button class="btn btn-success" type="submit">Search</button>
            </div>

        );
    }
}

export default Search;