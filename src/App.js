import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bgColor">
          <body styles="background-color:#32516E">
            <header className="page-header">
              <ul align = "middle">
                <font size = "+2"><a className = "active" styles = "color:#F0F3F4;">Home</a></font>
                <span styles="display:inline-block; width: 200px;"></span>
                <font size = "+2"><a styles = "color:#F0F3F4;">Create</a></font>
              </ul>
              {/*<img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
              <span styles="display:inline;">
              <h1 align="left">
              <font size="6"><a styles="color:#F0F3F4;">Home</a></font>
              </h1>
              <h1 align="right">
              <font size="6"><a styles="color:#F0F3F4;">Create</a></font>
              </h1>
              <hr styles = "clear:both;"/>
              </span>
              */}
            </header> 
          <div className = "jumbotron">
            <h1 align = "middle">Chord</h1>
            <h3><center>
            Create simple, multilayer tracks right inside your browser
            </center>
            </h3>	
            <p align = "middle"><a className = "btn btn-lg btn-primary" href="Create.js">Create</a></p>
          </div>
          {/*<p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>*/}
          </body>
         </div>
      </div>
    );
  }
}

export default App;
