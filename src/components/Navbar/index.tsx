import Image from "next/image";
import React, { FC, useState } from "react";
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
  const [language, useLanguage] = useState<string>("ENG");

  const { t } = useTranslation("common");

  const SetEng = () => {
    useLanguage("ENG");
  };
  const SetEsp = () => {
    useLanguage("ESP");
  };

  const ChangeLang = () => {
    if (language === "ENG") {
      SetEsp();
      setLanguage("es");
    } else {
      SetEng();
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
            <div>{t("welcome")}</div>
            {data?.routes?.map((route: any, index: number | string) => (
              <p
                key={index}
                className={styles._text}
                onClick={() =>
                  scrolling(refs[route?.ref as keyof ScrollOption])
                }
              >
                {route?.name}
              </p>
            ))}
            <div className={styles._packs}>
              <DropMenu packs={data?.packs} />
            </div>
            <div className={styles._textLang} onClick={() => ChangeLang()}>
              {language}
            </div>
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
                    {route?.name}
                  </p>
                </div>
              ))}
              <div className={styles._textContainer}>
                <DropMenu packs={data?.packs} />
              </div>
              <div className={styles._textLang} onClick={() => ChangeLang()}>
                {language}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
