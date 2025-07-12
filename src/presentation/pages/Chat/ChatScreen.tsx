import { useEffect, useState } from "react";
import SendMessageWithContextUseCase from "../../../domain/usecases/SendMessageWithContextUseCase";
import { ChatMessageInterface } from "../../../data/models/ChatMessageInterface";
import Markdown from "markdown-to-jsx";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ChatScreen.module.css";

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
    <div className={styles.chatContainer}>
      <h2>Chat com Gemini</h2>
      <div className={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`${styles.message} ${styles[msg.role]}`}>
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
        disabled={loading}
        type="text"
      />
      <div className={styles.inputRow}>
        <button onClick={sendMessage} disabled={loading || !input.trim()}>
          Enviar
        </button>
        <button
          onClick={handleRestart}
          className={styles.restartButton}
          type="button"
        >
          Recomeçar
        </button>
      </div>
    </div>
  );
}
