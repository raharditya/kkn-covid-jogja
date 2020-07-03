import React from "react";
import PropTypes from "prop-types";
import { AccordionItem } from "react-accessible-accordion";

import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

function AccordionSingle(props) {
  return (
    <AccordionItem>
      <div className="accordion-item">
        <AccordionTitle title={props.title} />
        <AccordionContent source={props.source}>
          {props.children}
        </AccordionContent>
      </div>
    </AccordionItem>
  );
}

AccordionSingle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  source: PropTypes.string,
};

export default AccordionSingle;
