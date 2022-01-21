import React, { useEffect, useState } from 'react';

import classes from './Scoretable.module.css';

import ScoretableItem from './ScoretableItem/ScoretableItem';

const Scoretable = () => {

    //const scoreExample = JSON.parse('{"id":1,"language":"Polski","text":"Król Karol kupił królowej Karolinie korale koloru koralowego","lenght":61,"score":[{"id":1,"name":"Rak","mistakes":4,"textId":1}]}')

    //const [scores, setScores] = useState();
    const [scores, setScores] = useState(JSON.parse('[{"id":1,"language":"Polski","text":"Król Karol kupił królowej Karolinie korale koloru koralowego","lenght":61,"score":[{"id":1,"name":"Rak","mistakes":4,"textId":1}]}]'));

    useEffect(() => {
        fetch('endpoint here', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                //setScores(data);
            })
            .catch(error => console.log(error))
    }, [])

    console.log(scores[0])
    const scoreItems = scores.map((score, i) => {
        return (
            <ScoretableItem
                key={score.id}
                numeration={i}
                name={score.score[0].name}
                language={score.language}
                lenght={score.lenght}
                //time={}
                mistakes={score.score[0].mistakes}
            />
        )
    })

    return (
        <div className={classes.scoretable}>
            <h1>TOP 10 TYPERS</h1>
            {scores ? scoreItems : <p>Oops, no scores yet!</p>}
        </div>
    )
}

export default Scoretable;