import React, { FC, useRef } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";

const VideoPlayer: FC = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const StandardSVG = useTransform(
    scrollYProgress,
    // Scroll percentage
    [0, 0.08, 0.1, 0.15],
    // Scale size
    [0.5, 1, 1, 0.5]
  );

  return (
    <>
      <motion.div
        style={{ scale: StandardSVG }}
        className={styles._videoDesktop}
      >
        <div className={styles._video}><Image src={"/resources/testGif.gif"} alt="video" fill /></div>
      </motion.div>
      <div className={styles._videoMobile}>
        <Image src={"/resources/testGif.gif"} alt="video" fill />
      </div>
    </>
  );
};

export default VideoPlayer;
