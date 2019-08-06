import React from 'react';
// import { Menu } from 'antd';
import styles from './Navigation.module.css'

const Navigation = (props) => (
    <header className={styles.Header}>
        <nav>
            <div>
                <div className={styles.Logo}>
                <a href="/">logo</a>
                </div>
               
                <form className={styles.Input}>
                    <input type="text" name="" id=""/>
                </form>
                    <ul className={styles.navItems}>
                    <li><a href="/">Add Bookmark</a></li>
                    <li><a href="/">UserProfile</a></li>
                    </ul>
            </div>
           
        </nav>
    </header>
    
);

export default Navigation;