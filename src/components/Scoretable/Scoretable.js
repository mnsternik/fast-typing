import React, { useEffect, useState } from 'react';
import useHttp from '../../hooks/useHttp';
import ScoretableItem from './ScoretableItem/ScoretableItem';

import classes from './Scoretable.module.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

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
            const sortedScores = loadedScores.sort((s1, s2) => s1.wordsPerMinute - s2.wordsPerMinute)
            setScores(sortedScores);
        };

        fetchScores(
            { url: 'https://type-faster-fd0c0-default-rtdb.firebaseio.com/scores.json' },
            transformData
        );
    }, [fetchScores]);

    const sortByEffectivnes = () => {
        const sortedScores = scores.slice();
        setScores(sortedScores.sort((s1, s2) => s2.effectiveness - s1.effectiveness));
    };

    const sortByWordsPerMinute = () => {
        const sortedScores = scores.slice();
        setScores(sortedScores.sort((s1, s2) => s2.wordsPerMinute - s1.wordsPerMinute));
    };

    let scoreItems = <p>Oops, no scores yet!</p>
    if (scores.length > 0) {
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
            <h1>SCORETABLE</h1>
            <p>Sort by:</p>

                <ButtonGroup variant="text" aria-label="text button group" sx={{
                    my: 1,
                    mx: 'auto'
                }}>
                    <Button onClick={sortByEffectivnes}>Effectiveness</Button>
                    <Button onClick={sortByWordsPerMinute}>Words per minute</Button>
                </ButtonGroup>

            {isLoading && <p>Loading...</p>}
            {error && !isLoading && <p>Something went wrong...</p>}
            {scoreItems}
        </div>
    )
}

export default Scoretable;