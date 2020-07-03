import React from "react";
import PropTypes from "prop-types";

function InfoArticle(props) {
  return (
    <div className="article-item">
      <div
        className="article-item-img"
        style={{ backgroundImage: `url(${props.thumbnail})` }}
      >
        <img src={props.thumbnail} alt="" />
      </div>

      <div className="article-item-title">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

InfoArticle.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default InfoArticle;
