/** @format */

export default function makeTextClickable(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const phoneRegex = /(\+?\d{1,3}[-.\s]?)?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/; // Match phone numbers with an optional country code and with spaces, dashes, or dots between digits
  const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
  const parts = text.split(
    /(\b(?:https?:\/\/|mailto:)?\S+\b|\+?\d{1,3}[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b|\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b)/gi
  );

  return parts.map((part, i) => {
    if (urlRegex.test(part)) {
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    } else if (phoneRegex.test(part)) {
      return (
        <a key={i} href={`tel:${part.replace(/[^\d+]/g, "")}`}>
          {part}
        </a>
      );
    } else if (emailRegex.test(part)) {
      return (
        <a key={i} href={`mailto:${part}`}>
          {part}
        </a>
      );
    } else {
      return <span key={i}>{part}</span>;
    }
  });
}
