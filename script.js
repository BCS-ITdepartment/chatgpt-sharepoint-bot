document.getElementById("send-btn").addEventListener("click", async () => {
  const input = document.getElementById("user-input").value;
  const chatBox = document.getElementById("chat-box");

  chatBox.innerHTML += `<div class="user-msg">${input}</div>`;

  // Placeholder (you'll replace this with an API call later)
  const reply = "🤖 This is where ChatGPT’s reply will appear.";
  chatBox.innerHTML += `<div class="bot-msg">${reply}</div>`;

  document.getElementById("user-input").value = "";
});
