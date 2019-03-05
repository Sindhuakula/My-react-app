import React, { Component } from 'react';
import logo from './versa-logo.png';
import IconClass from './IconClass.js';
import IcoMoon from 'react-icomoon';
import Dropdown from 'react-dropdown';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App col-sm-12 ">
      
        <div className="App-header"> 
        <header>
        <div className="col-sm-10 logo-tag">
          <a
            className="App-link"
            href="https://www.versa-networks.com/"
            target="_parent"
            rel="noopener noreferrer"
          ><img src={logo} className="App-logo" alt="logo" />
          </a></div>
          <div className="tooltip-hover col-sm-2">
          <i><IcoMoon icon="user" />Logout<br />
         <span className='User-details'>username</span></i>
         </div>
        </header>
        
        </div>
        <IconClass />
      </div>
    );
  }
}

export default App;
