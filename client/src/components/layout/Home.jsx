import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import HomeNav from "../HomeNav";
import PageHeader from "../PageHeader";
import SectionHeader from "../SectionHeader";
import ProvinceStats from "../ProvinceStats";
import RegencyStats from "../RegencyStats";
import { Accordion } from "react-accessible-accordion";

function useFetch(url) {
  const [covidData, setCovid] = useState([]);
  useEffect(() => {
    async function getNews() {
      const data = await fetch(url).then((res) => res.json());
      setCovid(data);
    }

    getNews();
  }, [url]);

  return covidData;
}

export default function Home(props) {
  const kabupatenData = useFetch("/api/covid/kabupaten");

  function kabupatenOutput() {
    if (!kabupatenData) {
      return (
        <>
          <RegencyStats />
          <RegencyStats />
          <RegencyStats />
          <RegencyStats />
        </>
      );
    }

    let kabupatenList;

    if (kabupatenData) {
      kabupatenList = kabupatenData.map((kab) => {
        return (
          <RegencyStats
            area={kab.nameKab}
            active={kab.activeKab}
            odp={kab.odpKab}
            pdp={kab.pdpKab}
            kecamatan={kab.kecamatan}
            key={kab.nameKab}
          />
        );
      });

      return kabupatenList;
    }
  }

  const [homeMenu, setHomeMenu] = useState("province");

  function homeNavHandle(pos) {
    setHomeMenu(pos);
  }

  useEffect(() => {
    props.setNav(true);
  }, [props]);

  return (
    <div className="page-wrapper">
      <div className="page-inner-wrapper">
        <PageHeader title="Beranda" />

        <HomeNav pos={homeMenu} homeNavHandle={homeNavHandle} />

        <section className="sebaran-provinsi">
          <CSSTransition
            in={homeMenu === "province"}
            timeout={500}
            unmountOnExit
            classNames="home-province"
          >
            <div className="province">
              <SectionHeader title="Sebaran Covid-19" subtitle="Provinsi DIY" />
              <ProvinceStats active={53} recovered={103} deaths={8} daily={3} />

              <SectionHeader
                title="Grafik Pasien Covid-19"
                subtitle="Provinsi DIY"
              />

              <div className="placeholder"></div>

              <div className="more-wrapper">
                <a
                  href="https://corona.jogjaprov.go.id/data-statistik"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="chart-more"
                >
                  Lebih Lengkap
                </a>
              </div>

              <small className="data-update">
                Update terakhir: 11 Juni 2020
              </small>
            </div>
          </CSSTransition>

          <CSSTransition
            in={homeMenu === "regency"}
            timeout={500}
            unmountOnExit
            classNames="home-regency"
          >
            <div className="regency">
              <SectionHeader
                title="Sebaran Covid-19"
                subtitle="Per Kabupaten"
              />

              <div className="kabupaten-wrapper">
                <Accordion allowZeroExpanded={true}>
                  {kabupatenOutput()}
                </Accordion>
              </div>
            </div>
          </CSSTransition>
        </section>
      </div>
    </div>
  );
}
