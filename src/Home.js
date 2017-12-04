import React from 'react'
import './App.css';
import micLogo from'./chordRecording.png';
import trackLogo from'./chordTracks.png';
import listenLogo from'./chordListen.png';
import { Link } from 'react-router-dom'



const Home = () => (
    <div>
        <div className = "jumbotron">
            <h1 align = "middle">Chord</h1>
            <h3>
                <center>
                    Create simple, multilayer tracks right inside your browser
                </center>
            </h3>	
            <p align = "middle">
                <Link to='/create'>
                    <button className = "btn btn-lg btn-primary">Create</button>
                </Link>
            </p>
        </div>
        <div className="gContainer">
            <div id="bLeft">
                <img src={micLogo} className={"graphic"} alt="Recording logo"/>
            </div>
            <div id="bRight" className="graphicBlock">
                <div className="gp">Record audio tracks separately</div>
            </div>
            <div id="clear"></div>
            <br/>
            <div id="bLeft" className="graphicBlock">
                <div className="gp">Choose which recording to add to your 'track list'</div>
            </div>
            <div id="bRight" className="graphicBlock" align="right">
                <img src={trackLogo} className={"graphic"} alt="Track logo"/>
            </div>
            <div id="clear"></div>
            <br/>
            <div id="bLeft">
                <img src={listenLogo} className={"graphic"} alt="Listen logo"/>
            </div>
            <div id="bRight" className="graphicBlock">
                <div className="gp">Listen to your final track!</div>
            </div>
        </div>
    </div>
)

export default Home