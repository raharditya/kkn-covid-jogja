import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Dropdown } from "../assets/dropdown.svg";
import Skeleton from "react-loading-skeleton";

function AccordionTitle(props) {
  return (
    <div className="accordion-title">
      <p>
        {props.title || (
          <>
            <Skeleton height={20} width={120} />
            <Skeleton height={20} width={180} />
          </>
        )}
      </p>
      <Dropdown />
    </div>
  );
}

AccordionTitle.propTypes = {
  title: PropTypes.string,
};

export default AccordionTitle;
