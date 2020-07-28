import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import HomeNav from "../HomeNav";
import PageHeader from "../PageHeader";
import SectionHeader from "../SectionHeader";
import ProvinceStats from "../ProvinceStats";
import RegencyStats from "../RegencyStats";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Collapsible from "react-collapsible";
import SubdistrictStats from "../SubdistrictStats";
import HomeChart from "../HomeChart";

function useFetch(url) {
  const [covidData, setCovid] = useState([]);
  useEffect(() => {
    async function getNews() {
      const data = await fetch(url).then((res) => res.json());
      console.log(data);
      setCovid(data);
    }

    getNews();
  }, [url]);

  return covidData;
}

function KabupatenOffline() {
  return (
    <Collapsible
      trigger={<RegencyStats />}
      triggerStyle={{ cursor: "pointer" }}
      transitionTime={300}
      easing="ease-in-out"
    >
      <SubdistrictStats />
    </Collapsible>
  );
}

export default function Home(props) {
  const kabupatenData = useFetch(
    "//kkn-covid-jogja.herokuapp.com/api/covid/kabupaten"
  );
  const provinsiData = useFetch(
    "//kkn-covid-jogja.herokuapp.com/api/covid/provinsi"
  );

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
            classNames="home-province"
          >
            <div className="province">
              <SectionHeader title="Sebaran Covid-19" subtitle="Provinsi DIY" />
              {provinsiData ? (
                <ProvinceStats
                  active={provinsiData.activeProv}
                  recovered={provinsiData.recoveredProv}
                  deaths={provinsiData.deathProv}
                  daily={
                    provinsiData.length !== 0 &&
                    provinsiData.daily[provinsiData.daily.length - 1]
                      .activeDaily -
                      provinsiData.daily[provinsiData.daily.length - 2]
                        .activeDaily
                  }
                />
              ) : (
                <ProvinceStats />
              )}

              <SectionHeader
                title="Grafik Pasien Covid-19"
                subtitle="Provinsi DIY"
              />

              <HomeChart data={provinsiData.daily} />

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
                Update terakhir:{" "}
                {provinsiData.length !== 0 ? (
                  provinsiData.daily[provinsiData.daily.length - 1].date
                ) : (
                  <Skeleton width={80} />
                )}
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
                {kabupatenData.length !== 0
                  ? kabupatenData.map((kab) => {
                      return (
                        <Collapsible
                          key={kab.nameKab}
                          trigger={
                            <RegencyStats
                              area={kab.nameKab}
                              active={kab.activeKab}
                              odp={kab.odpKab}
                              pdp={kab.pdpKab}
                            />
                          }
                          triggerStyle={{ cursor: "pointer" }}
                          transitionTime={300}
                          easing="ease-in-out"
                        >
                          <SubdistrictStats kecamatan={kab.kecamatan} />
                        </Collapsible>
                      );
                    })
                  : Array.from({ length: 5 }, (_, index) => (
                      <KabupatenOffline key={index} />
                    ))}

                <small className="data-update" style={{ marginTop: "2rem" }}>
                  {kabupatenData.length !== 0 ? (
                    kabupatenData[0].lastUpdate
                  ) : (
                    <>
                      <SkeletonTheme color="#E4E4E4" highlightColor="#EBEBEB">
                        <span>Data Update </span>
                        <Skeleton width={80} />
                      </SkeletonTheme>
                    </>
                  )}
                </small>
              </div>
            </div>
          </CSSTransition>
        </section>
      </div>
    </div>
  );
}
