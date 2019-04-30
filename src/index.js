import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import App from './App';
import './styles.css';

const app = (
    <HashRouter>
        <App></App>
    </HashRouter>
)

ReactDOM.render(app, document.getElementById('root'));
