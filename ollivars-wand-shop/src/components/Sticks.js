import React from 'react'
import '../App.css'
import wands from '../wands';
import StickItem from './StickItem';
// let arraySticks = wands.map((wand) => <Sticks stickDetails={wand} />)
const Sticks = () => {
    return (
        <div>
            {wands.map((stick) => <StickItem stick={stick} />)}
        </div>
    );
};

export default Sticks
