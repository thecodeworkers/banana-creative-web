import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { GeneralButton } from "@/components";
import { ArrowLeft, ArrowRight } from "../../../public/resources/svg";

type pack = {
  alt: string;
  desktop: string;
  mobile: string;
  link: string;
};

type data = {
  data: pack[];
};

const SliderBanner = ({ data }: data) => {
  const [current, setCurrent] = useState(0);

  const slidesArr = data?.map((pack, index) => (
    <div
      key={index}
      className={"keen-slider__slide"}
    >
      <div className={styles._image}><Image src={pack?.desktop} alt={pack?.alt} fill/></div>
      <div className={styles._imageMobile}><Image src={pack?.mobile} alt={pack?.alt} fill/></div>

      <div className={styles._button}>
        <GeneralButton text="Pricing" />
      </div>
    </div>
  ));

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
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
            mouseOver = 4000;
            nextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = 2000;
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
        <div
          className={styles._arrowLeft}
          onClick={() => instanceRef.current?.prev()}
        >
          <ArrowLeft />
        </div>
        {slidesArr}
        <div
          className={styles._arrowRight}
          onClick={() => instanceRef.current?.next()}
        >
          <ArrowRight />
        </div>
      </div>
    </>
  );
};

export default SliderBanner;
