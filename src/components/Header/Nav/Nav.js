import React from 'react'; 

import classes from './Nav.module.css'; 

const Nav = () => {

    return (
        <nav className={classes.nav}>
            <ul>
                <li><a href="#">Main</a></li>
                <li><a href="#">Scoretable</a></li>
            </ul>
        </nav>
    )
}

export default Nav; 