import React from 'react'; 
import { NavLink } from 'react-router-dom';

import classes from './Nav.module.css'; 

const Nav = () => {

    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink activeClassName={classes.active} exact to='/'>Main</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/scoretable'>Scoretable</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav; 