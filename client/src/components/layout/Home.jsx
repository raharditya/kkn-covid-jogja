import React from "react";

import HomeNav from "../HomeNav";
import PageHeader from "../PageHeader";
import SectionHeader from "../SectionHeader";
import ProvinceStats from "../ProvinceStats";

export default function Home() {
  return (
    <div class="page-wrapper">
      <div class="page-inner-wrapper">
        <PageHeader title="Beranda" />

        <HomeNav />

        <section className="sebaran-provinsi">
          <SectionHeader title="Sebaran Covid-19" subtitle="Provinsi DIY" />
          <ProvinceStats active={53} recovered={103} deaths={8} daily={3} />

          <SectionHeader
            title="Grafik Pasien Covid-19"
            subtitle="Provinsi DIY"
          />

          <div className="placeholder"></div>

          <div class="more-wrapper">
            <a
              href="https://corona.jogjaprov.go.id/data-statistik"
              target="_blank"
              rel="noreferrer noopener"
              class="chart-more"
            >
              Lebih Lengkap
            </a>
          </div>

          <small class="data-update">Update terakhir: 11 Juni 2020</small>
        </section>
      </div>
    </div>
  );
}
