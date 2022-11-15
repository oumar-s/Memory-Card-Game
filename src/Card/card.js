import React, { useState } from 'react';
import './card.css'


export default function Card(props){
    //state
    const [condition, setCondition] = useState({isFlipped: false});
    //onClick


    const cardFront = 
    <div className='front'>
        {props.text}
    </div>

    const cardBack = 
    <div className='back'>

    </div>
    //return
    if(condition.isFlipped === false)
        return cardBack
    return cardFront

}