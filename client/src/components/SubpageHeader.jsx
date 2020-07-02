import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as LeftArrow } from "../assets/left-arrow.svg";

function SubpageHeader(props) {
  return (
    <header>
      <div className="page-inner-wrapper">
        <div className="back-btn">
          <div className="btn-inner">
            <LeftArrow />
          </div>
        </div>

        <h2 className="page-title">{props.title}</h2>
        <p className="page-subtitle">{props.subtitle}</p>
      </div>
    </header>
  );
}

SubpageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SubpageHeader;
