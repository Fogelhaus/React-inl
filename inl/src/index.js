import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom'
import { history } from './components/helpers/history'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import combinedReducer from './store/reducers/combinedReducer'
import thunk from 'redux-thunk'

const initialState = {}

const store = createStore(combinedReducer, initialState, compose(applyMiddleware(thunk)))

ReactDOM.render(

    <Provider store={store}>

        <Router history={history}>
            <App />
        </Router>
    </Provider>


    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
