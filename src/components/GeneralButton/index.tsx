import React, { FC } from "react";
import styles from "./styles.module.scss";
import { motion, Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import scss from "../../../public/styles/variables.module.scss";

type Props = {
  text: string;
  method?: any;
  ignoreTheme?: boolean; // Ignore theme only for footer because not variant with selected theme
};

const GeneralButton: FC<Props> = ({ text, method, ignoreTheme = false }) => {
  const textAnimation: Variants = {
    initial: {
      color: scss.black,
    },
    hover: {
      color: scss.black,
      transition: {
        duration: 0.1,
      },
    },
  };

  const buttonAnimation: Variants = {
    initial: {
      backgroundColor: scss.black,
      borderColor: scss.white,
    },
    hover: {
      backgroundColor: scss.apple,
      borderColor: scss.apple,
      transition: {
        duration: 0.5,
      },
    },
  };

  const arrowAnimation: Variants = {
    initial: {
      width: "50%",
    },
    hover: {
      x: "90%",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <button type="submit" className={styles._container} onClick={method}>
      <motion.div
        whileHover="hover"
        variants={buttonAnimation}
        className={styles._buttonContainer}
      >
        <div className={styles._button}>
          <div className={styles._textContainer}>
            <div className={styles._text}>{text}</div>
          </div>

          <motion.div variants={arrowAnimation} className={styles._image}>
            <Icon icon="mdi:arrow-right" width={22} color="black"/>
          </motion.div>
        </div>
      </motion.div>
    </button>
  );
};

export default GeneralButton;
