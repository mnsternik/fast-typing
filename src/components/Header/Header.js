import React, { Fragment } from 'react';

import classes from './Header.module.css';
import Nav from './Nav/Nav';

import logo from './../../assets/keyboard.png';

const Header = (props) => {

    return (
        <Fragment>
            <Nav />
            <div className={classes.header}>
                <img src={logo} alt={'Keyboard'} />
                <h1>TYPE FASTER</h1>
            </div>
        </Fragment>
    )
}

export default Header; 