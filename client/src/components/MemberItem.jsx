import React from "react";
import PropTypes from "prop-types";

function MemberItem(props) {
  return (
    <div class="member-item">
      <img src={props.img} alt="Foto profil anggota kelompok KKN" />

      <h4>{props.name}</h4>

      {props.children}

      <div class="member-item-social">
        <a href={props.ig}></a> <i class="fab fa-instagram"></i>
        <a href={props.twitter}></a> <i class="fab fa-twitter"></i>
        <a href={props.linkedin}></a> <i class="fab fa-linkedin"></i>
      </div>
    </div>
  );
}

MemberItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.string,
  ig: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
};

export default MemberItem;
