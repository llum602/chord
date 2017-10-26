import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Create">
        <body styles="background-color:#32516E;">
          <header className="page-header">
            <ul align = "middle">
            <font size = "+2"><a class = "active" styles = "color:#F0F3F4;">Home</a></font>
            <span styles="display:inline-block; width: 200px;"></span>
            <font size = "+2"><a styles = "color:#F0F3F4;">Create</a></font>
            </ul>
          </header> 
          <div className= "block"></div>
            <p align = "right"><a className = "btn btn-lg btn-primary" href = "index.html">Export</a></p>
        </body>
      </div>
    );
  }
}

export default App;
