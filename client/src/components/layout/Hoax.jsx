import React, { useEffect } from "react";
// import { Accordion } from "react-accessible-accordion";
import Accordion from "@material-ui/core/Accordion";

import SubpageHeader from "../SubpageHeader";
import AccordionSingle from "../AccordionSingle";

export default function Hoax(props) {
  useEffect(() => {
    props.setNav(false);
  }, [props]);

  return (
    <div className="page-wrapper berita-subpage hoax-page">
      <SubpageHeader
        title="Anti Hoax"
        subtitle="Berbagai informasi viral yang sudah terbukti sebagai hoax"
      />

      <div className="page-inner-wrapper">
        {/* <Accordion> */}
        <AccordionSingle
          title="Apakah air bawang dapat menyembuhkan Covid-19"
          source="WHO"
        >
          <b>Tidak.</b> Sampai saat ini tidak ada publikasi yang mendukung
          statement ini. Berkumur air bawang tidak memiliki efek apapun dalam
          mencegah Covid-19
        </AccordionSingle>

        <AccordionSingle
          title="Apakah air bawang dapat menyembuhkan Covid-19"
          source="WHO"
        >
          <b>Tidak.</b> Sampai saat ini tidak ada publikasi yang mendukung
          statement ini. Berkumur air bawang tidak memiliki efek apapun dalam
          mencegah Covid-19
        </AccordionSingle>

        <AccordionSingle
          title="Apakah air bawang dapat menyembuhkan Covid-19"
          source="WHO"
        >
          <b>Tidak.</b> Sampai saat ini tidak ada publikasi yang mendukung
          statement ini. Berkumur air bawang tidak memiliki efek apapun dalam
          mencegah Covid-19
        </AccordionSingle>
        {/* </Accordion> */}
      </div>
    </div>
  );
}
