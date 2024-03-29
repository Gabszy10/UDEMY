import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login'
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Header from './routes/Header';
import LoadingComponent from './components/LoadingComponent';
import AuthenticatedComponent from './components/AuthenticatedComponent';
import NoteDetail from './components/NoteDetail';
import NoteEdit from './components/NoteEdit';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
                    <BrowserRouter>
                        <LoadingComponent>
                            <div>
                                <Switch>
                                        <Route path="/login" component={Login} exact/>
                                        <Redirect from="/logout" to="/login" />
                                    <AuthenticatedComponent>
                                        <Header/>
                                        <Route path="/:id/edit" component={NoteEdit} exact={true} /> 
                                        <Route path="/" component={App} exact/>
                                        <Route path="/:id" component={NoteDetail} exact={true} /> 
                                    </AuthenticatedComponent>
                                </Switch>
                            </div>
                        </LoadingComponent>
                    </BrowserRouter>
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
