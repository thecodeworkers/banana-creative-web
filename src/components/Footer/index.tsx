import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import { Icon } from "@iconify/react";
import useTranslation from "next-translate/useTranslation";

const Footer = ({ copyright, phone, media, mediaText, message, mail }: any) => {
  const { t } = useTranslation("common");

  const bookACall = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`);
  };
  const mailTo = () => {
    window.open(`mailto:${mail}`);
  };

  return (
    <div className={styles._content}>
      <div className={styles._textBox}>
        <div className={styles._textContainer}>
          <p className={styles._text}>{copyright}</p>
        </div>
        <div className={styles._iconContainer}>
          <div className={styles._icons} onClick={() => bookACall()}>
            <Icon icon="mdi:whatsapp" width={22} />
          </div>
          <div className={styles._icons} onClick={() => mailTo()}>
            <Icon icon="material-symbols:mail-outline-rounded" width={22} />
          </div>
          {/* <p className={styles._text}>{phone}</p> */}
        </div>
      </div>
      <div className={styles._mediaContainer}>
        <p className={styles._text}>{t(mediaText)}</p>

        <div className={styles._iconsContainer}>
          {media?.map((media: any, index: number | string) => (
            <div key={index} className={styles._icon}>
              <a href={media?.link} target="_blank" rel="noreferrer">
                <Image
                  src={media?.image}
                  alt={media?.alt}
                  width={19}
                  height={15}
                  quality={100}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
