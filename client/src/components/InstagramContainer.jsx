import React from "react";
import PropTypes from "prop-types";

function InstagramContainer(props) {
  return (
    <div className="instagram-wrapper">
      <div className="profile-name">
        <img src={props.img} alt="" />
        <h4>{props.name}</h4>
      </div>

      <div className="profile-stats">
        <p>
          {props.post}
          <br />
          Posts
        </p>
        <p>
          {props.follower}
          <br />
          Follower
        </p>
        <p>
          {props.following}
          <br />
          Following
        </p>
      </div>

      <div className="profile-cta">Follow IG Kami!</div>
    </div>
  );
}

InstagramContainer.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  post: PropTypes.number,
  follower: PropTypes.number,
  following: PropTypes.number,
};

export default InstagramContainer;
