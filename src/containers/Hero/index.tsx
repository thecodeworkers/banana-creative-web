import React from "react";
import styles from "./styles.module.scss";
import { GeneralButton } from "@/components/";
import { scrolling } from "../../utils/common";
import useTranslation from "next-translate/useTranslation";

const Hero = ({ action }: any) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles._hero}>
      <h1 className={styles._firstText}>{t("heroFirstText")}</h1>
      <h1 className={styles._secondText}>{t("heroSecondText")}</h1>
      <p className={styles._smallText}>{t("heroSmallText")}</p>
      <div className={styles._buttonContainer}>
        <GeneralButton method={() => scrolling(action)} text={t("contact")} />
      </div>
    </div>
  );
};

export default Hero;
