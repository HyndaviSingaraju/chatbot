import React, { useState } from 'react';
import Chat from './components/Chat/Chat';
import Prompts from './components/Prompts/Prompts';
import './App.css';

const App = () => {
  const [prompts, setPrompts] = useState([]);
  const [isPromptsOpen, setIsPromptsOpen] = useState(false);

  const togglePrompts = () => {
    setIsPromptsOpen(!isPromptsOpen);
  };

  const addPrompt = (prompt) => {
    setPrompts((prev) => [...prev, prompt]);
  };

  return (
    <div className="app-container">
      <button className="toggle-prompts" onClick={togglePrompts}>
        ☰
      </button>
      <Prompts prompts={prompts} isOpen={isPromptsOpen} />
      <Chat addPrompt={addPrompt} />
    </div>
  );
};

export default App;

