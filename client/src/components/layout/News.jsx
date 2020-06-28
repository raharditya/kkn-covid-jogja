import React, { useState, useEffect } from "react";
import PageHeader from "../PageHeader";
import NewsMenu from "../NewsMenu";
import NewsSelect from "../NewsSelect";
import NewsItem from "../NewsItem";

function useFetch() {
  const [newsData, setNews] = useState();
  useEffect(() => {
    async function getNews() {
      const data = await fetch("/api/berita").then((res) => res.json());
      console.log(data);
      setNews(data);
    }

    getNews();
  }, []);

  return newsData;
}

export default function News() {
  useFetch();

  return (
    <div class="page-wrapper">
      <div class="page-inner-wrapper berita-inner">
        <div class="header-static-section">
          <PageHeader
            title="Berita"
            subtitle="Kumpulan berita lokal dan informasi hoaks terbaru, semua dari
              sumber terpercaya."
          />

          <NewsMenu />
        </div>
      </div>

      <div className="berita-container">
        <div className="berita-wrapper">
          <div className="scroll-indicator"></div>

          <NewsSelect />

          <div className="berita-item-wrapper">
            <NewsItem
              title="Waspada! Ini 57 Daerah yang Berisiko Tinggi Covid-19"
              date="19 Jam yang lalu"
              excerpt="Pemda DIY mencatat ada tambahan satu kasus positif dan dua kasus
                sembuh virus Corona, sehingga saat ini ada 273 positif dan 213
                kasus sembuh di DIY."
            />
            <NewsItem
              title="Waspada! Ini 57 Daerah yang Berisiko Tinggi Covid-19"
              date="19 Jam yang lalu"
              excerpt="Pemda DIY mencatat ada tambahan satu kasus positif dan dua kasus
                sembuh virus Corona, sehingga saat ini ada 273 positif dan 213
                kasus sembuh di DIY."
            />
            <NewsItem
              title="Waspada! Ini 57 Daerah yang Berisiko Tinggi Covid-19"
              date="19 Jam yang lalu"
              excerpt="Pemda DIY mencatat ada tambahan satu kasus positif dan dua kasus
                sembuh virus Corona, sehingga saat ini ada 273 positif dan 213
                kasus sembuh di DIY."
            />
            <NewsItem
              title="Waspada! Ini 57 Daerah yang Berisiko Tinggi Covid-19"
              date="19 Jam yang lalu"
              excerpt="Pemda DIY mencatat ada tambahan satu kasus positif dan dua kasus
                sembuh virus Corona, sehingga saat ini ada 273 positif dan 213
                kasus sembuh di DIY."
            />
            <NewsItem
              title="Waspada! Ini 57 Daerah yang Berisiko Tinggi Covid-19"
              date="19 Jam yang lalu"
              excerpt="Pemda DIY mencatat ada tambahan satu kasus positif dan dua kasus
                sembuh virus Corona, sehingga saat ini ada 273 positif dan 213
                kasus sembuh di DIY."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
