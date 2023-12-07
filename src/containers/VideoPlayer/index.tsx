import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import YouTube, { YouTubePlayer, YouTubeProps } from "react-youtube";

type Props = {
  video: string;
};

const VideoPlayer: FC<Props> = ({ video }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const StandardSVG = useTransform(
    scrollYProgress,
    // Scroll percentage
    [0, 0.08, 0.5, 0.15],
    // Scale size
    [0.5, 1, 1, 1]
  );

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      enablejsapi: 1,
      playlist: "Ot5z9Ou8noc",
      loop: 1,
      autoplay: 1,
      mute: 1,
      VideoPlaybackQuality: "large",
      rel: 0,
      controls: 0
    },
  };
  // The following code mutes the video when it is not on the viewport

  const videoRef = useRef(null);
  // const inView = useInView(videoRef, { amount: 0 });
  // const [player, setPlayer] = useState<YouTubePlayer>(null);
  // const [ready, setReady] = useState(false);
  // const onPlayerReady: YouTubeProps["onReady"] = (event) => {
  //   setReady(true);
  //   setPlayer(event);
  // };
  // const muting = useCallback(() => {
  //   if (!inView){
  //     player.target.mute()
  //   } else {
  //     player.target.unMute()
  //   }
  // }, [inView, player])
  // useEffect(() => {
  //   ready ? setTimeout(muting, 500) : null
  // }, [ready, muting]);

  return (
    <>
      <div ref={videoRef}>
        <motion.div
          style={{ scale: StandardSVG }}
          className={styles._videoDesktop}
        >
          <YouTube
            videoId="Ot5z9Ou8noc"
            opts={opts}
            iframeClassName={styles._iframe}
            // onReady={onPlayerReady}
          />
        </motion.div>
      </div>
      <div className={styles._videoMobile}>
        <YouTube
          videoId="Ot5z9Ou8noc"
          opts={opts}
          iframeClassName={styles._iframeMobile}
        />
      </div>
    </>
  );
};

export default VideoPlayer;
