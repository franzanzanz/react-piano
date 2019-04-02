import React from 'react';
//import classnames from 'classnames';


//// BUTTON COMPONENT - RECORD STOP

function ButtonPlay(props) {
  return (
    <button
      className="ui-button"
      id="play-button"
      onClick={props.onPlayClick}>play song
    </button>
  );
}

export default ButtonPlay;
