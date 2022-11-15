import React, { useState } from 'react';
import './card.css'


export default function Card(props){
    //state
    const [condition, setCondition] = useState({isFlipped: false});
    //onClick


    const cardFront = 
    <div className='front' onClick={() => setCondition({isFlipped: !condition.isFlipped})}>
        {props.card.content}
    </div>

    const cardBack = 
    <div className='back' onClick={() => setCondition({isFlipped: !condition.isFlipped})}>

    </div>
    //return
    if(condition.isFlipped === false)
        return cardBack
    return cardFront

}