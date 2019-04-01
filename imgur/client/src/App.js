import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
    }
  }
  handleClick = () => {
    fetch('http://localhost:5001/api/').then( data => data.json())
    .then( res => {
      console.log("^&^&^&^&^&^", res);
      this.setState({
        data: res.text,
      })
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Click to get data</button>
        <div>{this.state.data}</div>
      </div>
    );
  }
}

export default App;
