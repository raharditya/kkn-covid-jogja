import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

function NewsItem(props) {
  return (
    <div className="berita-item">
      <h3 className="berita-title">
        {props.title ? (
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        ) : (
          <Skeleton count={2} height={25} />
        )}
      </h3>

      {props.label ? (
        <small className="berita-date">
          {`${props.date} • ${props.label}` || <Skeleton />}
        </small>
      ) : props.date || props.date === "" ? (
        <small className="berita-date">{props.date}</small>
      ) : (
        <small>
          <Skeleton width="40%" />
        </small>
      )}

      <p className="berita-excerpt">
        {props.excerpt || props.excerpt === "" ? (
          props.excerpt
        ) : (
          <>
            <Skeleton width="95%" />
            <Skeleton width="85%" />
            <Skeleton width="90%" />
            <Skeleton width="70%" />
          </>
        )}
      </p>
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
