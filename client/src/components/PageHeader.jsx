import React from "react";
import PropTypes from "prop-types";

function PageHeader(props) {
  const outputSub = () => {
    if (props.subtitle) {
      return <p class="page-subtitle">{props.subtitle}</p>;
    }
  };
  return (
    <header>
      <h2 class="page-title">{props.title}</h2>
      {outputSub}
    </header>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default PageHeader;
