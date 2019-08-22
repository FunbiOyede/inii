import React from 'react';
import Hoc from '../../HOC/hoc';
import { Route , Switch } from 'react-router-dom';
import AddBookmark from '../../container/NewBookmark/AddBookmark';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';

const Layout = (props) => (
    <Hoc>
        <Navigation />
        <Switch>
            <Route path="/" exact  component={Home}/>
            <Route path="/AddBookmark" exact component={AddBookmark}/>
            <Route path="/profile" exact component={Profile} />
        </Switch>
    </Hoc>
)

export default Layout