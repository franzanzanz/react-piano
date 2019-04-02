import React, { Component } from 'react';


///// SONG LIST COMPONENT

class SongList extends Component {

  render() {

    //console.log(this.props.songList);

    if (this.props.songList){

      const songList = this.props.songList.map((song, index) => {
        return <li key={index}><strong>{song.title}</strong><br/>{song.notes.join(' | ')}</li>
      });

      return(
        <div className="songlist-container">
          <h2>Transcripted Songs:</h2>
          <ul>
            {songList}
          </ul>
        </div>
      );

    } else {
      // if songList is empty return nothing
      return null
    }

  }
}

export default SongList;
