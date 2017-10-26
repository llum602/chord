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
                <h3>
                <li><a href="app.js">Home</a></li>
                <li><a href="create.js">Create</a></li>
                </h3>
              </ul>
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
