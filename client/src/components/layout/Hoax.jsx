import React, { useEffect, useState } from "react";
import { Accordion } from "react-accessible-accordion";

import SubpageHeader from "../SubpageHeader";
import AccordionSingle from "../AccordionSingle";

function useFetch(url) {
  const [hoaxData, setHoax] = useState([]);
  useEffect(() => {
    async function getNews() {
      const data = await fetch(url).then((res) => res.json());
      setHoax(data);
    }

    getNews();
  }, [url]);

  return hoaxData;
}

export default function Hoax(props) {
  const hoax = useFetch("/api/hoax");

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
        <Accordion allowZeroExpanded={true}>
          {hoax ? (
            hoax.map((item, i) => (
              <AccordionSingle key={i} title={item.title} source={item.source}>
                {item.content}
              </AccordionSingle>
            ))
          ) : (
            <>
              <AccordionSingle />
              <AccordionSingle />
            </>
          )}
        </Accordion>
      </div>
    </div>
  );
}
