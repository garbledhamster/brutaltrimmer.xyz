// data/functions/send.js

export function sendResultToSource() {
    saveHistory();
  
    const outputText = document.getElementById('outputText').value;
    document.getElementById('inputText').value = outputText;
    initialText = outputText; // Update initialText to match new source
    updateStats();
  
    const notificationBox = document.getElementById('notificationBox');
    notificationBox.textContent = "Transferred result back to source. Let's go for another round!";
  }
  