import React from 'react';
import {Link} from 'react-router-dom';

const books = [
    'The Time Machine',
    'The War of the Worlds',
    'The First Men in the Moon',
    'The Invisible Man'
];
export default class WellsBooks extends React.Component{
    render(){
        return(
            <div>
                <h2>Herbert George Wells's major works</h2>
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