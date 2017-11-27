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
        //var audioFinal = document.createElement("audioFinal");
        //var buttonsDivFinal = document.getElementById('dl_btns_final');     

        var audio = document.createElement("audio");
        var buttonsDiv = document.getElementById('dl_btns');
        

        a.className = 'btn btn-primary';
        a.innerHTML = 'Download';
        a.href = this.state.blobURL;
        a.download = `recording${this.state.counter}.webm`;
        a.style = 'margin-left: 3px;'
        buttonsDiv.appendChild(a);

        b.className = 'btn btn-primary';
        b.innerHTML = `Add`;
        b.href = this.state.blobObject;
        b.onclick = this.addClick;
        //b.href = this.state.blobURL.recordingsFinal.push(audioFinal);
        b.style = 'margin-left: 3px;'
        buttonsDiv.appendChild(b);

        audio.ref = 'audioSource';
        audio.controls = 'controls';
        audio.src = this.state.blobURL;
        audio.style = 'display: block;'
        buttonsDiv.appendChild(audio)

        this.state.recordings.push(audio); // adds to array of total recordings for playback
        console.log('recordings: ', this.state.recordings)

        buttonsDiv.appendChild(document.createElement('br'));

    }

    addClick = (blobObject) => {

        console.log("added"); 
        var audioFinal = document.createElement("audioFinal");  
        var buttonsDivFinal = document.getElementById('dl_btns_final');
        var trackNum = document.createElement("trackNum");

        audioFinal.ref = 'audioSource';
        audioFinal.controls = 'controls';
        //???
        audioFinal.src = this.state.blobObject;
        //
        audioFinal.style = 'display: block;'
        buttonsDivFinal.appendChild(audioFinal)
        
        //testing
        trackNum.className = 'btn btn-primary';
        trackNum.innerHTML = this.state.counter;
        buttonsDivFinal.appendChild(trackNum);

        this.state.recordingsFinal.push(audioFinal);
        console.log("recordings;", this.state.recordingsFinal);
    }

    playAll = () => {
        console.log('now playing all recordings')
        this.state.recordings.forEach(recording => {
            recording.play();
        });
    }

    playTrack = () => {
        console.log('Playing track')
        this.state.recordingsFinal.forEach(recording => {
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
                        backgroundColor="#46515e"
                        visualSetting="sinewave"
                        audioBitsPerSecond= {128000}
                        onStop={this.onStop}
                        onStart={this.onStart}
                        strokeColor="#ffffff" />
                    
                    <div>
                        {/* <audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio> */}
                    </div>
                    <br />
                    <button
                        id="startButton"
                        className="btn btn-danger btn-lg"
                        secondary={'true'}
                        disabled={isRecording}
                        onClick={this.startRecording}> 
                        <span className="glyphicon glyphicon-record"></span> Record
                    </button>
                    <button
                        id="stopButton"
                        className="btn btn-info btn-lg"
                        secondary={'true'}
                        disabled={!isRecording}
                        onClick={this.stopRecording}>
                        <span className="glyphicon glyphicon-stop"></span> Stop
                    </button>
                </div>
                <br />

                <button 
                    id="stopButton"
                    className="btn btn-success btn-lg"
                    secondary={'true'}
                    disabled={isRecording}
                    onClick={this.playAll}
                    style={{marginleft: 15}}>
                    <span className="glyphicon glyphicon-play-circle"></span> Play All
                </button>
                <br />

                <button 
                    id="stopButton"
                    className="btn btn-info btn-lg"
                    secondary={'true'}
                    disabled={isRecording}
                    onClick={this.playTrack}
                    style={{marginleft: 15}}>
                    <span className="glyphicon glyphicon-play-circle"></span> Play Track
                </button>
                <br />

                <div className="block_container">
                    <div id="first">
                        <h3>Recordings</h3>
                        <div id="dl_btns"></div>
                    </div>
                    <div id="second">
                        <h3>Track</h3>
                        <div id="dl_btns_final"></div>
                    </div>
                    <div id="clear"></div>
                    <div marginleft="50px">
                        <p id="totalCounter" style={{marginLeft:15}}>{this.state.counter} total recordings</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recorder;