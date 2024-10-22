import React, { useState } from 'react';

interface ModalProps {
  onClose: () => void;
  onInsert: (text: string) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onInsert }) => {
  const [command, setCommand] = useState<string>('');
  const staticResponse = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";

  const handleGenerate = () => {
    setCommand(staticResponse);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Generate Response</h2>
        <input
          type="text"
          className="border border-gray-300 p-2 w-full mb-4"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleGenerate}>
            Generate
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => onInsert(command)}>
            Insert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
