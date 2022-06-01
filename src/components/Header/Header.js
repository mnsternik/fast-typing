import React, { Fragment } from 'react';

import classes from './Header.module.css';
import Nav from './Nav/Nav';

const Header = (props) => {

    return (
        <Fragment>
            <Nav />
            <div className={classes.header}>
                <div className={classes.banner}>
                    <div className={classes.cover}>
                        <h1>TYPE FASTER</h1>
                        <h2>FIND OUT HOW FAST CAN YOU TYPE</h2>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;
