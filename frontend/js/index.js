const sendBtn = document.getElementById("sendBtn");
const askBtn = document.getElementById("askBtn");

const chatBox = document.getElementById("chatBox");
const linkInput = document.getElementById("link");
const questionInput = document.getElementById("question");
const BACKEND_URL="https://zoological-spontaneity-production-b07d.up.railway.app"
// ----------------------------
// Add AI Message
// ----------------------------
function addAIMessage(message) {

    const div = document.createElement("div");

    div.className = "flex";

    div.innerHTML = `
        <div class="bg-red-100 text-gray-800 rounded-xl px-4 py-3 max-w-[85%] sm:max-w-md shadow">
            ${message}
        </div>
    `;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// ----------------------------
// Add User Message
// ----------------------------
function addUserMessage(message) {

    const div = document.createElement("div");

    div.className = "flex justify-end";

    div.innerHTML = `
        <div class="bg-red-600 text-white rounded-xl px-4 py-3 max-w-[85%] sm:max-w-md shadow">
            ${message}
        </div>
    `;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// ----------------------------
// Loading Bubble
// ----------------------------
function addLoadingMessage() {

    const div = document.createElement("div");

    div.id = "loading";

    div.className = "flex";

    div.innerHTML = `
        <div class="bg-gray-200 rounded-xl px-4 py-3 shadow animate-pulse">
            Thinking...
        </div>
    `;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function removeLoadingMessage() {

    const loading = document.getElementById("loading");

    if (loading) {
        loading.remove();
    }

}

// -----------------------------------------
// Load YouTube Video
// -----------------------------------------

sendBtn.addEventListener("click", async () => {

    const url = linkInput.value.trim();

    if (!url) {
        alert("Please enter a YouTube URL.");
        return;
    }

    sendBtn.disabled = true;
    sendBtn.innerText = "Loading...";

    try {

        const response = await fetch(`${BACKEND_URL}/api/chat`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ url })

        });

        const data = await response.json();

        addAIMessage(data.message);

    }

    catch (err) {

        addAIMessage("❌ Failed to load video.");

    }

    sendBtn.disabled = false;
    sendBtn.innerText = "🚀";

});

// -----------------------------------------
// Ask Question
// -----------------------------------------

askBtn.addEventListener("click", async () => {

    const question = questionInput.value.trim();

    if (!question)
        return;

    addUserMessage(question);

    questionInput.value = "";

    askBtn.disabled = true;
    askBtn.innerText = "Thinking...";

    addLoadingMessage();

    try {

        const response = await fetch(`${BACKEND_URL}/api/question`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ question })

        });

        const data = await response.json();

        removeLoadingMessage();

        addAIMessage(data.answer);

    }

    catch (err) {

        removeLoadingMessage();

        addAIMessage("❌ Something went wrong.");

    }

    askBtn.disabled = false;
    askBtn.innerText = "Ask";

});