import ReactDOM from 'react-dom';
import React from 'react';

import { HashRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Store/Reducers/RootReducer'

import App from './App';
import './styles.css';

const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <HashRouter>
                <App/>
        </HashRouter>
    </Provider>

)

ReactDOM.render(app, document.getElementById('root'));
