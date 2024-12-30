// Elements
const welcomePage = document.getElementById("welcomePage");
const unlockPage = document.getElementById("unlockPage");
const cardPage = document.getElementById("cardPage");

const userNameInput = document.getElementById("userName");
const startButton = document.getElementById("startButton");

const smileIcon = document.getElementById("smile");
const unlockMessage = document.getElementById("unlockMessage");

const userGreeting = document.getElementById("userGreeting");

// Step 1: Navigate to Unlock Page
startButton.addEventListener("click", () => {
  const userName = userNameInput.value.trim();
  if (userName) {
    userGreeting.textContent = userName;
    welcomePage.classList.add("hidden");
    unlockPage.classList.remove("hidden");
  } else {
    alert("Please enter your name!");
  }
});

// Step 2: Smile Drag and Drop
smileIcon.addEventListener("dragend", (event) => {
  const lock = document.querySelector(".lock");
  const lockRect = lock.getBoundingClientRect();
  if (
    event.clientX > lockRect.left &&
    event.clientX < lockRect.right &&
    event.clientY > lockRect.top &&
    event.clientY < lockRect.bottom
  ) {
    unlockMessage.classList.remove("hidden");
    setTimeout(() => {
      unlockPage.classList.add("hidden");
      cardPage.classList.remove("hidden");
    }, 2000); // Navigate to card page after 2 seconds
  }
});
