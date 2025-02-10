import React, { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { TbMessageChatbotFilled } from "react-icons/tb"
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm a chatbot. How can I help you today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState('');

  // Sample responses - in a real app, you'd integrate with a chatbot API
  const getBotResponse = (userMessage) => {
    const responses = {
      "hi": "Hello! How can I assist you?",
      "hello": "Hi there! What can I help you with?",
      "who are you": "I'm a chatbot designed to help visitors to this portfolio.",
      "what can you do": "I can answer questions about the portfolio owner's skills, projects, and experience.",
      "default": "I understand your message. In a real implementation, this would be connected to a chatbot service."
    };

    const lowercaseMessage = userMessage.toLowerCase();
    return responses[lowercaseMessage] || responses.default;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = { text: inputText, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    // Get and add bot response
    setTimeout(() => {
      const botResponse = { text: getBotResponse(inputText), isBot: true };
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInputText('');
  };

  return (
    <div className="fixed bottom-16 right-4">
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
       className="bottom-15 right-4 bg-yellow-300 text-gray-800 p-3 rounded-full mb-1 shadow-lg transition duration-300"
      >
        {isOpen ? <IoIosCloseCircle className='text-2xl'/> : <TbMessageChatbotFilled className='text-2xl'/>}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          {/* Header */}
          <div className="bg-yellow-300 text-gray-800 p-4 rounded-t-lg">
            <h3 className='font-bold'>Chat with Chanidu</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-yellow-300 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input form */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-yellow-300 text-gray-800 px-4 rounded-lg hover:bg-yellow-400 font-medium"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;