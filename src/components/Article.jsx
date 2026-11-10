import PropTypes from "prop-types";

const Article = ({ title, date = "January 1, 1970", preview }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  preview: PropTypes.string,
};

export default Article;
