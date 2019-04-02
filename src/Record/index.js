import React, { Component } from 'react';
import RecStopButton from './RecStopButton.js';
import RecStopButtonInactive from './RecStopButtonInactive.js';
//import classnames from 'classnames';


//// RECORD COMPONENT

class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recActive: false,
      value: ''
    }
  }

  handleRecStopClick(event) {
    this.props.onRecStop();
    // clear Input Field
    this.setState({
      value: ''
    });
  }

  handleChangeInputField(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    if (this.state.value === '') {
      alert('Type in a Song Name first');
    } else {
      // handle current songtitle to parent Function onRecStart
      this.props.onRecStart(this.state.value);
    }
   event.preventDefault();
  }


  render() {
    const recActive = this.props.recActive;
    let recStopButton;
    let styleIdRec;

    if (recActive) {
        recStopButton = <RecStopButton onClick = {(event) => this.handleRecStopClick(event)} />;
        styleIdRec = "button-inactive";
      } else {
        recStopButton = <RecStopButtonInactive/>;
        styleIdRec = "rec-button";
      }

    return(
      <div className="record-container">

        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            className = "songtitle-input"
            placeholder = "name your song"
            type = "text"
            value = {this.state.value}
            onChange = {(event) => this.handleChangeInputField(event)}
          />
          <button
            type = "submit"
            className= "ui-button"
            id = {styleIdRec}
            >record notes
          </button>
        </form>

        {recStopButton}

      </div>
    );
  }
}


export default Record;
