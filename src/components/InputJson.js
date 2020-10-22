import React from 'react';

class InputJson extends React.Component {
  render() {
    return (
      <div>
        <div>
          <textarea defaultValue={this.props.content}/>
        </div>
        <div>
          <input type="submit" value="Save" />
        </div>
    </div>
    );
  }
}

export default InputJson;