import React from "react";
import PropTypes from "prop-types";

function SectionHeader(props) {
  return (
    <div className="provinsi-title">
      <h3>{props.title}</h3>
      <small>{props.subtitle}</small>
    </div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionHeader;
