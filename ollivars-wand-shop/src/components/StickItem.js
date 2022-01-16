import React from 'react'
import { Link } from "react-router-dom";

const StickItem =({ stick }) => {
    
    return (
        <div>
            <Link to={`/wands/${stick.slug}`}>
            <div><img alt={stick.core} src={stick.imageUrl} />
            <p>{stick.core}</p></div>
            </Link>
        </div>
    )
}

export default StickItem
