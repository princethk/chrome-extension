import React, { useState } from 'react';
import AIIcon from './AIIcon';
import Modal from './Modal';

const MessageInput: React.FC = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFocus = () => setShowIcon(true);
  const handleBlur = () => setShowIcon(false);
  const handleIconClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleInsert = (text: string) => {
    const inputElement = document.querySelector('input[type="text"]');
    if (inputElement) {
      inputElement.value = text;
    }
    setShowModal(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="border border-gray-300 p-2 w-full"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {showIcon && <AIIcon onClick={handleIconClick} />}
      {showModal && <Modal onClose={handleCloseModal} onInsert={handleInsert} />}
    </div>
  );
};

export default MessageInput;
