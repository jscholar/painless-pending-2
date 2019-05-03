import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './Store/Reducers/RootReducer'

import App from './App';
import './styles.css';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const app = (
    <Provider store={store}>
        <HashRouter>
                <App/>
        </HashRouter>
    </Provider>

)

ReactDOM.render(app, document.getElementById('root'));
