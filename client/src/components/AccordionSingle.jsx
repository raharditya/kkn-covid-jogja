import React from "react";
import PropTypes from "prop-types";

import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

function AccordionSingle(props) {
  return (
    <div className="accordion-item">
      <AccordionTitle title={props.title} />
      <AccordionContent source={props.source}>
        {props.children}
      </AccordionContent>
    </div>
  );
}

AccordionSingle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
  source: PropTypes.string,
};

export default AccordionSingle;
