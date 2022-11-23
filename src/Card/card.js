import React from 'react';
import './card.css'


export default class Card extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isFlipped: props.card.isFlipped};
    }
    handleCardClick = () => {
        this.setState({isFlipped: !this.state.isFlipped})
        this.props.card.isFlipped = this.state;
        setTimeout(() => {this.props.handleChoice(this.props.card)}, 1000)
        
    }
    
    cardFront = 
    <div className='front'>
        {this.props.card.content}
    </div>

    cardBack = 
    <div 
        className='back' onClick={this.handleCardClick}>
    </div>
    render() {
        if(this.props.card.isFlipped === false)
            return this.cardBack
        return this.cardFront
    }
  }
  

