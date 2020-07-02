import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Divider } from "../assets/divider.svg";

function ProvinceStats(props) {
  return (
    <div className="provinsi-stats">
      <div className="provinsi-stats-data stats-flex">
        <div className="stats-item">
          <small>Pasien</small>
          <h3>{props.active}</h3>
        </div>
        <Divider />
        <div className="stats-item">
          <small>Sembuh</small>
          <h3>{props.recovered}</h3>
        </div>
        <Divider />
        <div className="stats-item">
          <small>Meninggal</small>
          <h3>{props.deaths}</h3>
        </div>
      </div>
      <p>Kasus hari ini: {props.daily}</p>
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
