import React from 'react';

function OpenBtn({ onOpen }) {
  return (
    <button className='openBtn' onClick = {onOpen}> 
      Open Modal
    </button>
  );
}

export default OpenBtn;