import React, { Component } from 'react';
import Record from './Record/index.js';
import PianoKeys from './PianoKeys.js';
import Playback from './Playback/index.js';
import './App.css';


//////// KEY INPUT DATA

const pianoKeyData = [
  {id: 0, name: 'C4', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/C4.mp3')},
  {id: 1, name: 'Db4', classname: 'key-black', audio: new Audio('/grand-piano-mp3-sounds/Db4.mp3')},
  {id: 2, name: 'D4', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/D4.mp3')},
  {id: 3, name: 'Eb4', classname: 'key-black', audio: new Audio('/grand-piano-mp3-sounds/Eb4.mp3')},
  {id: 4, name: 'E4', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/E4.mp3')},
  {id: 5, name: 'F4', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/F4.mp3')},
  {id: 6, name: 'Gb4', classname: 'key-black', audio: new Audio('/grand-piano-mp3-sounds/Gb4.mp3')},
  {id: 7, name: 'G4', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/G4.mp3')},
  {id: 8, name: 'Ab4', classname: 'key-black', audio: new Audio('/grand-piano-mp3-sounds/Ab4.mp3')},
  {id: 9, name: 'A4', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/A4.mp3')},
  {id: 10, name: 'Bb4', classname: 'key-black', audio: new Audio('/grand-piano-mp3-sounds/Bb4.mp3')},
  {id: 11, name: 'B4', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/B4.mp3')},
  {id: 12, name: 'C5', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/C5.mp3')},
  {id: 13, name: 'Db5', classname: 'key-black', audio: new Audio('/grand-piano-mp3-sounds/Db5.mp3')},
  {id: 14, name: 'D5', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/D5.mp3')},
  {id: 15, name: 'Eb5', classname: 'key-black', audio: new Audio('/grand-piano-mp3-sounds/Eb5.mp3')},
  {id: 16, name: 'E5', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/E5.mp3')},
  {id: 17, name: 'F5', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/F5.mp3')},
  {id: 18, name: 'Gb5', classname: 'key-black', audio: new Audio('/grand-piano-mp3-sounds/Gb5.mp3')},
  {id: 19, name: 'G5', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/G5.mp3')},
  {id: 20, name: 'Ab5', classname: 'key-black', audio: new Audio('/grand-piano-mp3-sounds/Ab5.mp3')},
  {id: 21, name: 'A5', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/A5.mp3')},
  {id: 22, name: 'Bb5', classname: 'key-black', audio: new Audio('/grand-piano-mp3-sounds/Bb5.mp3')},
  {id: 23, name: 'B5', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/B5.mp3')},
  {id: 24, name: 'C6', classname: 'key-white', audio: new Audio('/grand-piano-mp3-sounds/C6.mp3')}
];





/// APP COMPONENT - PUTTING IT ALL TOGETHER

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recActive: false,
      songList: [],
    }

    this.currentSongId = 0;
    this.currentSongTitle = '';
    this.currentKeys = [];
    this.currentKeysAudio = [];
  }

  handleKeyPlayed (key, audioObj) {
    this.currentKeys.push(key);
    this.currentKeysAudio.push(audioObj);
    //console.log(this.currentKeys);
  }

  handleRecStop() {
    const song = {
      songId:    this.currentSongId,
      title: this.currentSongTitle,
      notes: this.currentKeys,
      notesAudio: this.currentKeysAudio
    }

    // make a copy of songList array from songList state object and append new song
    const songList = this.state.songList.slice();
    songList.push(song);

    this.setState({
      recActive: false,
      songList: songList
    });

    this.currentSongId++;
  }

  handleRecStart(songTitle) {
    this.setState({
      recActive: true
    });

    // store current song title
    this.currentSongTitle = songTitle;

    // reset arrays currentKeys and currentKeysAudio
    this.currentKeys = [];
    this.currentKeysAudio = [];

  }


  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header>
            <h1>Piano App</h1>
          </header>
          <PianoKeys
            keyArray={pianoKeyData}
            recActive={this.state.recActive}
            onKeyPlayed={(key, audioObj) => this.handleKeyPlayed(key, audioObj)}
            />
          <Record
            recActive={this.state.recActive}
            onRecStop={() => this.handleRecStop()}
            onRecStart={(songTitle) => this.handleRecStart(songTitle)}
            />
          {/**/}
          <Playback
            songList={this.state.songList}
            />
        </div>
      </div>
    );
  }
}


export default App;
