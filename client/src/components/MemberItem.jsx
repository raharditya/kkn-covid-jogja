import React from "react";
import PropTypes from "prop-types";

function MemberItem(props) {
  return (
    <div className="member-item">
      <img src={props.img} alt="Foto profil anggota kelompok KKN" />

      <h4>{props.name}</h4>

      {props.children}

      <div className="member-item-social">
        {props.ig && (
          <a href={props.ig} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        )}

        {props.twitter && (
          <a href={props.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        )}

        {props.linkedin && (
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        )}

        {props.github && (
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        )}
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
