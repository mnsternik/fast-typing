import React from 'react'; 
import { useContext } from 'react';

import GameContext from '../../store/game-context';

import classes from './Text.module.css'; 

const Text = (props) => {

    const gameCtx = useContext(GameContext); 

    return (
        <div className={classes.text}>
            <h2>Some text:</h2>
            <p>{gameCtx.text}</p>
        </div>
    )
}

export default Text; 