import React from "react";
import PropTypes from "prop-types";
import SubdistrictStats from "./SubdistrictStats";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function RegencyStats(props) {
  return (
    <>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="kabupaten-stats-wrapper">
              <div className="kabupaten-title">
                <h3>{props.area}</h3>
              </div>

              <div className="kabupaten-stats">
                <div className="stats-item">
                  <small>Aktif</small>
                  <h3>{props.active}</h3>
                </div>
                <div className="stats-item">
                  <small>ODP</small>
                  <h3>{props.odp}</h3>
                </div>
                <div className="stats-item">
                  <small>PDP</small>
                  <h3>{props.pdp}</h3>
                </div>
              </div>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
          <SubdistrictStats />
        </AccordionItemPanel>
      </AccordionItem>
    </>
  );
}

RegencyStats.propTypes = {
  area: PropTypes.string,
  active: PropTypes.number,
  odp: PropTypes.number,
  pdp: PropTypes.number,
};

export default RegencyStats;
