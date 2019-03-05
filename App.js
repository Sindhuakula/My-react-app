import React, { Component } from 'react';
import logo from './versa-logo.png';
import IconClass from './IconClass.js';
import IcoMoon from 'react-icomoon';
import Dropdown from 'react-dropdown';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <header className="App-header"> 
          <a
            className="App-link"
            href="https://www.versa-networks.com/"
            target="_parent"
            rel="noopener noreferrer"
          ><img src={logo} className="App-logo" alt="logo" />
          </a>
         
        <a href="#"><i className='User-details'><IcoMoon icon="user" />Logout</i></a>
        </header>
        <IconClass />
        </div>
      </div>
    );
  }
}

export default App;
