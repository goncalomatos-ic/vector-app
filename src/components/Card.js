import React from 'react';

class InputJson extends React.Component {
  render() {
    const gif_list = ["https://media.giphy.com/media/55SfA4BxofRBe/giphy.gif",
                      "https://media.giphy.com/media/9oF7EAvaFUOEU/giphy.gif",
                      "https://media.giphy.com/media/eKDp7xvUdbCrC/giphy.gif",
                      "https://media.giphy.com/media/5wWf7GW1AzV6pF3MaVW/giphy.gif",
                      "https://media.giphy.com/media/KYElw07kzDspaBOwf9/giphy.gif",
                      "https://media.giphy.com/media/muGYyrWwxOOMo/giphy.gif",
                      "https://media.giphy.com/media/dEdmW17JnZhiU/giphy.gif",
                      "https://media.giphy.com/media/i79P9wUfnmPyo/giphy.gif",
                      "https://media.giphy.com/media/eMeMQ0Y4DHS2k/giphy.gif",
                      "https://media.giphy.com/media/6wmz6Qo40eTDf4tW3Z/giphy.gif"]

    let overlay_id;

    function escFunction(event){
      if(event.keyCode === 27) {
        if (document.getElementById(overlay_id)){
          document.getElementById(overlay_id).style.display = "none";
        }
      }
    }

    document.addEventListener("keydown", escFunction, false);

    function on(id) {
      overlay_id = id;
      document.getElementById(id).style.display = "block";
    }

    return (
      <div className="Card">
        <h4>{this.props.info.title}</h4>
        <img class="CardImg" src={gif_list[this.props.info.position]} title="Hey Test" alt="Nicolas Cage" onClick={() => on(this.props.info.position)}></img>
        <div className="CardImgOverlayDiv" id={this.props.info.position}>
          <img className="CardImgOverlay" src={gif_list[this.props.info.position]} alt="Nicolas Cage"></img>
        </div>
      </div>
    );
    }
}

export default InputJson;