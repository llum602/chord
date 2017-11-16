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
            recordings: [],

            recordingsFinal: []
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

        //new
        var b = document.createElement("b");
        var audioFinal = document.createElement("audioFinal");
        var buttonsDivFinal = document.getElementById('dl_btns_final');
        

        var audio = document.createElement("audio");
        var buttonsDiv = document.getElementById('dl_btns');
        

        a.className = 'btn btn-primary';
        a.innerHTML = `Download ${this.state.counter}`;
        a.href = this.state.blobURL;
        a.download = `recording${this.state.counter}.webm`;
        a.style = 'margin-left: 3px;'
        buttonsDiv.appendChild(a);
        //new
        b.className = 'btn btn-primary';
        b.innerHTML = `add`;
        b.href = this.state.blobUrl;
        //b.href = this.state.blobURL.recordingsFinal.push(audioFinal);
        b.style = 'margin-left: 3px;'
        buttonsDiv.appendChild(b);
        
        audioFinal.ref = 'audioSource';
        audioFinal.controls = 'controls';
        audioFinal.src = this.state.blobURL;
        audioFinal.style = 'display: block;'
        buttonsDivFinal.appendChild(audioFinal)


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
                <div align="center">
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
                    <button
                        id="startButton"
                        className="startButton"
                        secondary={'true'}
                        disabled={isRecording}
                        onClick={this.startRecording}>Start
                    </button>
                    <button
                        id="stopButton"
                        className="stopButton"
                        secondary={'true'}
                        disabled={!isRecording}
                        onClick={this.stopRecording}>Stop
                    </button>
                </div>
                <br />

                <button 
                    id="stopButton"
                    className="playAllRec"
                    secondary={'true'}
                    disabled={isRecording}
                    onClick={this.playAll}
                    style={{marginLeft: 25}}>Play All
                </button>

                <br />
                <div className="recordBlock" align="left">
                    <h3>Recordings</h3>
                    <div id="dl_btns">
                    </div>
                </div>
                <div marginLeft="50px">
                    <p id="totalCounter">{this.state.counter} total recordings</p>
                </div>

                <div className="recordFinalBlock" align="left">
                    <h3>Track</h3>
                    <div id="dl_btns_final">
                    </div>
                </div>
            </div>
        );
    }
}

export default Recorder;