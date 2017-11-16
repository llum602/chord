import React from 'react'
import './App.css';
import Recorder from './Recorder'

const Create = () => (
  <div className="Create">
    {/* <body styles="background-color:#32516E;"> */}
      <div className= "block">
        <Recorder />
      </div>
      <br /><br /><br />
      <p align = "right"><a className = "btn btn-lg btn-primary" href = "index.html">Export</a></p>
    {/* </body> */}
  </div>
)

export default Create;

/* Immediately have way to layer all recordings at once and playback */
