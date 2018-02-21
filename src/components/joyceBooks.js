import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const books = [
    'Dubliners',
    'A portrait of the Artist as a Young Man',
    'Exiles and poetry',
    'Ulysses',
    'Finnegans Wake'
];

export default class JoyceBooks extends Component{
    render(){
        return(
            <div>
                <h2>James Joyce's major works</h2>
                <ul className="books">{
                    books.map((book,index)=>{
                        <li className="book" key={index}>{book}</li>
                    })
                }</ul>
                <Link to="/">Go back to index</Link>
            </div>
        )
    }
}