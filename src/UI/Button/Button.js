import React from "react";

import classes from './Button.module.css'; 

const Button = (props) => {

    return (
        <button 
            className={classes.button}
            style={props.styles}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button; 