import React from 'react';
import '../stylesheets/App.css';
import InputJson from './InputJson'
import CardsList from './CardsList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      content: JSON.stringify([])
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/cards")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(JSON.stringify(result))
          this.setState({
            isLoaded: true,
            content: JSON.stringify(result)
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="App">
        <div className="inputJsonDiv">
          <InputJson content={this.state.content}/>
        </div>
        <div className="imageRowsDiv">
          <CardsList content={this.state.content}/>
        </div>
      </div>
    );
  }
}

export default App;
