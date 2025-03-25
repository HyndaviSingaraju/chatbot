import React, { useState, useRef, useEffect } from 'react';
import Message from '../Message/Message';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Chat.css';

const Chat = ({ addPrompt }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const dummyResponses = [
    "That's interesting! Can you tell me more?",
    "I understand. How does that make you feel?",
    "Let me check that for you...",
    "Could you clarify that further?",
    "Here's what I found about that: ..."
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessage = {
      id: Date.now(),
      sender: 'You',
      text: input.trim()
    };
    
    setMessages(prev => [...prev, newMessage]);
    addPrompt(input.trim());
    
    // Add bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        sender: 'Bot',
        text: dummyResponses[Math.floor(Math.random() * dummyResponses.length)]
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="chat-section">
      <div className="chat-messages">
        <TransitionGroup>
          {messages.map(message => (
            <CSSTransition
              key={message.id}
              timeout={300}
              classNames="message"
            >
              <Message sender={message.sender} text={message.text} />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <div ref={messagesEndRef} />
      </div>
      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default Chat;
