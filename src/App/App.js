import React, { Component } from 'react';
import './App.scss';
import Grouping from "../components/Grouping"
import Students from "../components/Students"

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Grouping />
        <Students />
      </div>
    );
  }
}

export default App;
