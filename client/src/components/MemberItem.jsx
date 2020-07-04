import React from "react";
import PropTypes from "prop-types";

function MemberItem(props) {
  return (
    <div className="member-item">
      <img src={props.img} alt="Foto profil anggota kelompok KKN" />

      <h4>{props.name}</h4>

      {props.children}

      <div className="member-item-social">
        <a href={props.ig}>
          <i className="fab fa-instagram"></i>
        </a>
        <a href={props.twitter}>
          <i className="fab fa-twitter"></i>
        </a>
        <a href={props.linkedin}>
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

MemberItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  ig: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
};

export default MemberItem;
