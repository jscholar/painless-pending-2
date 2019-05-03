import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import database from './Database/instance';

import { fetchPending } from './Store/Actions/Actions';
import Layout from './Layout/Layout';
import Importer from './Containers/Importer/Importer';
import Pendings from './Containers/Pendings/Pendings'

import classes from './App.module.css'

const App = (props) => {
    console.log('re-rendered');
    const specRef = database.ref('worksheets/');
    specRef.on('value', (snapshot) => {
        console.log(snapshot);
        props.updatePending(snapshot.val());
    })

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

const mapDispatchToProps = (dispatch) => {
    return {
        updatePending: (newPending) => dispatch(fetchPending(newPending))
    }
}

export default connect(null, mapDispatchToProps)(App);
