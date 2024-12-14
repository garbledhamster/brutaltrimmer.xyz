// data/functions.js

import { cleanupText } from './functions/cleanup_text.js';
import { clearChanges } from './functions/clear_changes.js';
import { removeEmptyLines } from './functions/remove_empty_lines.js';
import { removeExtraSpaces } from './functions/remove_extra_spaces.js';
import { removeHTMLComments } from './functions/remove_html_comments.js';
import { removeJSComments } from './functions/remove_js_comments.js';
import { removeLineBreaks } from './functions/remove_line_breaks.js';
import { removePSComments } from './functions/remove_ps_comments.js';
import { removeSpaces } from './functions/remove_spaces.js';
import { sendResultToSource } from './functions/send.js';
import { undo } from './functions/undo.js';

// Shared state and logic
let initialText = '';
let historyStack = [];
const MAX_HISTORY = 10;

const messages = {
  removeEmptyLines: "Hah! Removed those lazy empty lines. They won't waste your space now.",
  removeLineBreaks: "Line breaks? Gone. We like continuity, don't we?",
  removeHTMLComments: "Shhh... HTML comments have been silenced.",
  removeSpaces: "Spaces are so overrated. Removed 'em!",
  removeJSComments: "// Comments? More like // Gone! JS comments removed.",
  removePSComments: "# No more whispers in the code. PowerShell comments removed.",
  clearChanges: "Behold! The original text has returned, unscathed.",
  removeExtraSpaces: "Multiple spaces collapsed into a single, efficient space. Much cleaner.",
  cleanupText: "Cleaned up! No duplicates, punctuation spaced properly. It's squeaky clean now."
};

function updateStats() {
  const inputText = document.getElementById('inputText').value;
  const outputText = document.getElementById('outputText').value;

  const sourceCharCount = inputText.length;
  const destinationCharCount = outputText.length;
  const charsDeleted = initialText.length - destinationCharCount;
  const linesRemoved = initialText.split('\n').length - outputText.split('\n').length;
  const spacesRemoved = (initialText.match(/ /g) || []).length - (outputText.match(/ /g) || []).length;

  document.getElementById('sourceCount').innerText = sourceCharCount;
  document.getElementById('destinationCount').innerText = destinationCharCount;
  document.getElementById('deletedCount').innerText = charsDeleted;
  document.getElementById('linesRemoved').innerText = linesRemoved;
  document.getElementById('spacesRemoved').innerText = spacesRemoved;
}

function saveHistory() {
  const currentState = {
    input: document.getElementById('inputText').value,
    output: document.getElementById('outputText').value
  };
  historyStack.push(currentState);
  // Limit history size
  if (historyStack.length > MAX_HISTORY) {
    historyStack.shift();
  }
}

function processText(transformFn) {
  // Save the current state before transformation for undo
  saveHistory();

  const inputText = document.getElementById('inputText').value;
  initialText = initialText || inputText; // Store original text once
  const result = transformFn(inputText, { initialText, updateStats, saveHistory });
  document.getElementById('outputText').value = result;
  updateStats();
}

function notifyAndExecute(action) {
  const notificationBox = document.getElementById('notificationBox');
  let message = messages[action] || "Action completed.";
  notificationBox.textContent = message;
  window[action]();
}

// Attach all functions and variables to window so they can be called from HTML
window.initialText = initialText;
window.historyStack = historyStack;
window.MAX_HISTORY = MAX_HISTORY;
window.messages = messages;
window.updateStats = updateStats;
window.saveHistory = saveHistory;
window.processText = processText;
window.notifyAndExecute = notifyAndExecute;
window.cleanupText = cleanupText;
window.clearChanges = clearChanges;
window.removeEmptyLines = removeEmptyLines;
window.removeExtraSpaces = removeExtraSpaces;
window.removeHTMLComments = removeHTMLComments;
window.removeJSComments = removeJSComments;
window.removeLineBreaks = removeLineBreaks;
window.removePSComments = removePSComments;
window.removeSpaces = removeSpaces;
window.sendResultToSource = sendResultToSource;
window.undo = undo;
