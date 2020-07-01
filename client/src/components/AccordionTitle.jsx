import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Dropdown } from "../assets/dropdown.svg";

function AccordionTitle(props) {
  return (
    <div class="accordion-title">
      <p>{props.title}</p>
      <Dropdown />
    </div>
  );
}

AccordionTitle.propTypes = {
  title: PropTypes.string,
};

export default AccordionTitle;
