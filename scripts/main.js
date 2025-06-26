import { passages } from './data/passages.js';
import { speak, loadVoices } from './utils/speech.js';

// Game State
export const state = {
  currentCategory: "general",
  currentPassageIndex: 0,
  score: 0,
  stars: 0,
  hintUsage: {},
  selectedWord: null,
  timeLeft: 60,
  timerInterval: null,
  challengeMode: true,
  level: "Apprentice",
  isFlatArray: false,
  achievements: [],
};

// DOM Elements
const passageText = document.getElementById("passage-text");
const wordBox = document.getElementById("word-box");
const feedbackDisplay = document.getElementById("feedback");
const submitBtn = document.getElementById("submit-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const hintBtn = document.getElementById("hint-btn");
const clearBtn = document.getElementById("clear-btn");
const shareBtn = document.getElementById("share-btn");
const readPassageBtn = document.getElementById("read-passage-btn");
const resetWordsBtn = document.getElementById("reset-words-btn");
const categorySelect = document.getElementById("vocab-category");
const timerSetting = document.getElementById("timer-setting");
const voiceSelect = document.getElementById("voice-select");
const toggleDyslexia = document.getElementById("toggle-dyslexia");
const textSizeSlider = document.getElementById("text-size-slider");
const themeSelect = document.getElementById("theme-select");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const progress = document.getElementById("progress");
const scoreDisplay = document.getElementById("score");
const starsDisplay = document.getElementById("stars");
const timerDisplay = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const timerBar = document.getElementById("timer-bar");
const levelDisplay = document.getElementById("level");
const achievementsDisplay = document.getElementById("achievements");
const tutorialModal = document.getElementById("tutorial-modal");
const tutorialCloseBtn = document.getElementById("tutorial-close-btn");
const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");

const intros = [
  "Expand your word knowledge!",
  "Master new vocabulary!",
  "Challenge your language skills!",
];

// Utility Functions
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function updateStatus() {
  const total = passages[state.currentCategory].length;
  progress.textContent = `Passage ${state.currentPassageIndex + 1}/${total}`;
  scoreDisplay.textContent = `Score: ${state.score}`;
  starsDisplay.textContent = `Stars: ${"★".repeat(state.stars)}${"☆".repeat(3 - state.stars)}`;
  timerDisplay.textContent = `Time: ${state.timeLeft}s`;
  progressBar.style.width = `${((state.currentPassageIndex + 1) / total) * 100}%`;
  levelDisplay.textContent = `Level: ${state.level}`;
  achievementsDisplay.textContent = `Achievements: ${state.achievements.join(", ")}`;
}

function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  const duration = parseInt(timerSetting.value) || 0;
  if (duration === 0) {
    timerDisplay.textContent = "Time: Off";
    timerBar.style.width = "100%";
    return;
  }
  state.timeLeft = duration;
  timerBar.style.width = "100%";
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    timerDisplay.textContent = `Time: ${state.timeLeft}s`;
    timerBar.style.width = `${(state.timeLeft / duration) * 100}%`;
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      checkAnswers(true);
    }
  }, 1000);
}

// Display Passage
function displayPassage() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  const passage = passages[state.currentCategory][state.currentPassageIndex];
  let processedText = passage.text;
  
  // Process clue words
  if (passage.clueWords) {
    passage.clueWords.forEach((clues, index) => {
      const blankNum = index + 1;
      clues.forEach(clue => {
        const regex = new RegExp(`\\b${clue}\\b`, "gi");
        processedText = processedText.replace(regex, `<span class="keyword keyword-${blankNum}" title="Clue for blank ${blankNum}">${clue}</span>`);
      });
    });
  }

  // Replace blanks
  processedText = processedText.replace(/___\((\d)\)___/g, (_, num) => {
    return `<span class="blank-container"><span class="blank" data-blank="${num}" tabindex="0">_</span><button class="hint-for-blank" data-blank="${num}" aria-label="Hint for blank ${num}">💡</button></span>`;
  });

  passageText.innerHTML = processedText;
  wordBox.innerHTML = shuffle(passage.wordBox).map(word => `<div class="word" draggable="true" tabindex="0">${word}</div>`).join("");
  feedbackDisplay.textContent = intros[state.currentPassageIndex % intros.length];
  setupPassageInteractions();
  startTimer();
  updateStatus();
}

// Setup Interactions
function setupPassageInteractions() {
  const words = document.querySelectorAll(".word");
  const blanks = document.querySelectorAll(".blank");

  words.forEach(word => {
    word.addEventListener("dragstart", (e) => e.dataTransfer.setData("text", word.textContent));
    word.addEventListener("click", () => {
      state.selectedWord = word;
      words.forEach(w => w.classList.remove("selected"));
      word.classList.add("selected");
    });
  });

  blanks.forEach(blank => {
    blank.addEventListener("dragover", (e) => e.preventDefault());
    blank.addEventListener("drop", (e) => {
      e.preventDefault();
      const word = e.dataTransfer.getData("text");
      placeWord(blank, word);
    });
    blank.addEventListener("click", () => {
      if (state.selectedWord) {
        placeWord(blank, state.selectedWord.textContent);
        state.selectedWord = null;
        words.forEach(w => w.classList.remove("selected"));
      }
    });
  });

  document.querySelectorAll(".keyword").forEach(keyword => {
    keyword.addEventListener("click", function() {
      const blankNum = this.className.match(/keyword-(\d+)/)[1];
      const hintIndex = parseInt(blankNum) - 1;
      const hint = passages[state.currentCategory][state.currentPassageIndex].hints[hintIndex];
      feedbackDisplay.textContent = hint;
      feedbackDisplay.style.color = "blue";
      speak(hint);
    });
  });

  document.querySelectorAll(".hint-for-blank").forEach(button => {
    button.addEventListener("click", function() {
      const blankNum = this.getAttribute("data-blank");
      const hintIndex = parseInt(blankNum) - 1;
      const hint = passages[state.currentCategory][state.currentPassageIndex].hints[hintIndex];
      feedbackDisplay.textContent = hint;
      feedbackDisplay.style.color = "blue";
      speak(hint);
      document.querySelectorAll(`.keyword-${blankNum}`).forEach(el => el.classList.add("highlighted"));
      setTimeout(() => document.querySelectorAll(`.keyword-${blankNum}`).forEach(el => el.classList.remove("highlighted")), 3000);
      state.hintUsage[state.currentPassageIndex] = (state.hintUsage[state.currentPassageIndex] || 0) + 1;
    });
  });
}

function placeWord(blank, wordText) {
  blank.textContent = wordText;
  checkAnswer(blank);
}

function checkAnswer(blank) {
  const passage = passages[state.currentCategory][state.currentPassageIndex];
  const blankNum = parseInt(blank.getAttribute("data-blank")) - 1;
  const isCorrect = blank.textContent.toLowerCase() === passage.answers[blankNum].toLowerCase();
  blank.classList.toggle("correct", isCorrect);
  blank.classList.toggle("incorrect", !isCorrect);
  feedbackDisplay.textContent = isCorrect ? "Correct!" : "Try again!";
  feedbackDisplay.style.color = isCorrect ? "green" : "red";
  if (isCorrect) correctSound.play();
  else incorrectSound.play();
}

function checkAnswers(isAutoSubmit = false) {
  const passage = passages[state.currentCategory][state.currentPassageIndex];
  const blanks = document.querySelectorAll(".blank");
  let allCorrect = true;
  blanks.forEach((blank, i) => {
    const isCorrect = blank.textContent.toLowerCase() === passage.answers[i].toLowerCase();
    blank.classList.toggle("correct", isCorrect);
    blank.classList.toggle("incorrect", !isCorrect);
    if (!isCorrect) allCorrect = false;
  });
  if (allCorrect) {
    state.score += 10;
    state.stars = Math.min(3, state.stars + 1);
    feedbackDisplay.textContent = "Well done!";
    feedbackDisplay.style.color = "green";
    correctSound.play();
    if (state.score >= 50 && !state.achievements.includes("Halfway Hero")) {
      state.achievements.push("Halfway Hero");
    }
    if (state.score >= 100) state.level = "Journeyman";
    if (state.score >= 200) state.level = "Master Wizard";
  } else {
    feedbackDisplay.textContent = "Check your answers!";
    feedbackDisplay.style.color = "red";
    incorrectSound.play();
  }
  updateStatus();
}

// Event Listeners
submitBtn.addEventListener("click", () => checkAnswers());
prevBtn.addEventListener("click", () => {
  if (state.currentPassageIndex > 0) {
    state.currentPassageIndex--;
    displayPassage();
  }
});
nextBtn.addEventListener("click", () => {
  if (state.currentPassageIndex < passages[state.currentCategory].length - 1) {
    state.currentPassageIndex++;
    displayPassage();
  }
});
hintBtn.addEventListener("click", () => {
  const passage = passages[state.currentCategory][state.currentPassageIndex];
  feedbackDisplay.textContent = passage.hints[0];
  feedbackDisplay.style.color = "blue";
  speak(passage.hints[0]);
  state.hintUsage[state.currentPassageIndex] = (state.hintUsage[state.currentPassageIndex] || 0) + 1;
});
clearBtn.addEventListener("click", () => displayPassage());
shareBtn.addEventListener("click", () => {
  const text = `I'm playing Vocabulary Cloze Adventure! Score: ${state.score}, Level: ${state.level}`;
  navigator.clipboard.writeText(text);
  feedbackDisplay.textContent = "Copied to clipboard!";
});
readPassageBtn.addEventListener("click", () => {
  const text = passages[state.currentCategory][state.currentPassageIndex].text.replace(/___\(\d\)___/g, "blank");
  speak(text);
});
resetWordsBtn.addEventListener("click", () => displayPassage());
categorySelect.addEventListener("change", () => {
  state.currentCategory = categorySelect.value;
  state.currentPassageIndex = 0;
  displayPassage();
});
timerSetting.addEventListener("change", startTimer);
toggleDyslexia.addEventListener("click", () => document.body.classList.toggle("dyslexia"));
textSizeSlider.addEventListener("input", () => {
  passageText.style.fontSize = `${textSizeSlider.value}rem`;
  wordBox.style.fontSize = `${textSizeSlider.value}rem`;
});
themeSelect.addEventListener("change", () => {
  document.body.className = themeSelect.value === "default" ? "" : themeSelect.value;
});
sidebarToggle.addEventListener("click", () => sidebar.classList.toggle("open"));
tutorialCloseBtn.addEventListener("click", () => tutorialModal.style.display = "none");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadVoices(voiceSelect);
  tutorialModal.style.display = "block";
  displayPassage();
  updateStatus();
});
