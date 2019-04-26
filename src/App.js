import React from 'react';

import Layout from './Layout/Layout';
import Importer from './Containers/Importer/Importer';

import classes from './App.module.css'

const App = (props) => {
    return (
        <div className={classes.App}>
            <Layout>
                <Importer></Importer>
            </Layout>
        </div>
    )
}

export default App;
