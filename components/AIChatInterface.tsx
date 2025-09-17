'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, TrendingUp, BarChart3, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface AIChatInterfaceProps {
  variant?: 'withSuggestions' | 'compact';
}

const suggestedQueries = [
  { icon: TrendingUp, text: "What's the outlook for ETH this week?" },
  { icon: BarChart3, text: "Analyze BTC's current support levels" },
  { icon: Zap, text: "Which altcoins show bullish signals?" },
];

export function AIChatInterface({ variant = 'withSuggestions' }: AIChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your AI trading assistant. Ask me about market trends, technical analysis, or any trading questions you have.",
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (message?: string) => {
    const messageText = message || input.trim();
    if (!messageText || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(messageText),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (query: string): string => {
    const responses = [
      "Based on current market conditions and technical indicators, I'm seeing mixed signals. The RSI suggests we might be approaching oversold territory, which could indicate a potential bounce. However, volume has been declining, which is concerning for sustained upward momentum.",
      "Looking at the charts, there's a strong support level around $40,000 for BTC. If we break below that, the next major support is around $35,000. On the upside, resistance is at $45,000. The 50-day MA is acting as dynamic resistance right now.",
      "Several altcoins are showing promising setups. SOL has broken above its 20-day MA with increasing volume. AVAX is forming a bullish flag pattern. However, always remember to manage your risk and never invest more than you can afford to lose.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={cn(
      'card flex flex-col',
      variant === 'compact' ? 'h-96' : 'h-[600px]'
    )}>
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-700">
        <div className="p-2 bg-primary/20 rounded-md">
          <Bot className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-text-primary">AI Trading Assistant</h3>
          <p className="text-sm text-text-secondary">Powered by advanced market analysis</p>
        </div>
        <div className="ml-auto">
          <Sparkles className="h-5 w-5 text-accent animate-pulse-slow" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              'flex gap-3',
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {message.sender === 'ai' && (
              <div className="p-2 bg-primary/20 rounded-full h-fit">
                <Bot className="h-4 w-4 text-primary" />
              </div>
            )}
            <div
              className={cn(
                'max-w-[80%] p-3 rounded-lg',
                message.sender === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-gray-700 text-text-primary'
              )}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
            {message.sender === 'user' && (
              <div className="p-2 bg-gray-700 rounded-full h-fit">
                <User className="h-4 w-4 text-text-primary" />
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="p-2 bg-primary/20 rounded-full h-fit">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <div className="bg-gray-700 p-3 rounded-lg">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {variant === 'withSuggestions' && (
        <div className="p-4 border-t border-gray-700">
          <p className="text-sm text-text-secondary mb-2">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQueries.map((query, index) => (
              <button
                key={index}
                onClick={() => handleSend(query.text)}
                className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-full text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                <query.icon className="h-3 w-3" />
                {query.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about market trends, analysis, or trading strategies..."
            className="input flex-1"
            disabled={isLoading}
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="btn-primary p-2"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
