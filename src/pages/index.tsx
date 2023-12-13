import { Navbar, PopUp } from "@/components";
import Head from "next/head";
import { useRef } from "react";
import {
  Contact,
  Hero,
  SliderBanner,
  Process,
  VideoPlayer,
  Services,
  Testimonials,
  Clients,
} from "@/containers";
import { useRouter } from "next/router";
import "keen-slider/keen-slider.min.css";
import useTranslation from "next-translate/useTranslation";

import styles from "./styles.module.scss";

import data from "../content/data";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const processRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    process: processRef,
    services: servicesRef,
    contact: contactRef,
  };

  console.log(data.metadata)

  return (
    <>
      <Head>
        <title>{data?.metadata?.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
        <meta
          name="description"
          content="Banana Creative is a creative label focused on creating visual and functional universes to communicate real purposes"
          key="desc"
        />
        <meta property="og:title" content={data?.metadata?.title} />
        <meta property="og:description" content="Banana Creative is a creative label focused on creating visual and functional universes to communicate real purposes" />
        <meta property="og:image" content={data?.metadata.ogImage} />
        <meta property="og:url" content={`${router.route}`} />
      </Head>

      <div className={styles._zContainer}>
        <Navbar data={data?.navbar} refs={refs} />

        <PopUp {...data?.popup} />
      </div>

      <main className={styles._main}>
        <Hero action={contactRef} text={data?.hero} />

        <VideoPlayer video={data?.video} />

        <Process {...data?.process} ref={processRef} />

        <SliderBanner data={data?.sliderBanner} />

        <Services {...data?.services} ref={servicesRef} />

        <Testimonials data={data?.testimonials} />

        <Clients clients={data?.clients} />
      </main>

      <Contact {...data?.contactUs} {...data?.general} ref={contactRef} />
    </>
  );
}
