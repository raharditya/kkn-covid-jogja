import React from "react";

export default function HomeNav(props) {
  return (
    <nav>
      <ul class="home-nav">
        <li onClick={() => props.homeNavHandle("province")}>Provinsi</li>
        <li onClick={() => props.homeNavHandle("regency")}>Kabupaten</li>
      </ul>
    </nav>
  );
}
