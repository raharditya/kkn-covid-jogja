import React from "react";
import PropTypes from "prop-types";

function InstagramContainer(props) {
  return (
    <div class="instagram-wrapper">
      <div class="profile-name">
        <img src={props.img} alt="" />
        <h4>{props.name}</h4>
      </div>

      <div class="profile-stats">
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

      <div class="profile-cta">Follow IG Kami!</div>
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
