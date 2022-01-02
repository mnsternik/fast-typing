import React, { Fragment } from 'react'; 

import classes from './Header.module.css'; 
import Nav from './Nav/Nav';

const Header = (props) => {

    return (
        <Fragment>
            <Nav />
            <div className={classes.header}>
                
            </div>
        </Fragment>
    )
}

export default Header; 