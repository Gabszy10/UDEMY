import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import Movie from '../Movie/Movie';

class App extends Component {
    state = {  }
    render() { 
        return (  
            <BrowserRouter>
                <React.Fragment>
                    <Header/>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/:movieId" component={Movie} exact />
                        <Route component={NotFound} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}
 
export default App;