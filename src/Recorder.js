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

            recordingsFinal: [],
            addCounter: 0,
            blobObjectFinal: null
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
        var b = document.createElement("b");
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

    addClick = (clickEvent) => {
        console.log(clickEvent)
        console.log(clickEvent.srcElement.nextSibling.src)//.firstElementChild.nextElementSibling.nextElementSibling.currentSrc)
        console.log("added"); 
        //addCounter : this.state.addCounter+1
        var audioFinal = document.createElement("audio");  
        var buttonsDivFinal = document.getElementById('dl_btns_final');
        var trackNum = document.createElement("trackNum");

        var c = document.createElement("c");
        var ifDeleted = false;

        //trackNum.className = 'btn btn-primary';
        //trackNum.style = 'padding-top: 50px';
        trackNum.innerHTML = "Track " + (this.state.recordingsFinal.length+1) + " ";
        buttonsDivFinal.appendChild(trackNum);

        c.className = 'btn btn-danger btn-sm';
        c.innerHTML = 'Delete'; 
        c.style = 'margin-left: 3px;'
        buttonsDivFinal.appendChild(c);
        ifDeleted = this.deleteTrack; 
            c.onclick = function(){
                console.log("Deletingg"); 
                buttonsDivFinal.removeChild(audioFinal); 
                buttonsDivFinal.removeChild(trackNum); 
                buttonsDivFinal.removeChild(c); 
                ifDeleted();
                console.log(ifDeleted);
            }
        
        /**
        c.onclick = function(){
            console.log("Deletingg"); 
            //console.log("TN" + this.state.recordingsFinal.length-1);
            //this.state.recordingsFinal.splice(0,1);
            c.deleteTrack;
            buttonsDivFinal.removeChild(audioFinal); 
            buttonsDivFinal.removeChild(trackNum); 
            buttonsDivFinal.removeChild(c); 
        } */
        
        audioFinal.ref = 'audioSource';
        audioFinal.controls = 'controls';
        audioFinal.src = clickEvent.srcElement.nextSibling.src;
        audioFinal.style = 'display: block; margin-bottom: 15px;'
        buttonsDivFinal.appendChild(audioFinal)
        console.log(audioFinal)

        this.state.recordingsFinal.push(audioFinal);
        console.log("recordings;", this.state.recordingsFinal);
        
    }

    deleteControls(x, y, z, p) {
        x.removeChild(z);
        x.removeChild(p); 
        x.removeChild(y);
    }

    deleteTrack = () => {
        console.log("Deleting track");
        this.state.recordingsFinal.splice(this.state.recordingsFinal.length-1,1);
        console.log("recordings new;", this.state.recordingsFinal);
        return true;
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
                        className="btn btn-default btn-lg"
                        secondary={'true'}
                        disabled={!isRecording}
                        onClick={this.stopRecording}>
                        <span className="glyphicon glyphicon-stop"></span> Stop
                    </button>
                </div>
                <br />

                <div align="left">
                    <div id="bLeft">
                        <button 
                            id="stopButton"
                            className="btn btn-info btn-sm"
                            secondary={'true'}
                            disabled={isRecording}
                            onClick={this.playAll}
                            style={{marginleft: 15}}>
                            <span className="glyphicon glyphicon-play-circle"></span> Play All
                        </button>
                    </div>
                    <div id="bRight">
                        <button 
                            id="stopButton"
                            className="btn btn-info btn-sm"
                            secondary={'true'}
                            disabled={isRecording}
                            onClick={this.playTrack}
                            style={{marginleft: 15}}>
                            <span className="glyphicon glyphicon-play-circle"></span> Play Tracks
                        </button>
                    </div>
                    <div id="clear"></div>
                </div>

                <div className="block_container">
                    <div id="first">
                        <h3>Recordings</h3>
                        <div id="dl_btns"></div>
                    </div>
                    <div id="second">
                        <h3>Tracks</h3>
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