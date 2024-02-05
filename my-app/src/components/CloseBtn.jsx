import React from 'react';

function CloseBtn({ onClose }) {
  return (
    <button className='closeBtn' onClick = {onClose}> 
      Close
    </button>
  );
}

export default CloseBtn;