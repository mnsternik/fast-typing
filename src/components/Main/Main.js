import React from 'react'; 

import Header from '../Header/Header';
import Text from '../Text/Text';
import Typing from '../Typing/Typing';
import Start from '../Start/Start';

import classes from './Main.module.css'; 

const Main = () => {

    return (
        <div className={classes.main}>
            <Header />
            <Start />
            <Text />
            <Typing />
        </div>
    )
}

export default Main; 