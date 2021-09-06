import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Faq from './components/faq/faq';
import Services from './components/services/services';
import Home from './components/home/home';
import Weddings from './components/Weddings/weddings';
import Events from './components/events/events';
import Photos from './components/photobooth/photo';
import Thanks from './components/thanks/thanks';



export default (
    <HashRouter>
        <Switch>
            <Route exact path = '/' component = { Home } />
            <Route path = '/about' component = { About } />
            <Route path = '/contact' component = { Contact } />
            <Route path = '/faq' component = { Faq } />
            <Route path = '/services' component = { Services } />
            <Route path = '/weddings' component = { Weddings } />
            <Route path = '/events' component = { Events } />
            <Route path = '/photo' component = { Photos } />
            <Route pate = '/thanks' component = { Thanks } />
        </Switch>
    </HashRouter>
)