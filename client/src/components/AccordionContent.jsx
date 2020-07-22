import React from "react";
import PropTypes from "prop-types";
import { AccordionItemPanel } from "react-accessible-accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";

function AccordionContent(props) {
  return (
    // <AccordionItemPanel>
    <AccordionDetails>
      <div className="accordion-content">
        <p>{props.children}</p>
        <div className="fact-source">
          <small>Sumber: {props.source}</small>
        </div>
      </div>
    </AccordionDetails>
    // </AccordionItemPanel>
  );
}

AccordionContent.propTypes = {
  children: PropTypes.array,
  source: PropTypes.string,
};

export default AccordionContent;
