import React, { Component } from 'react';
import SongSelect from './SongSelect.js';
import ButtonPlay from './ButtonPlay.js';
import ButtonStop from './ButtonStop.js';



class Playback extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'Select recorded song for Playback',
      playbackActive: 0
    }
  }

  handleSongSelected(event) {
    this.setState({
      value: event.target.value,
      // STOP PLAYBACK IF CURRENTLY RUNNING
      playbackActive: 0
    });
  }

  handleSongPlay() {
    const currentSong = this.props.songList[this.state.value].notesAudio;
    // start playback

    this.setState({
      playbackActive: 1
    });
    
    for (let i = 0; i <= currentSong.length-1; i++) {
      setTimeout(() => {
        if (this.state.playbackActive) {
          currentSong[i].load();  //to prevent missing playback of same consecutive notes
          currentSong[i].play();
          if (i === currentSong.length-1) {
            this.setState({
              playbackActive: 0
            });
          }
        }
      },400*i);  
    }
  }

  handleSongStop() {
    // stop playback
    this.setState({
      playbackActive: 0
    });
    // BREAK OUT OF PLAYBACK LOOP
  }


  render () {

    const playbackActive = this.state.playbackActive;
    const selectedSong = this.state.value;
    let playStopButton;
    let selectedSongNotes;

    // SELECTION IS NOT DEFAULT VALUE?
    if (selectedSong !== 'Select recorded song for Playback') {

      // DISPLAY NOTES OF SELECTED SONG
      selectedSongNotes = <div className="selected-song-notes">{this.props.songList[this.state.value].notes.join(' | ')}</div>;

      // PLAYBACK NOT ACTIVE?
      if (!playbackActive) {
        // SHOW PLAY BUTTON
        playStopButton = <ButtonPlay onPlayClick={() => this.handleSongPlay()}/>;
      } else {
        // SHOW STOP BUTTON
        playStopButton = <ButtonStop onStopClick={() => this.handleSongStop()}/>
      }
    } else {
        // NO BUTTON, NO SONG LIST
        selectedSongNotes = null;
        playStopButton = null;
    }

    return (
      <div>
        <SongSelect
          songList={this.props.songList}
          value={this.state.value}
          onSongSelect={(event) => this.handleSongSelected(event)}
          />
        {selectedSongNotes}
        {playStopButton}
      </div>
    );
  }
}


export default Playback;
