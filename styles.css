:root {
  color-scheme: dark;
  --bg: #0b1120;
  --card: #121b32;
  --text: #e2e8f0;
  --muted: #93a4c2;
  --primary: #60a5fa;
  --accent: #818cf8;
  --border: #293550;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, "Segoe UI", Roboto, Arial, sans-serif;
  background: radial-gradient(circle at top, #172554, var(--bg) 50%);
  color: var(--text);
  line-height: 1.5;
}

.hero,
main { width: min(1040px, 92%); margin: 0 auto; }

.hero {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: start;
  padding: 2.5rem 0 1.2rem;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.75rem;
  color: var(--primary);
  margin: 0;
}

h1 { margin: 0.3rem 0; font-size: clamp(1.8rem, 3vw, 2.6rem); }

.subtitle { max-width: 70ch; margin: 0; color: var(--muted); }

.login-btn,
.chat-form button,
.popup-actions button {
  border: 0;
  border-radius: 0.6rem;
  padding: 0.7rem 1rem;
  font-weight: 600;
  cursor: pointer;
}

.login-btn,
.chat-form button,
.popup-actions .primary {
  background: linear-gradient(130deg, var(--primary), var(--accent));
  color: #0f172a;
}

.chat-form button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

main {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 1.2rem;
  padding-bottom: 2.5rem;
}

.subjects-card,
.chat-card {
  background: color-mix(in oklab, var(--card), #000 8%);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.1rem;
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.25);
}

h2 { margin: 0; font-size: 1.2rem; }

.subjects-grid {
  margin: 0.75rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.subjects-grid li {
  background: #1a2746;
  border-radius: 0.5rem;
  padding: 0.45rem 0.6rem;
  font-size: 0.92rem;
}

.hint { margin-top: 0.4rem; color: var(--muted); }

.chat-log {
  min-height: 280px;
  max-height: 340px;
  overflow: auto;
  border: 1px solid var(--border);
  border-radius: 0.8rem;
  padding: 0.8rem;
  margin-bottom: 0.75rem;
  background: #0e162e;
}

.message {
  padding: 0.55rem 0.7rem;
  border-radius: 0.7rem;
  width: fit-content;
  max-width: 90%;
  margin: 0 0 0.65rem;
  white-space: pre-wrap;
}

.message.user { margin-left: auto; background: #25304f; }
.message.bot { background: #1a2746; }

.chat-form { display: grid; gap: 0.65rem; }

textarea {
  width: 100%;
  resize: vertical;
  min-height: 70px;
  border: 1px solid var(--border);
  background: #0e162e;
  color: var(--text);
  border-radius: 0.7rem;
  padding: 0.65rem;
  font: inherit;
}

.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.65);
  display: grid;
  place-items: center;
  padding: 1rem;
}

.popup-card {
  width: min(460px, 100%);
  background: #121b32;
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1rem;
}

.popup-card h3 { margin-top: 0; }

.popup-actions {
  display: flex;
  justify-content: end;
  gap: 0.55rem;
}

.popup-actions .secondary {
  background: #293550;
  color: var(--text);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}

@media (max-width: 900px) {
  main { grid-template-columns: 1fr; }
}

[hidden] { display: none !important; }
