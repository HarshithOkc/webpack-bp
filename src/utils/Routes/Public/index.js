import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const HelloWorld = React.lazy(() => import('./../../../containers/HelloWorld'));

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' >
                    <Suspense fallback={<div>Loading...</div>}>
                        <HelloWorld />
                    </Suspense>
                </Route>
            </Switch>

            <Route exact path="/money_transfer">
            
          </Route>
        </Router>
    )
}

export default Routes;