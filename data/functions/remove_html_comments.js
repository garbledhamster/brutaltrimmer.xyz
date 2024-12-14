// data/functions/remove_html_comments.js

export function removeHTMLComments() {
    processText(text => text.replace(/<!--[\s\S]*?-->/g, ''));
  }
  