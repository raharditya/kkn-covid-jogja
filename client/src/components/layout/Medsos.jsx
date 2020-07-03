import React, { useEffect } from "react";

import SubpageHeader from "../SubpageHeader";
import InstagramContainer from "../InstagramContainer";
import MemberItem from "../MemberItem";

export default function Medsos(props) {
  useEffect(() => {
    props.setNav(false);
  }, [props]);

  return (
    <div className="page-wrapper berita-subpage medsos-page">
      <SubpageHeader
        title="Sosial Media"
        subtitle="Sosial media dari KKN Covid Jogja UNS dan anggota KKN ini."
      />

      <div className="page-inner-wrapper">
        <InstagramContainer
          img="https://thispersondoesnotexist.com/image"
          name="KKN Covid Jogja"
          post={32}
          follower={403}
          following={205}
        />

        <div className="member-wrapper">
          <h3>Anggota</h3>

          <div className="member-item-container">
            <MemberItem
              img="https://thispersondoesnotexist.com/image"
              name="Adit Raharditya"
              ig="https://www.instagram.com/a.raharditya/"
              twitter="#"
              linkedin="#"
            >
              <small>Desainer UI/UX</small>
              <small>Developer Front & Back End</small>
            </MemberItem>

            <MemberItem
              img="https://thispersondoesnotexist.com/image"
              name="Iklil Mara"
              ig="https://www.instagram.com/iiklil/"
              twitter="#"
              linkedin="#"
            >
              <small>Penulis Artikel</small>
            </MemberItem>
          </div>

          <small className="bottom-acknowledment">
            Dibuat sebagai media edukasi masyarakat dalam rangka KKN Covid UNS
          </small>
        </div>
      </div>
    </div>
  );
}
