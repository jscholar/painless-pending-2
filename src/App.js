import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './Layout/Layout';
import Importer from './Containers/Importer/Importer';
import Pendings from './Containers/Pendings/Pendings'

import classes from './App.module.css'

const App = (props) => {
    
    return (
        <div className={classes.App}>
            <Layout>
                <Switch>
                    <Route path="/new" exact component={Importer}></Route>
                    <Route path="/pending" component={Pendings}></Route>
                </Switch>
            </Layout>
        </div>
    )
}

export default App;
