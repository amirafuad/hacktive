const chatBox = document.getElementById("chat-box");

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = sender;
  msg.textContent = `${sender}: ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Send text message
async function sendText() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  addMessage("You", message);
  input.value = "";

  const res = await fetch("/chat/text", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await res.json();
  addMessage("Bot", data.reply || "No response");
}

// Send file (document, image, or audio)
async function sendFile() {
  const fileInput = document.getElementById("file-input");
  const fileType = document.getElementById("file-type").value;
  const file = fileInput.files[0];
  if (!file) {
    alert("Please select a file");
    return;
  }

  const formData = new FormData();
  formData.append(fileType, file); // backend expects "document", "image", "audio"

  const endpoint =
    fileType === "document"
      ? "/generate-from-document"
      : fileType === "image"
      ? "/generate-from-image"
      : "/generate-from-audio";

  const res = await fetch(endpoint, {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  addMessage("Bot", data.result || "No response");

  fileInput.value = ""; // reset file input
}
