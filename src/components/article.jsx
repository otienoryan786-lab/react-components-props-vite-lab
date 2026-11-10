import PropTypes from "prop-types";

// Bonus: turn "minutes to read" into a row of emoji.
// Under 30 min -> one ☕️ per 5 minutes (rounded up)
// 30 min or more -> one 🍱 per 10 minutes (rounded up)
function readingTime(minutes) {
  if (minutes === undefined || minutes === null) return "";
  const icon = minutes < 30 ? "☕️" : "🍱";
  const step = minutes < 30 ? 5 : 10;
  return `${icon.repeat(Math.ceil(minutes / step))} ${minutes} min read`;
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const time = readingTime(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>{time ? `${date} • ${time}` : date}</small>
      <p>{preview}</p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  preview: PropTypes.string,
  minutes: PropTypes.number,
};

export default Article;
