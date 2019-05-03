import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './Layout/Layout';
import Uploader from './Containers/Uploader/Uploader';
import Pendings from './Containers/Pendings/Pendings'

import classes from './App.module.css'

const App = (props) => {

    return (
        <div className={classes.App}>
            <Layout>
                <Switch>
                    <Route path="/upload" exact component={Uploader}></Route>
                    <Route path="/pending" component={Pendings}></Route>
                </Switch>
            </Layout>
        </div>
    )
}

export default (App);
