import React from 'react';
import {Link} from 'react-router-dom';

const AUTHORS = require('../authors');

export default class AuthorPage extends React.Component{
    render(){
        const author = AUTHORS[this.props.match.params.id];
        console.log(author);
        return(
            <div>
                <h2>{author.name}'s major works</h2>
                <ul className="books">{
                    author.books.map((book, key)=><li key={key} className={book}>{book}</li>)
                }</ul>
                <Link to='/'>Go back to index</Link>
            </div>
        )
    }
}