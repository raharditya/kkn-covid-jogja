import React, { useEffect } from "react";

import PageHeader from "../PageHeader";
import InfoArticle from "../InfoArticle";
import InfoHeadline from "../InfoHeadline";
import articles from "../../articles/combineArticles";

export default function Info(props) {
  useEffect(() => {
    props.setNav(true);
  }, [props]);

  const articlesList = articles.reverse().map((article, i) => {
    if (i === 0) {
      return (
        <InfoHeadline
          title={article.title}
          thumbnail={article.img}
          url={article.url}
        />
      );
    } else {
      return (
        <InfoArticle
          title={article.title}
          thumbnail={article.img}
          url={article.url}
        />
      );
    }
  });

  return (
    <div className="page-wrapper">
      <div className="page-inner-wrapper">
        <PageHeader
          title="Edukasi"
          subtitle="Berbagai artikel mengenai pengetahuan pencegahan Covid-19"
        />

        <div className="article-container">{articlesList}</div>
      </div>
    </div>
  );
}
