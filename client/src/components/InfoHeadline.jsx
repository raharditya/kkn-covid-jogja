import React from "react";
import PropTypes from "prop-types";

function InfoHeadline(props) {
  return (
    <div
      className="headline-item"
      style={{ backgroundImage: `url(${props.thumbnail})` }}
    >
      <h3>{props.title}</h3>
    </div>
  );
}

InfoHeadline.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default InfoHeadline;
