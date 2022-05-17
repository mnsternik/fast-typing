import React from 'react';
import { useContext, useEffect } from 'react';

import GameContext from '../../store/game-context';
import useHttp from '../../hooks/useHttp';

import classes from './Text.module.css';

const Text = () => {

    const gameCtx = useContext(GameContext);

    const { isLoading, error, sendRequest: fetchText } = useHttp();

    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    useEffect(() => {
        const transformData = (data) => {
            const filteredTexts = [];
            for (let textKey in data) {
                if (data[textKey].length === gameCtx.textLength && data[textKey].language === gameCtx.language) {
                    filteredTexts.push(data[textKey]);
                }
            }
            gameCtx.getTextHandler(shuffle(filteredTexts)[0]);
        };
        fetchText(
            { url: 'https://type-faster-fd0c0-default-rtdb.firebaseio.com/texts.json' },
            transformData
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchText]);

    return (
        <div className={classes.text}>
            <h2>TEXT TO WRITE:</h2>
            {isLoading && !error && <p>Loading...</p>}
            {error && <p>Something went wrong.</p>}
            <p>{gameCtx.textData.text}</p>
            <p className={classes.footer}>{`- ${gameCtx.textData.author}, `} <span className={classes.cursive}>{gameCtx.textData.book}</span></p>
        </div>
    )
};

export default Text;

//jokes api: 'https://v2.jokeapi.dev/joke/Any?type=single'