import React, { useState } from 'react';
import Form from './Form'

const Modal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  if (isOpen !== isVisible) {
    setIsVisible(isOpen);
  }

  const closeModal = () => {
    setIsVisible(false);
    onClose();
  };

  return isVisible ? (
    <Form onClose = {closeModal}/>
  ) : null;
};

export default Modal;