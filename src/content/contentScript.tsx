import React from 'react';
import ReactDOM from 'react-dom';
import MessageInput from '../components/MessageInput';

const linkedInMessageInput = document.querySelector('.msg-form__contenteditable');

if (linkedInMessageInput) {
  const wrapper = document.createElement('div');
  linkedInMessageInput.appendChild(wrapper);
  ReactDOM.render(<MessageInput />, wrapper);
}
