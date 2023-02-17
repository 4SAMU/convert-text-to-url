/** @format */

module.exports = function makeTextClickable(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  // Split the text into two parts: before and after the link
  const parts = text.split(urlRegex);
  return parts.map((part, i) => {
    if (urlRegex.test(part)) {
      // If the current part is a URL, wrap it in an anchor tag
      return (
        <a key={i} href={part}>
          {part}
        </a>
      );
    } else {
      // Otherwise, return the text unchanged
      return <span key={i}>{part}</span>;
    }
  });
};
