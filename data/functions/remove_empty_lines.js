// data/functions/remove_empty_lines.js

export function removeEmptyLines() {
    processText(text => text.split('\n').filter(line => line.trim() !== '').join('\n'));
  }
  