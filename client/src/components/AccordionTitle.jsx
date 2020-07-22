import React from "react";
import PropTypes from "prop-types";
import {
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";

import { ReactComponent as Dropdown } from "../assets/dropdown.svg";

function AccordionTitle(props) {
  return (
    // <AccordionItemHeading>
    //   <AccordionItemButton>
    <AccordionSummary expandIcon={<Dropdown />}>
      <div className="accordion-title">
        <p>{props.title}</p>
        {/* <Dropdown /> */}
      </div>
    </AccordionSummary>
    //   </AccordionItemButton>
    // </AccordionItemHeading>
  );
}

AccordionTitle.propTypes = {
  title: PropTypes.string,
};

export default AccordionTitle;
