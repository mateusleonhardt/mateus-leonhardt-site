import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Home from './pages/Home';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sobre" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contato" component={Contact} />
        </Switch>
    );
}