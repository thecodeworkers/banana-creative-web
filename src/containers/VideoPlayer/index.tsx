import React, { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";

const VideoPlayer: FC = () => {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const StandardSVG = useTransform(
    scrollYProgress,
    // Porcentaje de scroll Abel credits
    [0, 0.25, 0.5, 1],
    // Medidas de scale Abel credits
    [0.5, 1, 1, 0.5]
  );

  return (
    <>
      <motion.div
        style={{ scale: StandardSVG }}
        className={styles._videoDesktop}
      >
        <Image src={"/resources/testGif.gif"} alt="video" fill />
      </motion.div>
      <div className={styles._videoMobile}>
        <Image src={"/resources/testGif.gif"} alt="video" fill />
      </div>
    </>
  );
};

export default VideoPlayer;
