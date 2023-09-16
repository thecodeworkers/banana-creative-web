import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "../../../public/resources/svg";
import useTranslation from "next-translate/useTranslation";

type testimonial = {
  text: string;
  author: string;
  client: string;
};

type data = {
  data: testimonial[];
};

const Testimonials = ({ data }: data) => {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation("common");

  const slidesArr = data?.map((testimonial, index) => (
    <div key={index} className={"keen-slider__slide"}>
      <div className={styles._slide}>
        <div className={styles._quotes}>
          <Image alt="quotes" src={"/resources/quotes.svg"} fill />
        </div>
        <div className={styles._text}>{t(testimonial.text)}</div>
        <div className={styles._author}>{testimonial.author}</div>
        <div className={styles._client}>{testimonial.client}</div>
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
        className={[styles._testimonialsContainer, "keen-slider"].join(" ")}
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

export default Testimonials;
