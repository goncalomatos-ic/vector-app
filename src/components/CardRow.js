import React from 'react';
import Card from './Card';

class CardsRow extends React.Component {
  render() {
    const items = []

    // Sort cards by the position attribute and split cards rows every 3 elements
    for (var index in this.props.cards) {
      let card = this.props.cards[index]
      items.push(<Card key={card.position.toString()} info={card}/>)
    }

    return (
      <div className="CardRow">
        {items}
      </div>
    );
  }
}

export default CardsRow;