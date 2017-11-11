import React, {Component} from 'react';
import {ReactMic} from 'react-mic';
import './App.css';

class Recorder extends Component {
    constructor(props){
        super(props);
        this.state = {
            record: false,
            blobObject: null,
            isRecording: false,
            counter: 0
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
            isRecording: false,
            counter: this.state.counter+1
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
        var stopbutton = document.getElementById('stopButton');
        a.className = 'downloadButton'
        stopbutton.parentNode.insertBefore(a, stopbutton.nextSibling);
        //document.getElementById('stopButton').appendChild(a);
        //a.style = "display: none";  // if not wanting download button
        a.innerHTML = `Download ${this.state.counter}`
        a.href = this.state.blobURL;
        a.download = `recording${this.state.counter}.webm`;
        //a.click();  // automatically downloads
    }
  
    render() {
        const { isRecording } = this.state;
  
        return(
            <div>
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
                    <p id="totalCounter">{this.state.counter} total recordings</p>
                    <audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio>
                </div>

                <br />
                <br />
                <button
                    id="startButton"
                    className="startStop"
                    secondary={'true'}
                    disabled={isRecording}
                    onClick={this.startRecording}>Start
                </button>
                <button
                    id="stopButton"
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