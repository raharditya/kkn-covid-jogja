import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as LeftArrow } from "../assets/left-arrow.svg";

function SubpageHeader(props) {
  return (
    <header>
      <div class="page-inner-wrapper">
        <div class="back-btn">
          <div class="btn-inner">
            <LeftArrow />
          </div>
        </div>

        <h2 class="page-title">{props.title}</h2>
        <p class="page-subtitle">{props.subtitle}</p>
      </div>
    </header>
  );
}

SubpageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SubpageHeader;
