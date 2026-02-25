const chatForm = document.getElementById("chatForm");
const chatLog = document.getElementById("chatLog");
const questionInput = document.getElementById("questionInput");

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const question = questionInput.value.trim();
  if (!question) return;

  const userMessage = document.createElement("p");
  userMessage.textContent = "You: " + question;
  chatLog.appendChild(userMessage);

  const botMessage = document.createElement("p");
  botMessage.textContent = "StudyMate AI: This is a demo response.";
  chatLog.appendChild(botMessage);

  questionInput.value = "";
});
