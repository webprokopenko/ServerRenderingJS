import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import AuthorsIndex from './components/authorsIndex';
import AuthorPage from './components/authorPage';
import NotFound from './components/notFound';


export default class routes extends React.Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <Route exact path="/" component={AuthorsIndex} />
                    <Route path="/author/:id" component={AuthorPage}/>
                    <Route path="*" component={NotFound} />
                </div>
            </HashRouter>
        )
    }
}
