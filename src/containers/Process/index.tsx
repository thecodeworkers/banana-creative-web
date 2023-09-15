import React, { useState, useRef, forwardRef, useMemo } from "react";
import styles from "./styles.module.scss";
import { useKeenSlider } from "keen-slider/react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

const Process = forwardRef<HTMLDivElement>((props, ref) => {
  const containerRef = useRef(null);
  const { t } = useTranslation("common");
  const [current, setCurrent] = useState(0);

  const { figureMotion } = useMemo<any>(() => {
    const index = current.toString();
    const selection: any = {
      "0": {
        figureMotion: styles._circle,
      },
      "1": {
        figureMotion: styles._splash,
      },
      "2": {
        figureMotion: styles._star,
      },
    };
    return selection[index] || {};
  }, [current]);

  const { figure } = useMemo<any>(() => {
    const index = current.toString();
    const selection: any = {
      "0": {
        figure: null,
      },
      "1": {
        figure: <div className={styles._splashImage}><Image alt="splashFigure" src={'/resources/processMotion/splash.png'} fill/></div>,
      },
      "2": {
        figure: <div className={styles._starImage}><Image alt="starFigure" src={'/resources/processMotion/star.png'} fill/></div>,
      },
    };
    return selection[index] || {};
  }, [current]);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      defaultAnimation: {
        duration: 1500
      },
      slideChanged(slider) {
        setCurrent(slider.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = 2000;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, mouseOver);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = 6000;
            nextTimeout;
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = 2000;
            nextTimeout();
          });
          nextTimeout()
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={ref} className={styles._title}>
        {t("processMainTitle1")}<br className={styles._lineBreak}/>{t("processMainTitle2")}
      </div>
      <div
        ref={sliderRef}
        className={[styles._sliderContainer, "keen-slider"].join(" ")}
      >
        <a className={figureMotion}>{figure}</a>
        <div className={[styles._slide, "keen-slider__slide"].join(" ")}>
          <p className={styles._titleOver1}>Find</p>
          <p className={styles._titleUnder1}>It</p>
          <p className={styles._subtitle1}>{t("processSubtitle1")}</p>
          <p className={styles._text1}>{t("processText1")}</p>
        </div>
        <div className={[styles._slide, "keen-slider__slide"].join(" ")}>
          <p className={styles._titleUnder2}>Shape</p>
          <p className={styles._titleOver2}>It</p>
          <p className={styles._subtitle2}>{t("processSubtitle2")}</p>
          <p className={styles._text2}>{t("processText2")}</p>
        </div>
        <div className={[styles._slide, "keen-slider__slide"].join(" ")}>
          <p className={styles._titleOver3}>Blow It</p>
          <p className={styles._titleUnder3}>Up</p>
          <p className={styles._subtitle3}>{t("processSubtitle3")}</p>
          <p className={styles._text3}>{t("processText3")}</p>
        </div>
      </div>
    </>
  );
});

Process.displayName = "Process";

export default Process;
