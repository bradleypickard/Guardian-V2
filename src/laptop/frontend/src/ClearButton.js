import React from 'react';
import { styled } from '@material-ui/core/styles';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import ToggleButton from '@material-ui/lab/ToggleButton';
import Button from '@material-ui/core/Button';


const buttonStyle = {
  background: 'linear-gradient(45deg, #56CCF2 30%, #2F80ED 90%)',
  //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  border: 0,
  borderRadius: 5,
  color: 'white',
  padding: '0 30px',
  height: 48,
  width: 160,
  //key 4 components to keep things in the middle, the top two allows the bottom two to work
  display: 'flex',
  flexDirection:'column',
  textAlign: 'center', //horizontal cetner
  justifyContent: 'center' // vetical center

}

const clear_data = () => {
  fetch('/clearData', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({'clear':'data'})
  });
};

const ClearButton = () => {
  return (
    <div className="parent">
      <a style={buttonStyle} onClick={() => clear_data()} className="clear">CLEAR</a>
    </div>
  );
};

export default ClearButton;
