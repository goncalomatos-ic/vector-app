import React from 'react';
import '../stylesheets/App.css';
import InputJson from './InputJson'
import CardsList from './CardsList'

class App extends React.Component {
  getContent(){
    return JSON.stringify([
      {"type": "bank-draft", "title": "Bank Draft", "position": 0},
      {"type": "bill-of-lading", "title": "Bill of Lading","position": 1 },
      {"type": "invoice", "title": "Invoice","position": 2},
      {"type": "bank-draft-2", "title": "Bank Draft2", "position": 3},
      {"type": "bill-of-lading-2", "title":"Bill of Lading 2", "position": 4}
    ], null, 2)
  }

  render() {
    return (
      <div className="App">
        <div className="inputJsonDiv">
          <InputJson content={this.getContent()}/>
        </div>
        <div className="imageRowsDiv">
          <CardsList content={this.getContent()}/>
        </div>
      </div>
    );
  }
}

export default App;
