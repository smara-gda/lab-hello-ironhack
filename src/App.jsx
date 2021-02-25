import React, { Component } from 'react';
// import logo from './logo.svg';
import './index.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-menu"> 
            <img src='./images/menu-top.svg' alt="menu-icon" />
          </div>
          <div className="App-hack-logo">
            <img src='./images/ironhack-logo.svg' alt="ironhack-logo" />
          </div>
          
          <div  className="App-heading"> 
            <h1>
            Say hello to ReactJS.
            </h1>
            <p className="App-dscrp">You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
            <button> Awesome! </button>
          </div>
        </header>

        <div className="App-section-wrapper">
          <div className="App-blocks">
            <img src='./images/icon1.png' alt="description "/>
            <h3>Declarative </h3>
            <p> React makes it painles to create interactive UIs. </p>
          </div>
          <div  className="App-blocks">
            <img src='./images/icon2.png' alt="description "/>
            <h3>Components </h3>
            <p> Build encapsulated components that manage their sate.</p>
          </div>
          <div  className="App-blocks">
            <img src='./images/icon3.png' alt="description "/>
            <h3> Single-Way</h3>
            <p> A set of immutable values are passed to the components</p>
          </div>
          <div  className="App-blocks">
            <img src='./images/icon4.png' alt="description "/>
            <h3> JSX</h3>
            <p> Statically-typed, design to run on modern browsers.</p>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
