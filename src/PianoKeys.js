import React, { Component } from 'react';
import classnames from 'classnames';


//// PIANO KEY COMPONENT

class PianoKeys extends Component {

  handleMouseDownKey(id, keyname, audio) {
    // consecutive same key pushes restart audio
    audio.load();
    audio.play();

    if(this.props.recActive) {
      this.props.onKeyPlayed(keyname, audio);
    }
  }

  render() {

    let keys = this.props.keyArray.map((keyArray) => {
        return <button
          key={keyArray.id}
          className={classnames('key', keyArray.classname)}
          onMouseDown={() => this.handleMouseDownKey(keyArray.id, keyArray.name, keyArray.audio)}>
        </button>
    });

    return(
      <div className="piano-container">
        {keys}
      </div>
    );
  }
}

export default PianoKeys;
