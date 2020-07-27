import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

function RegencyStats(props) {
  return (
    <div className="kabupaten-stats-wrapper">
      <div className="kabupaten-title">
        {props.area ? (
          <h3>{props.area}</h3>
        ) : (
          <>
            <Skeleton />
            <Skeleton width="80%" />
          </>
        )}
      </div>

      <div className="kabupaten-stats">
        <div className="stats-item">
          <small>Aktif</small>
          <h3>{props.active || <Skeleton />}</h3>
        </div>
        <div className="stats-item">
          <small>ODP</small>
          <h3>{props.odp || <Skeleton />}</h3>
        </div>
        <div className="stats-item">
          <small>PDP</small>
          <h3>{props.pdp || <Skeleton />}</h3>
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
