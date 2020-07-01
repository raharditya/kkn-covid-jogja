import React from "react";
import { Link } from "react-router-dom";

export default function NewsMenu() {
  return (
    <section className="berita-menu">
      <Link to="/hoax">
        <div className="berita-menu-item menu-hoax">
          <h3>
            Anti
            <br />
            Hoax
          </h3>
        </div>
      </Link>

      <Link to="/medsos">
        <div className="berita-menu-item menu-social">
          <h3>Medsos</h3>
          <h4>
            KKN Covid
            <br />
            UNS
          </h4>
        </div>
      </Link>
    </section>
  );
}
