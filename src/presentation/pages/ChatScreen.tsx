import { useEffect, useState } from "react";
import SendMessageWithContextUseCase from "../../domain/usecases/SendMessageWithContextUseCase";
import { ChatMessageInterface } from "../../data/models/ChatMessageInterface";
import Markdown from "markdown-to-jsx";
import { useLocation, useNavigate } from "react-router-dom";

const useCase = new SendMessageWithContextUseCase();

export default function ChatScreen() {
  const [messages, setMessages] = useState<ChatMessageInterface[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const message = location.state?.message;

  console.log("ChatScreen rendered", message);

  useEffect(() => {
    if (message) {
      setMessages([
        {
          role: "model",
          content:
            typeof message === "string" ? message : JSON.stringify(message),
        },
      ]);
    }
  }, [message]);

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

  const handleRestart = () => {
    navigate("/form-wizard");
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
            <b>{msg.role === "user" ? "Você" : "Gemini"}:</b>
            <Markdown>{msg.content}</Markdown>
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
      <button
        onClick={handleRestart}
        style={{ marginLeft: 8, background: "#eee", color: "#333" }}
      >
        Recomeçar
      </button>
    </div>
  );
}
