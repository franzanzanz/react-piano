import React, { Component } from 'react';


class SongSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleChange(event) {
    this.props.onSongSelect(event);
  }

  render () {

      //console.log(this.props.value);

      if (this.props.songList.length > 0){

        const songTitles = this.props.songList.map((song) => {
          return <option key={song.songId} value={song.songId}>{song.title}</option>
        });

        return(
          <select value={this.props.value} onChange={(event) => this.handleChange(event)}>
            <option disabled>Select recorded song for Playback</option>
            {songTitles}
          </select>
        );

      } else {

        // if songList is empty display disabled selector
        return (
          <select defaultValue="" disabled>
            <option>Select recorded song for Playback</option>
          </select>
        );
      }

  }
}


export default SongSelect;
