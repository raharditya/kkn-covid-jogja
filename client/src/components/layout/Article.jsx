import React from "react";

import ArticleHeader from "../ArticleHeader";

export default function Article() {
  return (
    <div className="page-wrapper berita-subpage single-article">
      <ArticleHeader
        img="https://i.picsum.photos/id/955/536/354.jpg?hmac=VBX9BX5b2VbR3R0TEovQD4cM5QKCPtdIw4feNlkdCiE"
        title="Bagaimana cara mencuci tangan yang benar?"
      />

      <div className="page-inner-wrapper">
        <div className="article-wrapper">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vel
            voluptas repellendus officiis commodi? Magnam quia quod facere
            repudiandae, optio iusto sit quaerat quae hic fugit tempora
            voluptatibus distinctio, perspiciatis, necessitatibus nesciunt animi
            quo soluta assumenda eum sint dolore aut!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            aliquam, autem corporis in quis earum distinctio accusantium ratione
            eos a illo quod eius quia quo, eligendi dolor sint dolorem non eum,
            ex totam alias. Eum!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            suscipit perferendis commodi amet, beatae inventore eius vel ipsa
            eum totam quos ex aut cupiditate fugit repellat dolor minima nam
            iure esse reprehenderit, nobis voluptatum excepturi! Non id
            mollitia, numquam rem quod molestias nisi quaerat voluptatum?
          </p>
        </div>
      </div>
    </div>
  );
}
