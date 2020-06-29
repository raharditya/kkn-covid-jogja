import React from "react";

import AppNav from "../AppNav";
import PageHeader from "../PageHeader";
import InfoArticle from "../InfoArticle";

export default function Info() {
  return (
    <div class="page-wrapper">
      <div class="page-inner-wrapper">
        <AppNav />
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
