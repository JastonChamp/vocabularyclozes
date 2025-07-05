import { passages } from './data/passages.js';
import { speak, loadVoices } from './utils/speech.js';

const state = {
  currentCategory: "contextInference",
  currentPassageIndex: 0,
  score: 0,
  stars: 0,
  hintUsage: {},
  selectedWord: null,
  timeLeft: 60,
  timerInterval: null,
  level: "Apprentice",
  achievements: [],
  coins: Number(localStorage.getItem('coins')) || 0,
  badges: JSON.parse(localStorage.getItem('badges') || '[]'),
  unlockedThemes: JSON.parse(localStorage.getItem('unlockedThemes') || '[]'),
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
const dashboardCompleted = document.getElementById("completed-count");
const dashboardScore = document.getElementById("total-score-summary");
const dashboardMissed = document.getElementById("missed-clues-summary");
const exportStatsBtn = document.getElementById("export-stats-btn");

function loadStats() {
  const raw = localStorage.getItem('vocabStats');
  return raw ? JSON.parse(raw) : { completed: 0, score: 0, missed: {} };
}

let stats = loadStats();

function saveStats() {
  localStorage.setItem('vocabStats', JSON.stringify(stats));
}

function renderDashboard() {
  dashboardCompleted.textContent = `Completed: ${stats.completed}`;
  dashboardScore.textContent = `Score: ${stats.score}`;
  const sorted = Object.entries(stats.missed)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([clue, count]) => `${clue} (${count})`)
    .join(', ') || 'none';
  dashboardMissed.textContent = `Top Missed Clues: ${sorted}`;
}

// Utility: shuffle using Fisher–Yates for an even distribution
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Update status bar
function updateStatus() {
  const total = passages[state.currentCategory].length;
  document.getElementById("progress").textContent = `Passage ${state.currentPassageIndex+1}/${total}`;
  document.getElementById("score").textContent    = `Score: ${state.score}`;
   coinsDisplay.textContent = `Coins: ${state.coins}`;
  document.getElementById("stars").textContent    = `Stars: ${"★".repeat(state.stars)}${"☆".repeat(3-state.stars)}`;
  document.getElementById("timer").textContent    = `Time: ${state.timeLeft}s`;
  document.getElementById("level").textContent    = `Level: ${state.level}`;
  document.getElementById("achievements").textContent = state.achievements.join(", ");
  themesInfo.textContent = `Themes: ${['default','light','theme1','theme2',...state.unlockedThemes].join(', ')}`;
  document.getElementById("progress-bar").style.width = `${((state.currentPassageIndex+1)/total)*100}%`;
}

function saveProgress() {
  localStorage.setItem('coins', state.coins);
  localStorage.setItem('badges', JSON.stringify(state.badges));
  localStorage.setItem('unlockedThemes', JSON.stringify(state.unlockedThemes));
}

const unlockMilestones = [
  { points: 50, theme: 'theme3', label: 'Ocean Adventurer', name: 'Ocean' },
  { points: 100, theme: 'theme4', label: 'Galaxy Ranger', name: 'Galaxy' },
];

function applyUnlockedThemes() {
  state.unlockedThemes.forEach(t => {
    if (!Array.from(themeSelect.options).some(o => o.value === t)) {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = t.charAt(0).toUpperCase() + t.slice(1);
      themeSelect.appendChild(opt);
    }
  });
}

function checkUnlocks() {
  unlockMilestones.forEach(m => {
    if (state.coins >= m.points && !state.badges.includes(m.label)) {
      state.badges.push(m.label);
      if (!state.unlockedThemes.includes(m.theme)) {
        state.unlockedThemes.push(m.theme);
        const opt = document.createElement('option');
        opt.value = m.theme;
        opt.textContent = m.name;
        themeSelect.appendChild(opt);
      }
    }
  });
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

  // Highlight clue words before inserting blanks to avoid corrupting attributes
  let html = p.text;
  p.clueWords.forEach((clues,i) => {
    clues.forEach(w => {
      html = html.replace(new RegExp(`\\b${w}\\b`, 'g'),
        `<span class="keyword kw-${i+1}">${w}</span>`
      );
    });
  });
 html = html.replace(/___\s*\((\d)\)\s*___/g, (_,n) => {
    const exp = p.explanations ? p.explanations[n-1].replace(/"/g, '&quot;') : '';
    return `<span class="blank" data-blank="${n}" data-exp="${exp}" tabindex="0"></span>` +
           `<button class="hint-for-blank" data-blank="${n}">💡</button>`;
  });

  passageText.innerHTML = html;
 const pairs = p.wordBox.map((w,i) => ({ word: w, def: p.definitions[i] }));
  shuffle(pairs);
  wordBox.innerHTML = pairs
      .map(({word, def}) =>
      `<div class="word" draggable="true" tabindex="0"><span data-def="${def}">${word}</span></div>`
    )
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
     // remove any existing explanation when the answer is correct
    const after = blank.nextElementSibling &&
      blank.nextElementSibling.classList.contains('hint-for-blank')
        ? blank.nextElementSibling
        : blank;
    const span = after.nextElementSibling;
    if (span && span.classList.contains('explanation')) {
      span.remove();
    }
    // remove clue word highlighting if present
    document.querySelectorAll('.kw-' + (idx + 1)).forEach(el => {
      el.classList.remove('highlighted');
    });
  } else {
    blank.classList.add('incorrect');
    blank.classList.remove('correct');
    feedbackDisplay.textContent = 'Try again!';
    speak('Try again');
    
    // show explanation under the blank
    const exp = blank.dataset.exp;
    if (exp) {
      const after = blank.nextElementSibling &&
        blank.nextElementSibling.classList.contains('hint-for-blank')
          ? blank.nextElementSibling
          : blank;
      let span = after.nextElementSibling;
      if (!(span && span.classList.contains('explanation'))) {
        span = document.createElement('span');
        span.className = 'explanation';
        after.insertAdjacentElement('afterend', span);
      }
      span.textContent = exp;
    }
    // highlight the associated clue words
    document.querySelectorAll('.kw-' + (idx + 1)).forEach(el => {
      el.classList.add('highlighted');
    });
  }
}

function checkAnswers() {
 const p = passages[state.currentCategory][state.currentPassageIndex];
  const blanks = document.querySelectorAll('.blank');
  let allGood = true;
  blanks.forEach((b,i) => {
    const ans = p.answers[i];
    if (b.textContent.toLowerCase() === ans.toLowerCase()) {
      b.classList.add('correct');
    } else {
      b.classList.add('incorrect');
      allGood = false;
    }
    const exp = b.dataset.exp;
    if (exp) {
      const after = b.nextElementSibling && b.nextElementSibling.classList.contains('hint-for-blank')
        ? b.nextElementSibling
        : b;
      let span = after.nextElementSibling;
      if (!(span && span.classList.contains('explanation'))) {
        span = document.createElement('span');
        span.className = 'explanation';
        after.insertAdjacentElement('afterend', span);
      }
      span.textContent = exp;
    }
  });
  blanks.forEach((b,i) => {
    const ans = p.answers[i];
    if (b.textContent.toLowerCase() !== ans.toLowerCase()) {
      const clue = p.clueWords && p.clueWords[i] ? p.clueWords[i][0] : `blank${i+1}`;
      stats.missed[clue] = (stats.missed[clue] || 0) + 1;
    }
  });
  if (allGood) {
    state.score += 10;
    state.stars = Math.min(3, state.stars + 1);
     state.coins += 10;
    checkUnlocks();
    saveProgress();
    feedbackDisplay.textContent = 'Well done!';
    speak('Well done');
    stats.completed++;
    // handle level/achievements...
  } else {
    feedbackDisplay.textContent = 'Check your answers!';
    speak('Check your answers');
    stats.score = state.score;
  saveStats();
  renderDashboard();
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
exportStatsBtn.onclick  = () => {
  navigator.clipboard.writeText(JSON.stringify(stats));
  feedbackDisplay.textContent = 'Stats copied!';
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
applyUnlockedThemes();
  displayPassage();
  renderDashboard();
  saveProgress();
  updateStatus();
  });
