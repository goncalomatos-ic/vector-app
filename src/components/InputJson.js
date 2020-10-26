import React from 'react';

class InputJson extends React.Component {
  render() {
    return (
      <div>
        <div>
          <textarea id="inputJsonTextArea" defaultValue={this.props.content}/>
        </div>
        <div>
          <input type="submit" value="Save" onClick={this.props.onClickChild}/>
        </div>
    </div>
    );
  }
}

export default InputJson;