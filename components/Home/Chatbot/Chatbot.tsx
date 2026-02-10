"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Send, Minimize2, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  serviceContext: string;
  serviceTitle: string;
}

export default function Chatbot({
  isOpen,
  onClose,
  serviceContext,
  serviceTitle,
}: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Mensagem inicial do assistente
      setMessages([
        {
          role: "assistant",
          content: `Olá! 👋 Sou o assistente virtual da Archio. Estou aqui para ajudá-lo a entender melhor sobre **${serviceTitle}**. Como posso ajudá-lo hoje?`,
        },
      ]);
    }
  }, [isOpen, serviceTitle, messages.length]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          serviceContext,
          serviceTitle,
          history: messages,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className={`bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ${
          isMinimized
            ? "w-80 h-16"
            : "w-full max-w-2xl h-[600px] md:h-[700px]"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#003964] to-[#005da6] text-white rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
              🤖
            </div>
            <div>
              <h3 className="font-semibold text-lg">Assistente Archio</h3>
              {!isMinimized && (
                <p className="text-xs text-white/80">{serviceTitle}</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              {isMinimized ? (
                <Maximize2 size={20} />
              ) : (
                <Minimize2 size={20} />
              )}
            </button>
            <button
              onClick={onClose}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  } animate-in slide-in-from-bottom-2 fade-in duration-300`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-[#003964] text-white rounded-br-sm"
                        : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {msg.content}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start animate-in slide-in-from-bottom-2 fade-in duration-300">
                  <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003964] focus:border-transparent transition-all"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-[#003964] hover:bg-[#005da6] text-white px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
