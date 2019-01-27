import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import './index.css';
import * as serviceWorker from './serviceWorker';

import reducers from './reducers';

//COMPONENTS
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)



ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
                 <BrowserRouter>
                     <div>
                        <Switch>
                            <Route path="/posts/new" component={PostsNew}/>
                            <Route path="/posts/:id" component={PostsShow}/>
                            <Route exact path="/" component={PostsIndex}/> 
                        </Switch>
                     </div>
                 </BrowserRouter>
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
