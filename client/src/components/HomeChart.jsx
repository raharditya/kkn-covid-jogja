import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

function HomeChart(props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={props.data}>
        <XAxis dataKey="date" tick={false} />
        <YAxis width={35} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          strokeWidth={2}
          dot={false}
          dataKey="activeDaily"
          stroke="#64818b"
          name="Kasus"
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dot={false}
          dataKey="recoveredDaily"
          stroke="#7ba346"
          name="Sembuh"
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dot={false}
          dataKey="deathDaily"
          stroke="#c51221"
          name="Meninggal"
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dot={false}
          dataKey="patientDaily"
          stroke="#866358"
          name="Aktif"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

HomeChart.propTypes = {
  data: PropTypes.array,
};

export default HomeChart;
