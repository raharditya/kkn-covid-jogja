import React from "react";

export default function HomeNav(props) {
  return (
    <nav>
      <ul class="home-nav">
        <li onClick={() => props.homeNavHandle("province")}>
          {props.pos === "province" ? (
            <p style={{ fontWeight: "500" }}>Provinsi</p>
          ) : (
            <p style={{ color: "#a5a5a5" }}>Provinsi</p>
          )}
        </li>
        <li onClick={() => props.homeNavHandle("regency")}>
          {props.pos === "regency" ? (
            <p style={{ fontWeight: "500" }}>Kabupaten</p>
          ) : (
            <p style={{ color: "#a5a5a5" }}>Kabupaten</p>
          )}
        </li>
      </ul>
    </nav>
  );
}
