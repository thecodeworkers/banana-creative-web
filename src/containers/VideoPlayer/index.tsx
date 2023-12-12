import React, { FC, useRef } from "react";
import styles from "./styles.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import Vimeo from "@u-wave/react-vimeo";

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
  // The following code mutes the video when it is not on the viewport
  // Code developed for react-youtube package

  // const videoRef = useRef(null);
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
        <motion.div
          style={{ scale: StandardSVG }}
          className={styles._videoDesktop}
        >
          <Vimeo
            video="892395591"
            autoplay
            muted={true}
            loop={true}
            showByline={false}
            controls={false}
            className={styles._iframe}
            responsive
          />
        </motion.div>
      <div className={styles._videoMobile}>
        <Vimeo
          video="892395591"
          autoplay
          muted={true}
          loop={true}
          showByline={false}
          controls={false}
          className={styles._iframeMobile}
          responsive
        />
      </div>
    </>
  );
};

export default VideoPlayer;
