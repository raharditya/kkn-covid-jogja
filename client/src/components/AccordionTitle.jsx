import React from "react";
import PropTypes from "prop-types";
import {
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

import { ReactComponent as Dropdown } from "../assets/dropdown.svg";

function AccordionTitle(props) {
  return (
    <AccordionItemHeading>
      <AccordionItemButton>
        <div className="accordion-title">
          <p>{props.title}</p>
          <Dropdown />
        </div>
      </AccordionItemButton>
    </AccordionItemHeading>
  );
}

AccordionTitle.propTypes = {
  title: PropTypes.string,
};

export default AccordionTitle;
