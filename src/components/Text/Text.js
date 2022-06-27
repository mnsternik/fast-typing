import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { textActions } from '../../store/text';
import useHttp from '../../hooks/useHttp';

import classes from './Text.module.css';

const Text = (props) => {

    const textData = useSelector(state => state.text); 
    const dispatch = useDispatch();
    const { isLoading, error, sendRequest: fetchText } = useHttp();

    useEffect(() => {
        const transformFetchedData = (data) => {
            const filteredTexts = [];
            for (let textKey in data) {
                if (data[textKey].length === textData.length && data[textKey].language === textData.language) {
                    filteredTexts.push(data[textKey]);
                    
                }
            }      
            const randomIndex = Math.floor(Math.random() * filteredTexts.length); 
            dispatch(textActions.setText(filteredTexts[randomIndex].text));
        };
    
        fetchText(
            { url: 'https://type-faster-fd0c0-default-rtdb.firebaseio.com/texts.json' },
            transformFetchedData
        );
    }, [dispatch, fetchText, textData.language, textData.length])

    return (
        <div className={classes.text}>
            <h2>TEXT TO WRITE:</h2>
            {isLoading && !error && <p>Loading...</p>}
            {error && <p>Something went wrong.</p>}
            <p>{textData.text}</p>
            {
            //   <p className={classes.footer}>{`- ${gameCtx.textData.author}, `} <span className={classes.cursive}>{gameCtx.textData.book}</span></p>
            }
        </div>
    )
};

export default Text;