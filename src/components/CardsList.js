import React from 'react';
import CardRow from './CardRow';

class CardsList extends React.Component {
  getCardRows(){
    const items = []
    const json_content = JSON.parse(this.props.content).sort(function (a, b) {return a.position - b.position;});
    let cards = []

    // Sort cards by the position attribute and split cards rows every 3 elements
    for (var index in json_content) {
      cards.push(json_content[index])
      if (cards.length === 3 && index > 0) {
        items.push(<CardRow key={index.toString()} cards={cards}/>)
        cards = []
      }
    }

    if (cards.length > 0){
      items.push(<CardRow key={index.toString()} cards={cards}/>)
    }

    return items
  }

  render() {
    return (
      <div>
        {this.getCardRows()}
      </div>
    );
  }
}

export default CardsList;