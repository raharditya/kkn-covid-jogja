import React from "react";

const article1 = (
  <>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vel
      voluptas repellendus officiis commodi? Magnam quia quod facere
      repudiandae, optio iusto sit quaerat quae hic fugit tempora voluptatibus
      distinctio, perspiciatis, necessitatibus nesciunt animi quo soluta
      assumenda eum sint dolore aut!
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam,
      autem corporis in quis earum distinctio accusantium ratione eos a illo
      quod eius quia quo, eligendi dolor sint dolorem non eum, ex totam alias.
      Eum!
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
      suscipit perferendis commodi amet, beatae inventore eius vel ipsa eum
      totam quos ex aut cupiditate fugit repellat dolor minima nam iure esse
      reprehenderit, nobis voluptatum excepturi! Non id mollitia, numquam rem
      quod molestias nisi quaerat voluptatum?
    </p>
  </>
);

const article2 = (
  <>
    <p>
      Ini adalah contoh dari artikel nomor dua. Entah ini isinya apaan tapi ya
      begini lah. Ini kan cuma buat testing testing doang, tulisannya ini kan ga
      dibawa jadi yaudah lah ya.
    </p>
    <p>
      Ini adalah contoh dari artikel nomor dua. Entah ini isinya apaan tapi ya
      begini lah. Ini kan cuma buat testing testing doang, tulisannya ini kan ga
      dibawa jadi yaudah lah ya.
    </p>
    <p>
      Ini adalah contoh dari artikel nomor dua. Entah ini isinya apaan tapi ya
      begini lah. Ini kan cuma buat testing testing doang, tulisannya ini kan ga
      dibawa jadi yaudah lah ya.
    </p>
  </>
);

const article3 = (
  <>
    <p>
      Pemda DIY mengumumkan 6 kasus baru Covid-19 di DIY dari pemeriksaan 1.525
      sampel di berbagai lab yang ada di DIY dan Jakarta. Detilnya kasus 317
      perempuan usia 40 tahun warga Sleman riwayat menunggu ibu di ICU RS, kasus
      318 perempuan usia 36 tahun warga Gunungkidul riwayat perjalanan Surabaya,
    </p>
    <p>
      kasus 319 laki-laki usia 27 tahun warga Sleman riwayat pernah kontak
      pasien positif, kasus 320 laki-laki usia 59 tahun warga Gunungkidul
      riwayat masih dalam penelusuran. Selanjutnya, kasus 321 perempuan usia 24
      tahun warga Bantul riwayat dalam penelusuran, dan kasus 322 laki-laki usia
      20 tahun warga Bantul riwayat pekerjaan di Balikpapan.
    </p>
    <p>
      "Kasus 195 perempuan usia 28 tahun warga Bantul, kasus 238 laki-laki usia
      32 tahun warga Bantul, kasus 254 laki-laki usia 50 tahun warga Sleman,
      kasus 284 laki-laki usia 37 tahun warga Sleman, dan kasus 296 laki-laki
      usi 59 tahun warga Sleman," bebernya.
    </p>
  </>
);

const articles = [
  {
    title: "Bagaimana cara mencuci tangan yang benar?",
    url: "/bagaimana-cara-mencuci-tangan-yang-benar",
    content: article1,
    img:
      "https://i.picsum.photos/id/955/536/354.jpg?hmac=VBX9BX5b2VbR3R0TEovQD4cM5QKCPtdIw4feNlkdCiE",
  },
  {
    title: "Hindari Covid-19 dengan cara-cara berikut ini",
    url: "/hindari-covid19-dengan-cara-cara-berikut-ini",
    content: article2,
    img:
      "https://i.picsum.photos/id/425/536/354.jpg?hmac=wBNHXWWIrsjZJiC-motCXU36RWkqnUAAPfVJulwHGHM",
  },
  {
    title: "Update terbaru Covid-19 di Yogyakarta",
    url: "/update-terbaru-virus-corona-di-yogyakarta",
    content: article3,
    img:
      "https://i.picsum.photos/id/527/536/354.jpg?hmac=kWHZeY7-cN6JqMJipaChyWZA6u2Li3XzGrNZ7IJpi2s",
  },
];

export default articles;
