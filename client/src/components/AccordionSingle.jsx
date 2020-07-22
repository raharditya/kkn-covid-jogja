import React from "react";
import PropTypes from "prop-types";
import { AccordionItem } from "react-accessible-accordion";
import Accordion from "@material-ui/core/Accordion";

import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

function AccordionSingle(props) {
  return (
    // <AccordionItem>
    <Accordion>
      <div className="accordion-item">
        <AccordionTitle title={props.title} />
        <AccordionContent source={props.source}>
          {props.children}
        </AccordionContent>
      </div>
    </Accordion>
    // </AccordionItem>
  );
}

AccordionSingle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
  source: PropTypes.string,
};

export default AccordionSingle;
