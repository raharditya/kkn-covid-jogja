import React from "react";
import PropTypes from "prop-types";

function SubdistrictStats(props) {
  function kecamatanMap() {
    props.kecamatan.map((kec) => {
      return (
        <tr>
          <td class="kecamatan-stats-name">{kec.nameKec}</td>
          <td class="kecamatan-stats-active">{kec.activeKec}</td>
          <td class="kecamatan-stats-odp">{kec.odpKec}</td>
          <td class="kecamatan-stats-pdp">{kec.pdpKec}</td>
        </tr>
      );
    });
  }

  return (
    <div class="kecamatan-stats-wrapper">
      <table class="kecamatan-stats">
        <tr>
          <th class="kecamatan-name-row">
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

        {kecamatanMap()}
      </table>
    </div>
  );
}

SubdistrictStats.propTypes = {
  kecamatan: PropTypes.array,
};

export default SubdistrictStats;
