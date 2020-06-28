import React from "react";
import PropTypes from "prop-types";

function NewsItem(props) {
  const withDate = () => {
    if (props.date) {
      return <small class="berita-date">{props.date}</small>;
    }
  };
  return (
    <div class="berita-item">
      <h3 class="berita-title">{props.title}</h3>
      {withDate()}
      <p class="berita-excerpt">{props.excerpt}</p>
    </div>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
};

export default NewsItem;
