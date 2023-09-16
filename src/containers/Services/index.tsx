import React, { useMemo } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

type service = {
  name: string;
  image: string;
  subdomain: string;
};

type Data = {
  data: {
    title: string;
    dataArr: service[];
  };
};

const Services = ({ data }: Data) => {
  const { t } = useTranslation("common");

  const style = (subdomain: string) => {
    const selection: any = {
      "design": {
        style: styles._design,
      },
      "motion": {
        style: styles._motion,
      },
      "tech": {
        style: styles._tech,
      },
      "prod": {
        style: styles._prod,
      },
      "comms": {
        style: styles._comms,
      },
    };
    return selection[subdomain].style || '';
  }

  return (
    <div className={styles._serviceContainer}>
      <div className={styles._title}>{t(data?.title)}</div>
      {data?.dataArr.map((service, index) => (
        <Link
          key={index}
          href={`https://${service.subdomain}.bananacreative.io`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles._link}
        >
          {service.name}
          <div className={style(service.subdomain)}>
            <div className={styles._image}>
              <Image alt={service.name} src={service.image} fill />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Services;
