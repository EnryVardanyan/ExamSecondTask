import React, { useState } from 'react';
import './App.css'
import Modal from './components/Modal';
import OpenBtn from './components/OpenBtn';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <OpenBtn isOpen={!isModalOpen} onOpen={openModal}/>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;