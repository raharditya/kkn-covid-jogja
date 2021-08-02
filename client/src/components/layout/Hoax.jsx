import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import Collapsible from "react-collapsible";

import SubpageHeader from "../SubpageHeader";
import AccordionContent from "../AccordionContent";
import AccordionTitle from "../AccordionTitle";

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
  const hoax = useFetch("https://kkn-covid-jogja.herokuapp.com/api/hoax");

  useEffect(() => {
    ReactGA.pageview("/hoax");
  }, []);

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
        {hoax.length !== 0 ? (
          hoax.map((item, i) => (
            <Collapsible
              key={i}
              trigger={<AccordionTitle title={item.title} />}
              triggerStyle={{ cursor: "pointer" }}
              transitionTime={200}
              easing="ease-in-out"
            >
              <AccordionContent source={item.source}>
                {item.content}
              </AccordionContent>
            </Collapsible>
          ))
        ) : (
          <>
            <Collapsible
              trigger={<AccordionTitle />}
              triggerStyle={{ cursor: "pointer" }}
              transitionTime={200}
              easing="ease-in-out"
            >
              <AccordionContent></AccordionContent>
            </Collapsible>
            <Collapsible
              trigger={<AccordionTitle />}
              triggerStyle={{ cursor: "pointer" }}
              transitionTime={200}
              easing="ease-in-out"
            >
              <AccordionContent></AccordionContent>
            </Collapsible>
            <Collapsible
              trigger={<AccordionTitle />}
              triggerStyle={{ cursor: "pointer" }}
              transitionTime={200}
              easing="ease-in-out"
            >
              <AccordionContent></AccordionContent>
            </Collapsible>
          </>
        )}
      </div>
    </div>
  );
}
