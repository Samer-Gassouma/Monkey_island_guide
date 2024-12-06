'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface MonkeyIslandQA {
  question: string;
  answer: string;
}

// Add environment variable type
declare global {
  interface Window {
    GEMINI_API_KEY: string;
  }
}

interface GeminiResponse {
  candidates?: [{
    content: {
      parts: [{
        text: string;
      }];
    };
  }];
  promptFeedback?: {
    blockReason?: string;
  };
}

export default function VoodooChatball() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const monkeyIslandData: MonkeyIslandQA[] = [
    // Your dataset here
  ];

  const findRelevantAnswer = (query: string): string => {
    const relevantQA = monkeyIslandData.find(qa => 
      qa.question.toLowerCase().includes(query.toLowerCase()) ||
      qa.answer.toLowerCase().includes(query.toLowerCase())
    );

    if (relevantQA) {
      return relevantQA.answer;
    }

    return "Hmm... *swirls crystal ball* The spirits are a bit fuzzy on that one. Try asking about Guybrush's adventures, LeChuck, or the quest for Big Whoop!";
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const askGemini = async (question: string): Promise<string> => {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAJYfTq8t9YPikOzQfNk2pupC96PhQHPBg`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are a chatbot to assess users' knowledge of Monkey Island 2. Answer this question in clear direct way without any hints or clues: ${question}`
              }]
            }]
          })
        }
      );

      const data: GeminiResponse = await response.json();

      if (data.promptFeedback?.blockReason) {
        return "The spirits are troubled... Perhaps we should ask a different question?";
      }

      if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
        return findRelevantAnswer(question); // Fallback to dataset
      }

      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error calling Gemini:', error);
      return findRelevantAnswer(question); // Fallback to dataset on error
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (!isExpanded) {
      setIsExpanded(true);
    }

    const userMessage: Message = {
      content: input,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const answer = await askGemini(input);
      
      const assistantMessage: Message = {
        content: answer,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        content: "The crystal ball is clouded... Perhaps we should try again later.",
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 w-96">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-purple-900/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border border-purple-500/30"
      >
        <div 
          className="text-center mb-4 flex justify-between items-center cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="text-purple-300 text-lg font-semibold">Voodoo Vision</span>
          <motion.button
            animate={{ rotate: isExpanded ? 0 : 180 }}
            className="text-purple-300 hover:text-purple-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Messages Container */}
              <div className="h-96 overflow-y-auto mb-4 p-4 bg-purple-950/50 rounded-xl custom-scrollbar">
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
                    >
                      <div
                        className={`inline-block p-3 rounded-2xl ${
                          message.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-purple-700/60 text-purple-100'
                        }`}
                      >
                        {message.content}
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-purple-300"
                    >
                      <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-.3s]" />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-.5s]" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask the Voodoo Lady..."
                  className="w-full bg-purple-800/30 text-purple-100 placeholder-purple-300/50 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-500 text-white p-2 rounded-lg transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
} 