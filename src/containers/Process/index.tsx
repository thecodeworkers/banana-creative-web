import React, { useState, useRef, forwardRef, useMemo } from "react";
import styles from "./styles.module.scss";
import { useKeenSlider } from "keen-slider/react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

type Props = {
  title: string[];
  firstSlide: {
    subtitle: string;
    paragraph: string
  };
  secondSlide: {
    subtitle: string;
    paragraph: string
  };
  thirdSlide: {
    subtitle: string;
    paragraph: string
  }
}

const Process = forwardRef<HTMLDivElement>((data: any, ref) => {
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
        figure: <div className={styles._starImageCircle}><Image alt="starFigure" src={'/resources/processMotion/star.svg'} fill priority/></div>,
      },
      "1": {
        figure: <div className={styles._splashImage}><Image alt="splashFigure" src={'/resources/processMotion/splash.svg'} fill priority/></div>,
      },
      "2": {
        figure: <div>
          <div className={styles._positionAbsolute}><div className={styles._splashOutro}><Image alt="splashFigure" src={'/resources/processMotion/splash.svg'} fill/></div></div>
          <div className={styles._starIntro}><Image alt="starFigure" src={'/resources/processMotion/star.svg'} fill priority/></div>
          </div>,
      },
    };
    return selection[index] || {};
  }, [current]);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      defaultAnimation: {
        duration: 1000
      },
      slideChanged(slider) {
        setCurrent(slider.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = 1500;
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
            mouseOver = 5000;
            nextTimeout;
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = 1500;
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
        {t(data?.title[0])}<br className={styles._lineBreak}/>{t(data?.title[1])}
      </div>
      <div
        ref={sliderRef}
        className={[styles._sliderContainer, "keen-slider"].join(" ")}
      >
        <div className={figureMotion}>{figure}</div>
        <div className={[styles._slide, "keen-slider__slide"].join(" ")}>
          <p className={styles._titleOver1}>Find</p>
          <p className={styles._titleUnder1}>It</p>
          <p className={styles._subtitle1}>{t(data?.firstSlide?.subtitle)}</p>
          <p className={styles._text1}>{t(data?.firstSlide?.paragraph)}</p>
        </div>
        <div className={[styles._slide, "keen-slider__slide"].join(" ")}>
          <p className={styles._titleUnder2}>Shape</p>
          <p className={styles._titleOver2}>It</p>
          <p className={styles._subtitle2}>{t(data?.secondSlide?.subtitle)}</p>
          <p className={styles._text2}>{t(data?.secondSlide?.paragraph)}</p>
        </div>
        <div className={[styles._slide, "keen-slider__slide"].join(" ")}>
          <p className={styles._titleOver3}>Blow It</p>
          <p className={styles._titleUnder3}>Up</p>
          <p className={styles._subtitle3}>{t(data?.thirdSlide?.subtitle)}</p>
          <p className={styles._text3}>{t(data?.thirdSlide?.paragraph)}</p>
        </div>
      </div>
    </>
  );
});

Process.displayName = "Process";

export default Process;
