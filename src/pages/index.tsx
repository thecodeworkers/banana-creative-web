import { Navbar } from "@/components";
import Head from "next/head";
import { useRef } from "react";
import { Contact, Hero } from "@/containers";
import { useRouter } from "next/router";
import 'keen-slider/keen-slider.min.css';
import useTranslation from 'next-translate/useTranslation';

import styles from "./styles.module.scss";

import data from '../content/data'

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation('common');

  const processRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    process: processRef,
    services: servicesRef,
    contact: contactRef
  };

  return (
    <>
      <Head>
        <title>Banana Creative</title>
        {/*<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
        <meta
          name="description"
          content={data?.metadata.description}
          key="desc"
        />*/}
        <meta property="og:title" content="Banana Creative" />
        {/*<meta property="og:description" content={data?.metadata.description} />
        <meta property="og:image" content={data?.metadata.ogImage} />
        <meta property="og:url" content={`${router.route}`} />*/}
      </Head>

      <Navbar data={data?.navbar} refs={refs}/>

      

      <main className={styles._main}>

        <Hero action={contactRef}/>

        <h1 style={{color: "white", paddingTop: '20rem'}}>{t("welcome")}</h1>
        <Contact  {...data?.contactUs} {...data?.general} ref={contactRef} />
        
      </main>
    </>
  );
}
