import React from 'react';

class InputJson extends React.Component {
  render() {
    return (
      <div className="Card">
        <h4>{this.props.info.title}</h4>
        <img src="https://i.imgur.com/Vvhvljv.gif" title="Hey Test" alt="Nicolas Cage"></img>
      </div>
    );
    }
}

export default InputJson;