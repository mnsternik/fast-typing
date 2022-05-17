import React, { useEffect, useState } from 'react';

import classes from './Scoretable.module.css';

import ScoretableItem from './ScoretableItem/ScoretableItem';

import useHttp from '../../hooks/useHttp';

const Scoretable = () => {

    const [scores, setScores] = useState([]);

    const { isLoading, error, sendRequest: fetchScores } = useHttp();

    useEffect(() => {
        const transformData = (data) => {
            const loadedScores = []; 
                for (const scoreKey in data) {
                    loadedScores.push({
                        name: data[scoreKey].name,
                        time: data[scoreKey].time,
                        characters: data[scoreKey].textLength,
                        effectiveness: data[scoreKey].effectiveness,
                        wordsPerMinute: data[scoreKey].wordsPerMinute,
                        mistakes: data[scoreKey].mistakes
                    })
                }
            const sortedScores = loadedScores.sort((a, b) => b.wordsPerMinute - a.wordsPerMinute)
                setScores(sortedScores);
        };
        fetchScores(
            { url: 'https://type-faster-fd0c0-default-rtdb.firebaseio.com/scores.json' },
            transformData
        );
    }, [fetchScores]);

    let scoreItems = <p>Oops, no scores yet!</p>
    if (scores.length > 0) {;
        scoreItems = scores.map((score, i) => {
            return (
                <ScoretableItem
                    key={i}
                    numeration={i}
                    name={score.name}
                    wordsPerMinute={score.wordsPerMinute}
                    effectiveness={score.effectiveness}
                    characters={score.characters}
                    time={score.time}
                    mistakes={score.mistakes}
                />
            )
        })
    }

    return (
        <div className={classes.scoretable}>
            <h1>Best typers</h1>
            {isLoading && <p>Loading...</p>}
            {error && !isLoading && <p>Something went wrong...</p>}
            {scoreItems}
        </div>
    )
}

export default Scoretable;