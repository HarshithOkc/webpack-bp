import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HelloWorld from './../../../containers/HelloWorld'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact 
                    path='/' 
                    component={HelloWorld} 
                />
            </Switch>
        </Router>
    )
}

export default Routes;