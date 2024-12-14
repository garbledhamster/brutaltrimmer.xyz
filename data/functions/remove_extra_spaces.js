// data/functions/remove_extra_spaces.js

export function removeExtraSpaces() {
    processText(text => text.replace(/\s{2,}/g, ' '));
  }
  