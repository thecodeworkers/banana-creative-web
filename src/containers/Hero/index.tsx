import React from "react";
import styles from "./styles.module.scss";
import { GeneralButton } from "@/components/";
import { scrolling } from "../../utils/common";
import useTranslation from "next-translate/useTranslation";

const Hero = ({ action }: any) => {
  const { t } = useTranslation("common");

  const smallTextArr = [
    "heroSmallText1",
    "heroSmallText2",
    "heroSmallText3",
    "heroSmallText4",
    "heroSmallText5",
    "heroSmallText6",
    "heroSmallText7",
  ];

  return (
    <div className={styles._hero}>
      <div className={styles._heroTextContainer}>
        <h1 className={styles._firstText}>
          {t("heroFirstText1")}
          <br className={styles._lineBreak} />
          {t("heroFirstText2")}
        </h1>
        <h1 className={styles._secondText}>
          {t("heroSecondText1")}
          <br className={styles._lineBreak} />
          {t("heroSecondText2")}
        </h1>
      </div>
      <div className={styles._smallText}>
        {smallTextArr.map((text, index)=>(
          <p key={index} className={styles._smallTextItem}>{t(text)}</p>
        ))}
      </div>
      <div className={styles._buttonContainer}>
        <GeneralButton method={() => scrolling(action)} text={t("contact")} />
      </div>
    </div>
  );
};

export default Hero;
