const React = require('react');
const books = [
  'Dubliners',
  'A portrait of the Artist as a Young Man',
  'Exiles and poetry',
  'Ulysses',
  'Finnegans Wake'
];
class JoyceBooks extends React.Component{
    render(){
        return(
            <div>
                <h2>James Joyce's major works</h2>
                <ul className="books">{
                    books.map((book,index)=>{
                        <li className="book" key={index}>{book}</li>
                    })
                }</ul>
            </div>
        )
    }
}
module.exports = JoyceBooks;