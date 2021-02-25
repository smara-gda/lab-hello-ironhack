import React from 'react'

class Main extends React.Component {
    render() {
        return (
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
      </div> )
    }
}

export default Main;