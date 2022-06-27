import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { textActions } from '../../../store/text';

import classes from './Timer.module.css'; 

const Timer = () => {

    const time = useSelector(state => state.text.time); 
    const dispatch = useDispatch(); 

    useEffect(() => {
        const timer = setInterval(() => dispatch(textActions.setTime(time + 1)), 1000);
        return () =>  clearInterval(timer) 
    }, [time, dispatch])

    return (
        <div className={classes.timer}>
            <p><span className={classes.timer__item}>TIME:</span> {time}s</p>
        </div>
    )
}

export default Timer;