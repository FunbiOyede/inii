import React from 'react';
import { Route , Switch} from 'react-router-dom';
import AddBookmark from '../../container/NewBookmark/AddBookmark';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Error from '../Error/Error';


const Layout = (props) => (
    <div>
        <Navigation />
        <Switch>
            <Route path="/" exact  component={Home}/>
            <Route path="/AddBookmark" exact component={AddBookmark}/>
            <Route path="/profile" exact component={Profile} />
            <Route component={Error} />
        </Switch>
    </div>
)

export default Layout