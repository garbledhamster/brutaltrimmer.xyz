// data/functions/clear_changes.js

export function clearChanges() {
    saveHistory();
  
    const inputText = document.getElementById('inputText').value;
    initialText = ''; // Reset initial text
    document.getElementById('outputText').value = inputText;
    updateStats();
  }
  