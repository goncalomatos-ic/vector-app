import React from 'react';
import '../stylesheets/App.css';
import InputJson from './InputJson'
import CardsList from './CardsList'
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      content: JSON.stringify([])
    };
    this.clickAlert = this.clickAlert.bind(this);
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/cards`)
    .then(res => {
      document.getElementById("inputJsonTextArea").value = JSON.stringify(res.data)
      this.setState({
        isLoaded: true,
        content: JSON.stringify(res.data)
      });
    })
  }

  clickAlert(){
    let data = document.getElementById("inputJsonTextArea").value
    data = JSON.parse(data.replace(/\s/g, ""))

    axios.patch(`http://127.0.0.1:8000/cards`, { data })
    .then(res => {
        this.setState({
          isLoaded: true,
          content: JSON.stringify(res.data)
        });
      })
  }

  render() {
    return (
      <div className="App">
        <div className="inputJsonDiv">
          <InputJson content={this.state.content} onClickChild={this.clickAlert}/>
        </div>
        <div className="imageRowsDiv">
          <CardsList content={this.state.content}/>
        </div>
      </div>
    );
  }
}

export default App;
