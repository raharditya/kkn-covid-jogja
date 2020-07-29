import React, { useEffect } from "react";
import ReactGA from "react-ga";

import SubpageHeader from "../SubpageHeader";
import InstagramContainer from "../InstagramContainer";
import MemberItem from "../MemberItem";
import profileIklil from "../../assets/profile-iklil.jpg";
import profileAdit from "../../assets/profile-adit.jpg";
import profileIg from "../../assets/profile-ig.jpg";
import { ReactComponent as Logo } from "../../assets/kkn-logo.svg";

export default function Medsos(props) {
  useEffect(() => {
    ReactGA.pageview("/medsos");
  }, []);

  useEffect(() => {
    props.setNav(false);
  }, [props]);

  return (
    <div className="page-wrapper berita-subpage medsos-page">
      <SubpageHeader
        title="Sosial Media"
        subtitle="Sosial media dari KKN Covid UNS yang berlokasi di Dusun Juwangen RT 08, Sleman."
      />

      <div className="page-inner-wrapper">
        <InstagramContainer
          img={profileIg}
          name="KKN Covid Jogja"
          id="kkncoviduns_jogja"
        />

        <div className="member-wrapper">
          <h3>Anggota</h3>

          <div className="member-item-container">
            <MemberItem
              img={profileAdit}
              name="Adit Raharditya"
              ig="https://www.instagram.com/a.raharditya/"
              linkedin="https://www.linkedin.com/in/adit-raharditya-a17b201a9/"
              github="https://github.com/Asebodi"
            >
              <small>Desainer UI/UX</small>
              <small>Developer Front & Back End</small>
            </MemberItem>

            <MemberItem
              img={profileIklil}
              name="Iklil Mara"
              ig="https://www.instagram.com/iiklil/"
              twitter="https://www.twitter.com/iiklil/"
            >
              <small>Penulis Artikel</small>
            </MemberItem>
          </div>

          <Logo />
          <small className="bottom-acknowledment">
            Dibuat sebagai media edukasi masyarakat dalam rangka KKN Covid UNS
          </small>
        </div>
      </div>
    </div>
  );
}
