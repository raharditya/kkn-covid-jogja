import React from "react";

import SubpageHeader from "../SubpageHeader";
import AccordionItem from "../AccordionItem";

export default function Hoax() {
  return (
    <div className="page-wrapper berita-subpage hoax-page">
      <SubpageHeader
        title="Anti Hoax"
        subtitle="Berbagai informasi viral yang sudah terbukti sebagai hoax"
      />

      <div className="page-inner-wrapper">
        <AccordionItem
          title="Apakah air bawang dapat menyembuhkan Covid-19"
          source="WHO"
        >
          <b>Tidak.</b> Sampai saat ini tidak ada publikasi yang mendukung
          statement ini. Berkumur air bawang tidak memiliki efek apapun dalam
          mencegah Covid-19
        </AccordionItem>

        <AccordionItem
          title="Apakah air bawang dapat menyembuhkan Covid-19"
          source="WHO"
        >
          <b>Tidak.</b> Sampai saat ini tidak ada publikasi yang mendukung
          statement ini. Berkumur air bawang tidak memiliki efek apapun dalam
          mencegah Covid-19
        </AccordionItem>

        <AccordionItem
          title="Apakah air bawang dapat menyembuhkan Covid-19"
          source="WHO"
        >
          <b>Tidak.</b> Sampai saat ini tidak ada publikasi yang mendukung
          statement ini. Berkumur air bawang tidak memiliki efek apapun dalam
          mencegah Covid-19
        </AccordionItem>
      </div>
    </div>
  );
}
