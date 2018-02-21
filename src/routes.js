import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import AuthorsIndex from './components/authorsIndex';
import JoyceBooks from './components/joyceBooks';
import WellsBooks from './components/wellsBooks';
import NotFound from './components/notFound';

console.log(JoyceBooks);


export default class routes extends React.Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <Route exact path="/" component={AuthorsIndex} />
                    <Route path="/author/joyce" component={JoyceBooks} />
                    <Route path="/author/h-g-wells" component={WellsBooks} />
                    <Route path="*" component={NotFound} />
                </div>
            </HashRouter>
        )
    }
}
