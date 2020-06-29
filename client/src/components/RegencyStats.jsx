import React from "react";
import PropTypes from "prop-types";

function RegencyStats(props) {
  return (
    <div class="kabupaten-stats-wrapper">
      <div class="kabupaten-title">
        <h3>{props.area}</h3>
      </div>

      <div class="kabupaten-stats">
        <div class="stats-item">
          <small>Aktif</small>
          <h3>{props.active}</h3>
        </div>
        <div class="stats-item">
          <small>ODP</small>
          <h3>{props.odp}</h3>
        </div>
        <div class="stats-item">
          <small>PDP</small>
          <h3>{props.pdp}</h3>
        </div>
      </div>
    </div>
  );
}

RegencyStats.propTypes = {
  area: PropTypes.string,
  active: PropTypes.number,
  odp: PropTypes.number,
  pdp: PropTypes.number,
};

export default RegencyStats;
