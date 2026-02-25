const chatForm = document.getElementById('chatForm');
const questionInput = document.getElementById('questionInput');
const chatLog = document.getElementById('chatLog');
const apiKeyInput = document.getElementById('apiKeyInput');
const sendBtn = document.getElementById('sendBtn');
const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById('loginPopup');
const popupLoginBtn = document.getElementById('popupLoginBtn');
const popupCloseBtn = document.getElementById('popupCloseBtn');

let isLoggedIn = false;
let guestQuestionCount = 0;
const flashcardsUrl = 'https://happyboy457scratch-sudo.github.io/FlashcardGen/';

function addMessage(role, text) {
  const bubble = document.createElement('p');
  bubble.className = `message ${role}`;
  bubble.textContent = text;
  chatLog.appendChild(bubble);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function setBusyState(isBusy) {
  sendBtn.disabled = isBusy;
  sendBtn.textContent = isBusy ? 'Thinking…' : 'Send question';
}

function setLoggedIn() {
  isLoggedIn = true;
  loginBtn.textContent = 'Logged in ✓';
  loginBtn.disabled = true;
  loginPopup.hidden = true;
  addMessage('bot', 'Welcome back! You now have unlimited questions.');
}

function showLoginPopup() {
  loginPopup.hidden = false;
}

async function askChatGPT(question, apiKey) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      temperature: 0.4,
      messages: [
        {
          role: 'system',
          content:
            'You are StudyMate AI, a helpful tutor for KS3/KS4 students and UK/US exam boards. Explain clearly, use short steps, include exam technique, and keep answers age-appropriate.'
        },
        {
          role: 'user',
          content: question
        }
      ]
    })
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const message = errorBody?.error?.message || 'Unable to reach the ChatGPT API.';
    throw new Error(message);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim() || 'No response returned.';
}

chatForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const question = questionInput.value.trim();
  if (!question) return;

  if (!isLoggedIn && guestQuestionCount >= 1) {
    showLoginPopup();
    return;
  }

  const lowerQuestion = question.toLowerCase();
  if (lowerQuestion.includes('ask me to create flash cards') || lowerQuestion.includes('create flash cards') || lowerQuestion.includes('create flashcards') || lowerQuestion.includes('flash cards') || lowerQuestion.includes('flashcards')) {
    addMessage('user', question);
    addMessage('bot', `Great idea — use the flashcard generator here: ${flashcardsUrl}`);
    window.open(flashcardsUrl, '_blank', 'noopener,noreferrer');
    questionInput.value = '';

    if (!isLoggedIn) {
      guestQuestionCount += 1;
    }

    return;
  }

  const apiKey = apiKeyInput.value.trim();
  if (!apiKey) {
    addMessage('bot', 'Please enter your OpenAI API key to use ChatGPT responses.');
    return;
  }

  addMessage('user', question);
  questionInput.value = '';

  if (!isLoggedIn) {
    guestQuestionCount += 1;
  }

  setBusyState(true);
  try {
    const reply = await askChatGPT(question, apiKey);
    addMessage('bot', reply);
  } catch (error) {
    addMessage('bot', `ChatGPT API error: ${error.message}`);
  } finally {
    setBusyState(false);
  }
});

loginBtn.addEventListener('click', setLoggedIn);
popupLoginBtn.addEventListener('click', setLoggedIn);
popupCloseBtn.addEventListener('click', () => {
  loginPopup.hidden = true;
});

addMessage('bot', 'Hi! I can help with KS3, KS4 and UK/US exam board questions. Enter your API key and ask your first question. Suggestion: ask me to create flash cards.');
