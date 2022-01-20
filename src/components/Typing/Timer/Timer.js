import React from 'react'
import { useEffect, useContext } from 'react';

import GameContext from '../../../store/game-context';

import classes from './Timer.module.css'; 

const Timer = () => {

    const gameCtx = useContext(GameContext); 


    useEffect(() => {
        const timer = setInterval(() => gameCtx.getTimeHandler(t => t + 1), 1000);
        return () =>  clearInterval(timer) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={classes.timer}>
            <p><span className={classes.timer__item}> TIME: </span> {gameCtx.time}s</p>
        </div>
    )
}

export default Timer;