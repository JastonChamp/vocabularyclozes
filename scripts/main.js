import { passages } from './data/passages.js';
import { speak, loadVoices } from './utils/speech.js';

const state = {
  currentCategory: "general",
  currentPassageIndex: 0,
  score: 0,
  stars: 0,
  hintUsage: {},
  selectedWord: null,
  timeLeft: 60,
  timerInterval: null,
  level: "Apprentice",
  achievements: [],
};

// DOM references
const passageText    = document.getElementById("passage-text");
const wordBox        = document.getElementById("word-box");
const feedbackDisplay= document.getElementById("feedback");
const submitBtn      = document.getElementById("submit-btn");
const prevBtn        = document.getElementById("prev-btn");
const nextBtn        = document.getElementById("next-btn");
const hintBtn        = document.getElementById("hint-btn");
const clearBtn       = document.getElementById("clear-btn");
const shareBtn       = document.getElementById("share-btn");
const readBtn        = document.getElementById("read-passage-btn");
const resetBtn       = document.getElementById("reset-words-btn");
const categorySelect = document.getElementById("vocab-category");
const timerSelect    = document.getElementById("timer-setting");
const toggleThemeBtn = document.getElementById("toggle-theme");
const toggleDyslexiaBtn = document.getElementById("toggle-dyslexia");
const textSizeSlider = document.getElementById("text-size-slider");
const themeSelect    = document.getElementById("theme-select");
const sidebarToggle  = document.getElementById("sidebar-toggle");
const sidebar        = document.querySelector(".sidebar");

// Utility: shuffle
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Update status bar
function updateStatus() {
  const total = passages[state.currentCategory].length;
  document.getElementById("progress").textContent = `Passage ${state.currentPassageIndex+1}/${total}`;
  document.getElementById("score").textContent    = `Score: ${state.score}`;
  document.getElementById("stars").textContent    = `Stars: ${"★".repeat(state.stars)}${"☆".repeat(3-state.stars)}`;
  document.getElementById("timer").textContent    = `Time: ${state.timeLeft}s`;
  document.getElementById("level").textContent    = `Level: ${state.level}`;
  document.getElementById("achievements").textContent = state.achievements.join(", ");
  document.getElementById("progress-bar").style.width = `${((state.currentPassageIndex+1)/total)*100}%`;
}

// Timer logic
function startTimer() {
  clearInterval(state.timerInterval);
  const dur = timerSelect.value;
  if (dur === "off") {
    state.timeLeft = 0;
    document.getElementById("timer").textContent = "Time: Off";
    document.getElementById("timer-bar").style.width = "100%";
    return;
  }
  state.timeLeft = +dur;
  document.getElementById("timer-bar").style.width = "100%";
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    document.getElementById("timer").textContent = `Time: ${state.timeLeft}s`;
    document.getElementById("timer-bar").style.width = `${(state.timeLeft / +dur) * 100}%`;
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      checkAnswers();
    }
  }, 1000);
}

// Render current passage
function displayPassage() {
  clearInterval(state.timerInterval);
  const p = passages[state.currentCategory][state.currentPassageIndex];

  // Replace blanks and clue highlights
 let html = p.text.replace(/___\s*\((\d)\)\s*___/g, (_,n) =>
    `<span class="blank" data-blank="${n}" tabindex="0"></span>` +
    `<button class="hint-for-blank" data-blank="${n}">💡</button>`
  );
  p.clueWords.forEach((clues,i) => {
    clues.forEach(w => {
      html = html.replace(new RegExp(`\\b${w}\\b`, 'g'),
        `<span class="keyword kw-${i+1}">${w}</span>`
      );
    });
  });

  passageText.innerHTML = html;
  wordBox.innerHTML = shuffle(p.wordBox)
    .map(w => `<div class="word" draggable="true" tabindex="0">${w}</div>`)
    .join("");
  feedbackDisplay.textContent = "";
  startTimer();
  updateStatus();
  bindInteractions();
}

// Wire up drag/drop, clicks
function bindInteractions() {
  document.querySelectorAll('.word').forEach(w => {
    w.onclick = () => selectWord(w);
 w.ondragstart = e => e.dataTransfer.setData('text/plain', w.textContent);
  });
  document.querySelectorAll('.blank').forEach(b => {
    b.onclick = () => state.selectedWord && placeWord(b, state.selectedWord.textContent);
    b.ondragover = e => e.preventDefault();
     b.ondrop = e => {
      e.preventDefault();
   placeWord(b, e.dataTransfer.getData('text/plain'));
    };
  });
  document.querySelectorAll('.keyword').forEach(el => {
    el.onclick = () => {
      const idx = +el.className.match(/kw-(\d+)/)[1] - 1;
      const hint = passages[state.currentCategory][state.currentPassageIndex].hints[idx];
      feedbackDisplay.textContent = hint;
      speak(hint);
    };
  });
  document.querySelectorAll('.hint-for-blank').forEach(btn => {
    btn.onclick = () => {
      const idx = +btn.dataset.blank - 1;
      const hint = passages[state.currentCategory][state.currentPassageIndex].hints[idx];
      feedbackDisplay.textContent = hint;
      speak(hint);
    };
  });
}

function selectWord(el) {
  document.querySelectorAll('.word').forEach(w => w.classList.remove('selected'));
  el.classList.add('selected');
  state.selectedWord = el;
}

function placeWord(blank, txt) {
  blank.textContent = txt;
  checkSingle(blank);
  state.selectedWord = null;
  document.querySelectorAll('.word').forEach(w => w.classList.remove('selected'));
  // remove the used word from the word box to prevent duplicate placement
  const match = Array.from(document.querySelectorAll('.word')).find(w => w.textContent === txt);
  if (match) match.remove();
}

function checkSingle(blank) {
  const idx = +blank.dataset.blank - 1;
  const correct = passages[state.currentCategory][state.currentPassageIndex].answers[idx];
  if (blank.textContent.toLowerCase() === correct.toLowerCase()) {
    blank.classList.add('correct');
    blank.classList.remove('incorrect');
    feedbackDisplay.textContent = 'Correct!';
    speak('Correct');
  } else {
    blank.classList.add('incorrect');
    blank.classList.remove('correct');
    feedbackDisplay.textContent = 'Try again!';
    speak('Try again');
  }
}

function checkAnswers() {
  const blanks = document.querySelectorAll('.blank');
  let allGood = true;
  blanks.forEach((b,i) => {
    const ans = passages[state.currentCategory][state.currentPassageIndex].answers[i];
    if (b.textContent.toLowerCase() === ans.toLowerCase()) {
      b.classList.add('correct');
    } else {
      b.classList.add('incorrect');
      allGood = false;
    }
  });
  if (allGood) {
    state.score += 10;
    state.stars = Math.min(3, state.stars + 1);
    feedbackDisplay.textContent = 'Well done!';
    speak('Well done');
    // handle level/achievements...
  } else {
    feedbackDisplay.textContent = 'Check your answers!';
    speak('Check your answers');
  }
  updateStatus();
}

// Event listeners
submitBtn.onclick       = checkAnswers;
prevBtn.onclick         = () => { if (state.currentPassageIndex>0) { state.currentPassageIndex--; displayPassage(); } };
nextBtn.onclick         = () => { 
  if (state.currentPassageIndex<passages[state.currentCategory].length-1) {
    state.currentPassageIndex++; displayPassage();
  }
};
hintBtn.onclick         = () => {
  const hint = passages[state.currentCategory][state.currentPassageIndex].hints[0];
  feedbackDisplay.textContent = hint;
  speak(hint);
};
clearBtn.onclick        = displayPassage;
resetBtn.onclick        = displayPassage;
shareBtn.onclick        = () => {
  navigator.clipboard.writeText(`Score: ${state.score}, Level: ${state.level}`);
  feedbackDisplay.textContent = 'Copied!';
};
readBtn.onclick         = () => {
   speak(passages[state.currentCategory][state.currentPassageIndex].text.replace(/___\s*\(\d\)\s*___/g,'blank'));
};
categorySelect.onchange  = e => { state.currentCategory = e.target.value; state.currentPassageIndex=0; displayPassage(); };
timerSelect.onchange     = startTimer;
toggleThemeBtn.onclick   = () => {
  document.body.classList.toggle('light-mode');
  toggleThemeBtn.textContent = document.body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
};
toggleDyslexiaBtn.onclick= () => document.body.classList.toggle('dyslexia');
textSizeSlider.oninput   = e => {
  passageText.style.fontSize = `${e.target.value}rem`;
  wordBox.style.fontSize    = `${e.target.value}rem`;
};
themeSelect.onchange      = e => {
  document.body.className = e.target.value === 'default' ? '' : e.target.value;
};
sidebarToggle.onclick     = () => sidebar.classList.toggle('open');
document.getElementById('tutorial-close-btn').onclick = () => {
  document.getElementById('tutorial-modal').style.display = 'none';
};

window.addEventListener('DOMContentLoaded', () => {
  loadVoices(document.getElementById('voice-select'));
  displayPassage();
});
