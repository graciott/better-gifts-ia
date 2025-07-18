import React, { useState } from "react";
import styles from "./ChatDrawer.module.css";
import ChatScreen from "../../pages/Chat/ChatScreen";

const ChatDrawer: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className={`${styles.drawer} ${open ? styles.open : styles.closed}`}>
        <ChatScreen />
        <button
          className={styles.closeBtn}
          onClick={() => setOpen(false)}
          aria-label="Fechar chat"
        >
          ×
        </button>
      </div>
      {!open && (
        <button
          className={styles.openTag}
          onClick={() => setOpen(true)}
          aria-label="Abrir chat"
        >
          💬 Chat
        </button>
      )}
    </>
  );
};

export default ChatDrawer;