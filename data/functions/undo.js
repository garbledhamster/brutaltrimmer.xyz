// data/functions/undo.js

export function undo() {
    if (historyStack.length > 0) {
      const lastState = historyStack.pop();
      document.getElementById('inputText').value = lastState.input;
      document.getElementById('outputText').value = lastState.output;
      initialText = lastState.input;
      updateStats();
  
      const notificationBox = document.getElementById('notificationBox');
      notificationBox.textContent = "Undo performed. Step back in time!";
    } else {
      const notificationBox = document.getElementById('notificationBox');
      notificationBox.textContent = "No more undos available.";
    }
  }
  