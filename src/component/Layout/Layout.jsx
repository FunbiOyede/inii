import React from 'react';
import Hoc from '../../HOC/hoc';
import Navigation from '../Navigation/Navigation';
import AddBookmark from '../../container/NewBookmark/AddBookmark'

const Layout = (props) => (
    <Hoc>
        <Navigation />
        <AddBookmark />
    </Hoc>
)

export default Layout