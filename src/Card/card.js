import React, { useState } from 'react';
import './card.css'


export default function Card(props){
    //state
    const [condition, setCondition] = useState({isFlipped: props.card.isFlipped});

    
    //onClick
    function handleCardClick(){
        setCondition({isFlipped: !condition.isFlipped})
    }

    const cardFront = 
    <div className='front'>
        {props.card.content}
    </div>

    const cardBack = 
    <div className='back' onClick={handleCardClick}>
    </div>
   
    //return
    if(condition.isFlipped === false)
        return cardBack
    return cardFront

}