const sendBtn = document.querySelector("#sendBtn");
const messages = document.querySelector("#messages");
const messageInput = document.querySelector("#messageInput");

sendBtn.addEventListener("click", () => {
    const msg = document.createElement("li");
    msg.textContent = messageInput.value;
    msg.style.listStyle = "none";
    messages.appendChild(msg);

    messageInput.value = ""
})