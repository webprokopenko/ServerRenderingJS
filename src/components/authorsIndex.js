import React from 'react';
import {Link} from 'react-router-dom';

const authors = [
    {id:1, name: 'James Joyce', slug: 'joyce'},
    {id:2, name: 'Herbert George Wells', slug: 'h-g-wells'}
];
export default class authorsIndex extends React.Component{
    render(){
        return(
            <div>
                <h1>List of authors</h1>
                <ul>{
                    authors.map(author=> <li key={author.id}><Link to={`/author/${author.slug}`}>{author.name}</Link></li>)
                }</ul>
            </div>
        )
    }
}