import React, { useState, useEffect } from 'react'; 
import { NavLink } from 'react-router-dom';

import classes from './Nav.module.css'; 

const Nav = () => {

    const [isNavSticked, setIsNavSticked] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar)
    }, [])

    const stickNavbar = () => {
        if (window.scrollY > 0) {
            setIsNavSticked(true); 
            return
        } 
        if (window.scrollY === 0) {
            setIsNavSticked(false);
        }
    }

    let navClasses = isNavSticked ? `${classes.nav} ${classes.sticked}` : classes.nav; 

    return (
        <nav className={navClasses}>
            <ul>
                <li><NavLink activeClassName={classes.active} exact to='/'>Main</NavLink></li>
                <li><NavLink activeClassName={classes.active} to='/scoretable'>Scoretable</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav; 