import React from 'react'
import {useParams} from "react-router-dom"
import wands from '../wands';

function StickDetails() {
    let {stickSlug} = useParams();
    let wand = wands.find((sticks) => sticks.slug === stickSlug);
    return (
        <div>
           <img alt='' src={wand.imageUrl} />
           <h1>{wand.core}</h1>
           <h1>{wand.wood}</h1>
           <p>{wand.length}</p>
        </div>
    )
}

export default StickDetails
