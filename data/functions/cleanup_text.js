// data/functions/cleanup_text.js

export function cleanupText() {
    processText(text => {
      const punctuation = `[.,!?;:'"()]`; 
  
      // Remove consecutive duplicates
      text = text.replace(/(.)\1+/g, '$1');
  
      // Ensure proper spacing around punctuation
      text = text.replace(new RegExp(`\\s+(${punctuation})`, 'g'), '$1');
      text = text.replace(new RegExp(`(${punctuation})([^\\s${punctuation}])`, 'g'), '$1 $2');
  
      return text.trim();
    });
  }
  