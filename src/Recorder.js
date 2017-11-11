import React, {Component} from 'react';
import {ReactMic} from 'react-mic';
import './App.css';

class Recorder extends Component {
    constructor(props){
        super(props);
        this.state = {
            record: false,
            blobObject: null,
            isRecording: false
        }
    }
  
    startRecording= () => {
        this.setState({
            record: true,
            isRecording: true
        });
    }
  
    stopRecording= () => {
        this.setState({
            record: false,
            isRecording: false
        });
    }
  
    onStart=() => {
        console.log('You can tap into the onStart callback');
    }
  
    onStop= (blobObject) => {
        this.setState({
            blobURL : blobObject.blobURL
        });
        console.log('in savedata')
        var a = document.createElement("a");
        document.body.appendChild(a);
        //a.style = "display: none";  // if not wanting download button
        a.innerHTML = 'ASDFGHJKL'
        a.href = this.state.blobURL;
        a.download = 'testpleasework.webm';
        //a.click();  // automatically downloads
    }
  
    render() {
        const { isRecording } = this.state;
  
        return(
            <div>
                <h1>React-Mic</h1>
                <p><a href="https://github.com/hackingbeauty/react-mic">Documentation</a></p>
                <ReactMic
                    className="oscilloscope"
                    record={this.state.record}
                    backgroundColor="#FF4081"
                    visualSetting="sinewave"
                    audioBitsPerSecond= {128000}
                    onStop={this.onStop}
                    onStart={this.onStart}
                    strokeColor="#000000" />
                <div>
                    <audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio>
                </div>
                <br />
                <br />
                <button
                    className="startStop"
                    secondary={'true'}
                    disabled={isRecording}
                    onClick={this.startRecording}>Start
                </button>
                <button
                    className="startStop"
                    secondary={'true'}
                    disabled={!isRecording}
                    onClick={this.stopRecording}>Stop
                </button>
            </div>
        );
    }
}

export default Recorder;