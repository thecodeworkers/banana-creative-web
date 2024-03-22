import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { GeneralButton } from "@/components";
import useTranslation from "next-translate/useTranslation";

type pack = {
  alt: string;
  desktop: string;
  mobile: string;
  desktopEsp: string;
  mobileEsp: string;
  subdomain: string;
};

type data = {
  data: pack[];
};

const SliderBanner = ({ data }: data) => {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation("common");
  const ENG: Boolean = (t("language") === "ENG")

  const goTo = (subdomain: string) => {
    window.open(`https://${subdomain}.bananacreative.io`, 'noopener,noreferrer,nofollow')
  }

  const slidesArr = data?.map((pack, index) => (
    <div key={index} className={[styles._slide, "keen-slider__slide"].join(" ")}>
      <div className={styles._image}>
        <Image src={ENG ? pack?.desktop : pack?.desktopEsp} alt={pack?.alt} fill />
      </div>
      <div className={styles._imageMobile}>
        <Image src={ENG ? pack?.mobile : pack?.mobileEsp} alt={pack?.alt} fill />
      </div>

      <div className={styles._button}>
        <GeneralButton
          text={t("pricing")}
          method={()=>goTo(pack?.subdomain)}
        />
      </div>
    </div>
  ));

  const dots = () => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(i);
    }
    return arr.map((dot) => (
      <button
        key={dot}
        onClick={() => instanceRef.current?.moveToIdx(dot)}
        className={current === dot ? styles._dotOn : styles._dotOff}
        aria-label="Choose slide"
      ></button>
    ));
  };

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        spacing: 20
      },
      defaultAnimation: {
        duration: 1000,
      },
      slideChanged(slider) {
        setCurrent(slider.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = 3000;
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
            mouseOver = 4000;
            nextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = 3000;
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
      <div
        ref={sliderRef}
        className={[styles._packsContainer, "keen-slider"].join(" ")}
      >
        {slidesArr}
      </div>
      <div className={styles._dotGroup}>{dots()}</div>
    </>
  );
};

export default SliderBanner;
