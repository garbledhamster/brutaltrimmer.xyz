// data/functions/remove_line_breaks.js

export function removeLineBreaks() {
    processText(text => text.replace(/(\r\n|\n|\r)/gm, ''));
  }
  