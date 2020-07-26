import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

function AccordionContent(props) {
  return (
    <div className="accordion-content">
      <p>
        {props.children || (
          <>
            <Skeleton width="80%" />
            <Skeleton width="90%" />
            <Skeleton width="70%" />
          </>
        )}
      </p>
      <div className="fact-source">
        <small>
          Sumber:{" "}
          {props.source || (
            <>
              <Skeleton width={50} />
            </>
          )}
        </small>
      </div>
    </div>
  );
}

AccordionContent.propTypes = {
  children: PropTypes.array,
  source: PropTypes.string,
};

export default AccordionContent;
