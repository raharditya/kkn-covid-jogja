import React from "react";
import PropTypes from "prop-types";
import { AccordionItemPanel } from "react-accessible-accordion";

function AccordionContent(props) {
  return (
    <AccordionItemPanel>
      <div className="accordion-content">
        <p>{props.children}</p>
        <div className="fact-source">
          <small>Sumber: {props.source}</small>
        </div>
      </div>
    </AccordionItemPanel>
  );
}

AccordionContent.propTypes = {
  children: PropTypes.array,
  source: PropTypes.string,
};

export default AccordionContent;
