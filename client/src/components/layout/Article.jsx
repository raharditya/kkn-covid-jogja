import React, { useEffect } from "react";

import ArticleHeader from "../ArticleHeader";

export default function Article(props) {
  useEffect(() => {
    props.setNav(false);
  }, [props]);

  return (
    <div className="page-wrapper berita-subpage single-article">
      <ArticleHeader img={props.img} title={props.title} />

      <div className="page-inner-wrapper">
        <div className="article-wrapper">{props.content}</div>
      </div>
    </div>
  );
}
