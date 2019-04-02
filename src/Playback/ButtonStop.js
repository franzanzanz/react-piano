import React from 'react';
//import classnames from 'classnames';


//// BUTTON COMPONENT - RECORD STOP

function ButtonStop(props) {
  return (
    <button
      className="ui-button"
      id="stop-button"
      onClick={props.onStopClick}>stop
    </button>
  );
}

export default ButtonStop;
