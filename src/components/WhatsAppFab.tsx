"use client";
import styles from "./WhatsAppFab.module.css";

const PHONE = process.env.NEXT_PUBLIC_WPP_PHONE || "559985205448";
const MESSAGE = "Olá! Preciso de suporte técnico da Valenet.";

const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

export default function WhatsAppFab() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Falar no WhatsApp"
    >
      <svg
        className={styles.icon}
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M19.1 17.2c-.2-.1-1.2-.6-1.3-.7s-.3-.1-.4.1-.5.7-.6.8-.2.1-.4 0c-.2-.1-.9-.3-1.7-1-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3 0-.1 0-.2 0-.3s-.4-1.1-.6-1.5c-.1-.4-.3-.3-.4-.3h-.3c-.1 0-.3 0-.4.2-.1.2-.6.6-.6 1.5s.6 1.7.7 1.8c.1.1 1.3 2.1 3.1 2.9 1.8.8 1.8.6 2.1.6.3 0 1-.4 1.1-.9.1-.5.1-.9 0-1 0-.1-.2-.1-.4-.2z" fill="currentColor"/>
        <path d="M27.5 15.1c0-6.9-5.6-12.5-12.5-12.5S2.5 8.2 2.5 15.1c0 2.2.6 4.2 1.6 6l-1.1 4.1 4.2-1.1c1.7 1 3.7 1.6 5.8 1.6 6.9 0 12.5-5.6 12.5-12.5zm-12.5 10c-2 0-3.9-.6-5.5-1.6l-.4-.2-2.5.7.7-2.4-.2-.4c-1.1-1.6-1.7-3.6-1.7-5.6 0-5.6 4.6-10.2 10.2-10.2S25.2 9.5 25.2 15.1 20.6 25.1 15 25.1z" fill="currentColor"/>
      </svg>
    </a>
  );
}
