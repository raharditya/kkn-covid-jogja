import React from "react";
import PropTypes from "prop-types";

function SubdistrictStats(props) {
  const dummy = {
    kecamatan: [
      {
        _id: "5ef55f6f7baf202b204f289e",
        nameKec: "Gedangsari",
        activeKec: 0,
        odpKec: 127,
        pdpKec: 1,
      },
      {
        _id: "5ef55f6f7baf202b204f289f",
        nameKec: "Girisubo",
        activeKec: 0,
        odpKec: 38,
        pdpKec: 4,
      },
      {
        _id: "5ef55f6f7baf202b204f28a0",
        nameKec: "Karangmojo",
        activeKec: 1,
        odpKec: 250,
        pdpKec: 29,
      },
      {
        _id: "5ef55f6f7baf202b204f28a1",
        nameKec: "Ngawen",
        activeKec: 0,
        odpKec: 116,
        pdpKec: 1,
      },
      {
        _id: "5ef55f6f7baf202b204f28a2",
        nameKec: "Nglipar",
        activeKec: 1,
        odpKec: 67,
        pdpKec: 4,
      },
      {
        _id: "5ef55f6f7baf202b204f28a3",
        nameKec: "Paliyan",
        activeKec: 0,
        odpKec: 65,
        pdpKec: 7,
      },
      {
        _id: "5ef55f6f7baf202b204f28a4",
        nameKec: "Panggang",
        activeKec: 0,
        odpKec: 17,
        pdpKec: 3,
      },
      {
        _id: "5ef55f6f7baf202b204f28a5",
        nameKec: "Patuk",
        activeKec: 0,
        odpKec: 64,
        pdpKec: 4,
      },
      {
        _id: "5ef55f6f7baf202b204f28a6",
        nameKec: "Playen",
        activeKec: 0,
        odpKec: 64,
        pdpKec: 14,
      },
      {
        _id: "5ef55f6f7baf202b204f28a7",
        nameKec: "Ponjong",
        activeKec: 0,
        odpKec: 107,
        pdpKec: 19,
      },
      {
        _id: "5ef55f6f7baf202b204f28a8",
        nameKec: "Purwosari",
        activeKec: 0,
        odpKec: 17,
        pdpKec: 3,
      },
      {
        _id: "5ef55f6f7baf202b204f28a9",
        nameKec: "Semanu",
        activeKec: 0,
        odpKec: 152,
        pdpKec: 17,
      },
      {
        _id: "5ef55f6f7baf202b204f28aa",
        nameKec: "Semin",
        activeKec: 1,
        odpKec: 54,
        pdpKec: 10,
      },
      {
        _id: "5ef55f6f7baf202b204f28ab",
        nameKec: "Tanjungsari",
        activeKec: 0,
        odpKec: 28,
        pdpKec: 4,
      },
      {
        _id: "5ef55f6f7baf202b204f28ac",
        nameKec: "Wonosari",
        activeKec: 0,
        odpKec: 99,
        pdpKec: 31,
      },
    ],
  };
  function kecamatanMap() {
    const output = dummy.kecamatan.map((kec) => {
      return (
        <tr key={kec._id}>
          <td className="kecamatan-stats-name">{kec.nameKec}</td>
          <td className="kecamatan-stats-active">{kec.activeKec}</td>
          <td className="kecamatan-stats-odp">{kec.odpKec}</td>
          <td className="kecamatan-stats-pdp">{kec.pdpKec}</td>
        </tr>
      );
    });

    return output;
  }

  return (
    <div className="kecamatan-stats-wrapper">
      <table className="kecamatan-stats">
        <tr>
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

        <tbody>{kecamatanMap()}</tbody>
      </table>
    </div>
  );
}

SubdistrictStats.propTypes = {
  kecamatan: PropTypes.array,
};

export default SubdistrictStats;
