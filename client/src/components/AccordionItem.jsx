import React from "react";
import PropTypes from "prop-types";

import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

function AccordionItem(props) {
  return (
    <div className="accordion-item">
      <AccordionTitle title={props.title} />
      <AccordionContent source={props.source}>
        {props.children}
      </AccordionContent>
    </div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  source: PropTypes.string,
};

export default AccordionItem;
