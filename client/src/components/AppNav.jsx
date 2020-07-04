import React from "react";
import { NavLink } from "react-router-dom";

export default function AppNav(props) {
  return (
    <nav className={props.navShow ? "app-nav" : "app-nav hidden"}>
      <div className="nav-item">
        <NavLink exact to="/" activeClassName="nav-active">
          <i className="fas fa-home"></i>
        </NavLink>
        <NavLink exact to="/" activeStyle={{ fontWeight: "bold" }}>
          Beranda
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink exact to="/berita" activeClassName="nav-active">
          <i className="fas fa-newspaper"></i>
        </NavLink>
        <NavLink exact to="/berita" activeStyle={{ fontWeight: "bold" }}>
          Berita
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink exact to="/edukasi" activeClassName="nav-active">
          <i className="fas fa-book"></i>
        </NavLink>
        <NavLink exact to="/edukasi" activeStyle={{ fontWeight: "bold" }}>
          Edukasi
        </NavLink>
      </div>
    </nav>
  );
}
