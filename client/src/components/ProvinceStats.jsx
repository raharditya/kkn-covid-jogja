import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Divider } from "../assets/divider.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function ProvinceStats(props) {
  return (
    <div className="provinsi-stats">
      <div className="provinsi-stats-data stats-flex">
        <div className="stats-item">
          <small>Kasus</small>
          <h3>
            {props.active || (
              <SkeletonTheme color="#E4E4E4" highlightColor="#EBEBEB">
                <Skeleton width={30} />
              </SkeletonTheme>
            )}
          </h3>
        </div>
        <Divider />
        <div className="stats-item">
          <small>Sembuh</small>
          <h3>
            {props.recovered || (
              <SkeletonTheme color="#E4E4E4" highlightColor="#EBEBEB">
                <Skeleton width={30} />
              </SkeletonTheme>
            )}
          </h3>
        </div>
        <Divider />
        <div className="stats-item">
          <small>Meninggal</small>
          <h3>
            {props.deaths || (
              <SkeletonTheme color="#E4E4E4" highlightColor="#EBEBEB">
                <Skeleton width={30} />
              </SkeletonTheme>
            )}
          </h3>
        </div>
      </div>
      <p>
        Kasus hari ini:{" "}
        {props.daily !== null ? (
          props.daily
        ) : (
          <SkeletonTheme color="#E4E4E4" highlightColor="#EBEBEB">
            <Skeleton width={30} />
          </SkeletonTheme>
        )}
      </p>
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
