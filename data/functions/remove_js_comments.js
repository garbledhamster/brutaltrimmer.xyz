// data/functions/remove_js_comments.js

export function removeJSComments() {
    processText(text => {
      return text
        .split('\n')
        .map(line => {
          const commentIndex = line.indexOf('//');
          if (commentIndex !== -1 && !line.trim().startsWith('//')) {
            return line.slice(0, commentIndex).trimEnd();
          }
          return line.trim().startsWith('//') ? '' : line;
        })
        .join('\n');
    });
  }
  