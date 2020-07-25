import React from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

function InstagramContainer(props) {
  let post = [];
  let follower = [];
  let following = [];

  if (props.post) {
    post = props.post.split(" ");
    follower = props.follower.split(" ");
    following = props.following.split(" ");
  }

  return (
    <div className="instagram-wrapper">
      <div className="profile-name">
        {<img src={props.img} alt="" style={{ height: 70 }} /> || (
          <Skeleton circle={true} width={70} height={70} />
        )}
        <h4>{props.name || <Skeleton />}</h4>
      </div>

      <div className="profile-stats">
        <p>
          {post[0] || <Skeleton />}
          <br />
          {post[1] || <Skeleton />}
        </p>
        <p>
          {follower[0] || <Skeleton />}
          <br />
          {follower[1] || <Skeleton />}
        </p>
        <p>
          {following[0] || <Skeleton />}
          <br />
          {following[1] || <Skeleton />}
        </p>
      </div>

      <a
        href="https://www.instagram.com/kkncoviduns.jogja/"
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
