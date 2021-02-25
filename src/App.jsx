import React, { Component } from 'react';
// import logo from './logo.svg';
import './index.css';
import './App.css';
import Main from './Main.jsx'
import Header from './Header.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Main />
      </div>
    );
  }
}

export default App;
