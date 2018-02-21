import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NotFound extends Component{
    render(){
        return(
            <div>
                <h1>Not Found!!!</h1>
                <Link to="/">Go back to index</Link>
            </div>
        )
    }
}