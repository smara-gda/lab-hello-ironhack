import React from 'react';

class Header extends React.Component{

    render(){
        return(
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
        )
    }
}

export default Header;