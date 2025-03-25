// Inside src/components/Prompts/Prompts.js
const dummyPrompts = [
    "What's the weather like?",
    "Tell me a joke",
    "How do I reset my password?",
    "What's your return policy?",
    "Recommend a good book"
  ];
  
  const Prompts = ({ isOpen, onPromptSelect }) => {
    return (
      <div className={`prompts-section ${isOpen ? 'open' : ''}`}>
        <h3>Quick Prompts</h3>
        <div className="prompts-grid">
          {dummyPrompts.map((prompt, index) => (
            <button
              key={index}
              className="prompt-card"
              onClick={() => onPromptSelect(prompt)}
            >
              {prompt}
            </button>
          ))}
        </div>
        <h4>Recent Chats</h4>
        {/* Recent prompts list here */}
      </div>
    );
  };
  