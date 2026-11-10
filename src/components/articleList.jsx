import Article from "./Article";
import PropTypes from "prop-types";

function ArticleList({ posts = [] }) {
  const articles = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
      minutes={post.minutes}
    />
  ));

  return <main>{articles}</main>;
}

ArticleList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      date: PropTypes.string,
      preview: PropTypes.string,
      minutes: PropTypes.number,
    })
  ),
};

export default ArticleList;
