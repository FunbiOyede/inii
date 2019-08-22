import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = (props) => (
    <header className={styles.Header}>
        <nav>
            <div>
                <div className={styles.Logo}>
                <Link to="/">logo</Link>
                </div>
                    <ul className={styles.navItems}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/AddBookmark">Add Bookmark</Link></li>
                        <li><Link to="/profile">UserProfile</Link></li>
                    </ul>
            </div>
           
        </nav>
    </header>
    
);

export default Navigation;