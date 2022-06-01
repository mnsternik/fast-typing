import React from 'react';

import classes from './ScoretableItem.module.css';

const ScoretableItem = (props) => {

    return (
        <section className={classes.item}>
            <div className={classes.item__numeration}>
                <span>{`${props.numeration + 1}.`}</span>
            </div>
            <div className={classes.item__content}>
                <p className={classes.name}>{props.name}</p>
                <p>Words per minute: <span>{props.wordsPerMinute.toFixed()}</span></p>
                <p>Effectiveness: <span>{props.effectiveness.toFixed(2)}%</span></p>
            </div>
        </section>
    )
}

export default ScoretableItem;