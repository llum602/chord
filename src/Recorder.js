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
            counter: 0,
            recordings: []
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
        console.log('Now recording...');
    }
  
    onStop= (blobObject) => {
        this.setState({
            blobURL : blobObject.blobURL
        });
        console.log('in savedata')
        var a = document.createElement("a");
        var audio = document.createElement("audio");
        var buttonsDiv = document.getElementById('dl_btns');

        a.className = 'btn btn-primary';
        a.innerHTML = `Download ${this.state.counter}`;
        a.href = this.state.blobURL;
        a.download = `recording${this.state.counter}.webm`;
        a.style = 'margin-right: 3px;'
        buttonsDiv.appendChild(a);

        audio.ref = 'audioSource';
        audio.controls = 'controls';
        audio.src = this.state.blobURL;
        audio.style = 'display: block;'
        buttonsDiv.appendChild(audio)

        this.state.recordings.push(audio); // adds to array of total recordings for playback
        console.log('recordings: ', this.state.recordings)

        buttonsDiv.appendChild(document.createElement('br'));

    }

    playAll = () => {
        console.log('now playing all recordings')
        this.state.recordings.forEach(recording => {
            recording.play();
        });
    }
  
    render() {
        const { isRecording } = this.state;
  
        return(
            <div>
                <ReactMic
                    className="oscilloscope"
                    record={this.state.record}
                    backgroundColor="#05f"
                    visualSetting="sinewave"
                    audioBitsPerSecond= {128000}
                    onStop={this.onStop}
                    onStart={this.onStart}
                    strokeColor="#000000" />

                <div>
                    <p id="totalCounter">{this.state.counter} total recordings</p>
                    {/* <audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio> */}
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
                <button
                    id="stopButton"
                    className="startStop"
                    secondary={'true'}
                    disabled={isRecording}
                    onClick={this.playAll}
                    style={{marginLeft: 25}}>Play All
                </button>
                <br />
                <div id="dl_btns">

                </div>
            </div>
        );
    }
}

export default Recorder;