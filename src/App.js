import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPending, listenSpecs } from './Database/database';
import Layout from './Layout/Layout';
import Uploader from './Containers/Uploader/Uploader';
import Pendings from './Containers/Pendings/Pendings'
import Loading from './Components/UI/Loading/Loading';

import classes from './App.module.css'

class App extends React.Component {
    
    componentDidMount() {
        fetchPending();
        listenSpecs();
    }

    render() {
        let appDisplay = (
            <div className={classes.Connecting}>Connecting<Loading/></div>
        )
        if (this.props.connected) {
            appDisplay = (
                <div className={classes.App}>
                    <Layout>
                        <Switch>
                            <Route path="/upload" exact component={Uploader}></Route>
                            <Route path="/pending" component={Pendings}></Route>
                        </Switch>
                    </Layout>
                </div >
            )
        }
        return appDisplay;
    }
}

const mapStateToProps = (state) => {
    return {
        connected: state.fetchedPending
    }
}

export default connect(mapStateToProps)(App);
