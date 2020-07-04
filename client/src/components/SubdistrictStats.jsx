import React from "react";
import PropTypes from "prop-types";

function SubdistrictStats(props) {
  const kecamatanList = props.kecamatan.map((kec) => {
    return (
      <tr key={kec._id}>
        <td className="kecamatan-stats-name">{kec.nameKec}</td>
        <td className="kecamatan-stats-active">{kec.activeKec}</td>
        <td className="kecamatan-stats-odp">{kec.odpKec}</td>
        <td className="kecamatan-stats-pdp">{kec.pdpKec}</td>
      </tr>
    );
  });

  return (
    <div className="kecamatan-stats-wrapper">
      <table className="kecamatan-stats">
        <tbody>
          <tr className="kecamatan-title-row">
            <th className="kecamatan-name-row">
              <small>KECAMATAN</small>
            </th>
            <th>
              <small>AKTIF</small>
            </th>
            <th>
              <small>ODP</small>
            </th>
            <th>
              <small>PDP</small>
            </th>
          </tr>

          {kecamatanList}
        </tbody>
      </table>
    </div>
  );
}

SubdistrictStats.propTypes = {
  kecamatan: PropTypes.array,
};

export default SubdistrictStats;
