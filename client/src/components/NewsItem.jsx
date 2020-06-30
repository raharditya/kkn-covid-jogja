import React from "react";
import PropTypes from "prop-types";

function NewsItem(props) {
  return (
    <div className="berita-item">
      <h3 className="berita-title">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          {props.title}
        </a>
      </h3>

      {props.label ? (
        <small className="berita-date">
          {`${props.date} - ${props.label}`}
        </small>
      ) : props.date ? (
        <small className="berita-date">{props.date}</small>
      ) : (
        ""
      )}

      <p className="berita-excerpt">{props.excerpt}</p>
    </div>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  label: PropTypes.string,
  excerpt: PropTypes.string,
  url: PropTypes.string,
};

export default NewsItem;
