import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Message.css';

const Message = ({ sender, text }) => {
  return (
    <CSSTransition in={true} timeout={300} classNames="message" appear>
      <div className={`message ${sender.toLowerCase()}`}>
        <div className="message-content">
          <span className="sender">{sender}</span>
          <p>{text}</p>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Message;
