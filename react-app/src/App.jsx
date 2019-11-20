import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Landing }  from './landing/Landing';
import { Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
}));

export const App = () => {
    return (
        <div id="App" className={classes.root}>
            <Route exact path='/' component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route path="/home" component={Home} />
        </div>
    );
};
