import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from './reducers'

import App from './components/App';
import Car from './containers/car';

// import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
                    <BrowserRouter>
                        <div>
                            <Route exact path="/" component={App}></Route>
                            <Route path="/car/:id" component={Car}></Route>
                        </div>
                    </BrowserRouter>
                </Provider>, 
                document.getElementById('root'));

