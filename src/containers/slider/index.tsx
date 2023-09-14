import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";

const Slider = () => {
  const { t } = useTranslation("common");
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        spacing: 1,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
        <div ref={sliderRef} className="keen-slider">
          <div className={[styles._slide, "keen-slider__slide"].join(" ")}>
            <p className={styles._textOver}>Find</p>
            <p className={styles._textUnder}>It</p>
            <p>{t("processText1")}</p>
          </div>
          <div className={[styles._slide, "keen-slider__slide"].join(" ")}>
            <p className={styles._textUnder}>Shape</p>
            <p className={styles._textOver}>It</p>
            <p>{t("processText2")}</p>
          </div>
          <div className={[styles._slide, "keen-slider__slide"].join(" ")}>
            <p className={styles._textOver}>Blow It</p>
            <p className={styles._textUnder}>Up</p>
            <p>{t("processText3")}</p>
          </div>
        </div>
    </>
  );
};

export default Slider;
