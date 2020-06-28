import React from "react";
import PropTypes from "prop-types";

function InfoArticle(props) {
  return (
    <div
      class="article-item"
      style={{ backgroundImage: `url(${props.thumbnail})` }}
    >
      <h3>{props.title}</h3>
    </div>
  );
}

InfoArticle.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default InfoArticle;
