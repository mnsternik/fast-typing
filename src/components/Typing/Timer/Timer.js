import React from 'react'
import { useEffect, useContext } from 'react';

import GameContext from '../../../store/game-context';

import classes from './Timer.module.css'; 

const Timer = () => {

    const gameCtx = useContext(GameContext); 

    useEffect(() => {
        const timer = setInterval(() => {
            gameCtx.getTimeHandler(t => t + 1)
        }, 1000);
        return () => { clearInterval(timer) }
    }, [])

    return (
        <div className={classes.timer}>
            {gameCtx.time}
        </div>
    )
}

export default Timer;