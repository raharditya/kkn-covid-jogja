import React from "react";
import PropTypes from "prop-types";

function AccordionContent(props) {
  return (
    <div class="accordion-content">
      <p>{props.children}</p>
      <div class="fact-source">
        <small>Sumber: {props.source}</small>
      </div>
    </div>
  );
}

AccordionContent.propTypes = {
  children: PropTypes.string,
  source: PropTypes.string,
};

export default AccordionContent;
