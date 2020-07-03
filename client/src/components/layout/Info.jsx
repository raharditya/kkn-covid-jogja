import React, { useEffect } from "react";

import PageHeader from "../PageHeader";
import InfoArticle from "../InfoArticle";

export default function Info(props) {
  useEffect(() => {
    props.setNav(true);
  }, [props]);

  return (
    <div className="page-wrapper">
      <div className="page-inner-wrapper">
        <PageHeader
          title="Edukasi"
          subtitle="Berbagai artikel mengenai pengetahuan pencegahan Covid-19"
        />

        <div className="article-container-grid">
          <InfoArticle
            title="Mencuci tangan yang baik dan benar"
            thumbnail="https://picsum.photos/id/1005/200/300"
          />
          <InfoArticle
            title="Mencuci tangan yang baik dan benar"
            thumbnail="https://picsum.photos/id/1013/200/300"
          />
          <InfoArticle
            title="Mencuci tangan yang baik dan benar"
            thumbnail="https://picsum.photos/id/1008/200/300"
          />
          <InfoArticle
            title="Mencuci tangan yang baik dan benar"
            thumbnail="https://picsum.photos/id/1015/200/300"
          />
          <InfoArticle
            title="Mencuci tangan yang baik dan benar"
            thumbnail="https://picsum.photos/id/109/200/300"
          />
        </div>
      </div>
    </div>
  );
}
