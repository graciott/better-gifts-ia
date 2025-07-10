import React, { useState } from "react";
import SendMessageWithContextUseCase from "../../domain/usecases/SendMessageWithContextUseCase";
import { ChatMessageInterface } from "../../data/models/ChatMessageInterface";

const useCase = new SendMessageWithContextUseCase();

export default function ChatScreen() {
  const [messages, setMessages] = useState<ChatMessageInterface[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      { role: "user", content: input } as ChatMessageInterface,
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const response = await useCase.execute(newMessages);
      setMessages([...newMessages, { role: "model", content: response }]);
    } catch (e) {
      console.error(e);
      setMessages([
        ...newMessages,
        { role: "model", content: "Erro ao responder." },
      ]);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2>Chat com Gemini</h2>
      <div
        style={{
          minHeight: 300,
          border: "1px solid #ccc",
          padding: 16,
          marginBottom: 16,
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{ textAlign: msg.role === "user" ? "right" : "left" }}
          >
            <b>{msg.role === "user" ? "Você" : "Gemini"}:</b> {msg.content}
          </div>
        ))}
        {loading && <div>Enviando...</div>}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Digite sua mensagem..."
        style={{ width: "80%", marginRight: 8 }}
        disabled={loading}
      />
      <button onClick={sendMessage} disabled={loading || !input.trim()}>
        Enviar
      </button>
    </div>
  );
}
