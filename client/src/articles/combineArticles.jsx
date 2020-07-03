import React from "react";

import article from "./article1_pencegahan-covid";

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
  article,
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
