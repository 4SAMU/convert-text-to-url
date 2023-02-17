/** @format */

export default function makeTextClickable(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  // Split the text into two parts: before and after the link
  const parts = text.split(urlRegex);
  const result = [];
  for (let i = 0; i < parts.length; i++) {
    if (urlRegex.test(parts[i])) {
      // If the current part is a URL, wrap it in an anchor tag
      const link = document.createElement("a");
      link.href = parts[i];
      link.textContent = parts[i];
      result.push(link);
    } else {
      // Otherwise, add the text as a plain text node
      result.push(document.createTextNode(parts[i]));
    }
  }
  return result;
};
