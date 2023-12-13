import Image from "next/image";
import React, { FC, useMemo, useRef, useState } from "react";
import { scrolling } from "../../utils/common";
import styles from "./styles.module.scss";
import DropMenu from "../DropMenu";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";

type Props = {
  data: any;
  refs: {
    process: any;
    services: any;
    contact: any;
  };
};

type ScrollOption = {
  process: any;
  services: any;
  contact: any;
};

const Navbar: FC<Props> = ({ data, refs }) => {
  const [show, setShow] = useState<boolean>(false);
  const { t } = useTranslation("common");
  const language = t("language");

  const ChangeLang = () => {
    if (language === "ENG") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  };

  const handleShowMenu = () => setShow((show) => !show);

  return (
    <>
      <div className={styles._navbar}>
        <div className={styles._content}>
          <div className={styles._imageBox}>
            <Image
              src={"/resources/header/logo.svg"}
              alt={"Banana Creative Logo"}
              width={200}
              height={37}
              quality={100}
            />
          </div>
          <div className={styles._imageBoxResponsive}>
            <Image
              src={"/resources/header/logoResponsive.svg"}
              alt={"Banana Creative Logo"}
              width={150}
              height={26}
              quality={100}
            />
          </div>

          <div className={styles._textBox}>
            {data?.routes?.map((route: any, index: number | string) => (
              <p
                key={index}
                className={styles._text}
                onClick={() =>
                  scrolling(refs[route?.ref as keyof ScrollOption])
                }
              >
                {t(route?.name)}
              </p>
            ))}
            <span className={styles._packs}>
              <DropMenu {...data?.packNav} />
            </span>
            <button className={styles._textLang} onClick={() => ChangeLang()}>
              {language}
            </button>
          </div>

          <button
            className={!show ? styles._menuBurguer : styles._closedMenu}
            onClick={handleShowMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>

          {show && (
            <div className={styles._menu}>
              {data?.routes?.map((route: any, index: number | string) => (
                <div key={index} className={styles._textContainer}>
                  <p
                    className={styles._text}
                    onClick={() => {
                      scrolling(refs[route?.ref as keyof ScrollOption]);
                      setShow(false);
                    }}
                  >
                    {t(route?.name)}
                  </p>
                </div>
              ))}
              <span className={styles._textContainer}>
                <DropMenu {...data?.packs} />
              </span>
              <button className={styles._textLang} onClick={() => ChangeLang()}>
                {t("language")}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
