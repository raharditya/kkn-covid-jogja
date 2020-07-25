import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Divider } from "../assets/divider.svg";
import Skeleton from "react-loading-skeleton";

function ProvinceStats(props) {
  return (
    <div className="provinsi-stats">
      <div className="provinsi-stats-data stats-flex">
        <div className="stats-item">
          <small>Kasus</small>
          <h3>{props.active || <Skeleton width={30} />}</h3>
        </div>
        <Divider />
        <div className="stats-item">
          <small>Sembuh</small>
          <h3>{props.recovered || <Skeleton width={30} />}</h3>
        </div>
        <Divider />
        <div className="stats-item">
          <small>Meninggal</small>
          <h3>{props.deaths || <Skeleton width={30} />}</h3>
        </div>
      </div>
      <p>Kasus hari ini: {props.daily || <Skeleton width={30} />}</p>
    </div>
  );
}

ProvinceStats.propTypes = {
  active: PropTypes.number,
  recovered: PropTypes.number,
  deaths: PropTypes.number,
  daily: PropTypes.number,
};

export default ProvinceStats;
