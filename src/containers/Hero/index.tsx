import React from "react";
import styles from "./styles.module.scss";
import { GeneralButton } from "@/components/";
import { scrolling } from "../../utils/common";
import useTranslation from "next-translate/useTranslation";

type textData = {
  mainTitle: string[],
  secondTitle: string[],
  smallText: string[]
}

type Props = {
  action: any,
  text: textData
}

const Hero = ({action, text}: Props) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles._hero}>
      <div className={styles._heroTextContainer}>
        <h1 className={styles._firstText}>
          {t(text?.mainTitle[0])}
          <br className={styles._lineBreak} />
          {t(text?.mainTitle[1])}
        </h1>
        <h1 className={styles._secondText}>
          {t(text?.secondTitle[0])}
          <br className={styles._lineBreak} />
          {t(text?.secondTitle[1])}
        </h1>
      </div>
      <p className={styles._smallText}>
        {text?.smallText.map((text, index)=>(
          <span key={index} className={styles._smallTextItem}>{t(text)}</span>
        ))}
      </p>
      <div className={styles._buttonContainer}>
        <GeneralButton method={() => scrolling(action)} text={t("contact")} />
      </div>
    </div>
  );
};

export default Hero;
