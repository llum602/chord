import React from 'react'
import './App.css';
import Recorder from './Recorder'

const Create = () => (
  <div className="Create">
    {/* <body styles="background-color:#32516E;"> */}
      <div className= "block" align="left">
        <Recorder />
      </div>
      <br /><br /><br />
      <p align = "right"><a className = "btn btn-lg btn-primary" href = "index.html">Export</a></p>
    {/* </body> */}
  </div>
)

export default Create

/* Immediately have way to layer all recordings at once and playback */





{/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Create">
        <body styles="background-color:#32516E;">
          <header className="page-header">
              <ul align = "middle">
                <h3>
                <li><a href="app.js">Home</a></li>
                <li><a href="create.js">Create</a></li>
                </h3>
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
*/}
