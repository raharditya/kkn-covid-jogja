import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as LeftArrow } from "../assets/left-arrow.svg";
import { Link } from "react-router-dom";

function ArticleHeader(props) {
  return (
    <header style={{ backgroundImage: `url(${props.img})` }}>
      <div className="page-inner-wrapper">
        <div className="btn-container">
          <Link to="/edukasi">
            <div className="back-btn">
              <div className="btn-inner">
                <LeftArrow />
              </div>
            </div>
          </Link>
        </div>

        <h2 className="article-title">{props.title}</h2>
      </div>
    </header>
  );
}

ArticleHeader.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default ArticleHeader;
