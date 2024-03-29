import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import  rootReducer from './reducers';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { fetchMemes } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log('store', store.getState());
})
store.dispatch(fetchMemes())



ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
