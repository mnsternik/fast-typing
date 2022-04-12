import React from 'react';
import { useContext, useEffect } from 'react';

import GameContext from '../../store/game-context';
import useHttp from '../../hooks/useHttp';

import classes from './Text.module.css';

const Text = () => {

    const gameCtx = useContext(GameContext);

    const { isLoading, error, sendRequest: fetchText } = useHttp();

    useEffect(() => {
        const transformData = (data) => {
            gameCtx.getTextHandler(data.joke);
        };
        fetchText(
            { url: 'https://v2.jokeapi.dev/joke/Any?type=single' },
            transformData
        );
    }, [fetchText]);

    return (
        <div className={classes.text}>
            <h2>TEXT TO WRITE:</h2>
            {isLoading && !error && <p>Loading...</p>}
            {error && <p>Something went wrong.</p>}
            <p>{gameCtx.text}</p>
        </div>
    )
};

export default Text; 