import React from "react";
import PropTypes from "prop-types";

function InstagramContainer(props) {
  return (
    <div className="instagram-wrapper">
      <div className="profile-name">
        <img src={props.img} alt="" style={{ height: 70 }} />

        <h4>{props.name}</h4>
        <p style={{ fontSize: "0.9rem", color: "#a5a5a5" }}>{props.id}</p>
      </div>

      <a
        href="https://www.instagram.com/kkncoviduns_jogja/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <div className="profile-cta">Follow IG Kami!</div>
      </a>
    </div>
  );
}

InstagramContainer.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  post: PropTypes.string,
  follower: PropTypes.string,
  following: PropTypes.string,
};

export default InstagramContainer;
