import React from "react";
import PropTypes from "prop-types";

function NewsItem(props) {
  const withDate = () => {
    if (props.date) {
      return <small className="berita-date">{props.date}</small>;
    }
  };
  return (
    <div className="berita-item">
      <h3 className="berita-title">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          {props.title}
        </a>
      </h3>
      {withDate()}
      <p className="berita-excerpt">{props.excerpt}</p>
    </div>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  url: PropTypes.string,
};

export default NewsItem;
