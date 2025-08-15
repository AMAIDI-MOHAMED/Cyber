import calculateReadingTime from 'reading-time';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';

function formatDate(date) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  return new Date(date).toLocaleDateString(void 0, options);
}

const getReadingTime = (text) => {
  if (!text || !text.length) return void 0;
  try {
    const { minutes } = calculateReadingTime(toString(fromMarkdown(text)));
    if (minutes && minutes > 0) {
      return `${Math.ceil(minutes)} min read`;
    }
    return void 0;
  } catch (e) {
    return void 0;
  }
};

export { formatDate as f, getReadingTime as g };
