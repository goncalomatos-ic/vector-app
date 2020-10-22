import React from 'react';
import Card from './Card'

class CardsList extends React.Component {
  render() {
    const items = []
    const json_content = JSON.parse(this.props.content)

    for (var key in json_content) {
      items.push(<Card />)
    }

    return (
      <div>
        {items}
      </div>
    );
    }
}

export default CardsList;