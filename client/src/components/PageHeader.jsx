import React from "react";
import PropTypes from "prop-types";

function PageHeader(props) {
  return (
    <header>
      <h2 className="page-title">{props.title}</h2>
      {props.subtitle && <p className="page-subtitle">{props.subtitle}</p>}
    </header>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default PageHeader;
