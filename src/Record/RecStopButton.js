import React from 'react';
//import classnames from 'classnames';


//// BUTTON COMPONENT - RECORD STOP

function RecStopButton(props) {
  return (
    <button
      className="ui-button"
      id="rec-stop-button"
      onClick={props.onClick}>stop rec
    </button>
  );
}

export default RecStopButton;
