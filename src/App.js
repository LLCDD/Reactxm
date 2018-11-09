import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Action from './redux/Action';
import Store from './redux/Store';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      arr:Store.getState()
    }
  }
  render() {
    console.log(this.state.arr)
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
