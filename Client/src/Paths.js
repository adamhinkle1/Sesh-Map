import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Map from '.MapComponents/Map';
import Location from '.MapComponents/location';


const Paths = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Map} exact>
                    <Header />
                    <Map />
                </Route>
                <Route path="/:id" component={Location} />
            </Switch>
        </Router>
    )
}

export default Paths;