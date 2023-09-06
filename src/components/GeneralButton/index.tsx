import React, { FC } from 'react';
import styles from './styles.module.scss';
import { motion, Variants } from 'framer-motion';
import { Icon } from '@iconify/react';
import scss from '../../../public/styles/variables.module.scss';

type Props = {
  text: string;
  method?: any;
  ignoreTheme?: boolean; // Ignore theme only for footer because not variant with selected theme
};

const GeneralButton: FC<Props> = ({ text, method, ignoreTheme = false }) => {
  const textAnimation: Variants = {
    initial: {
      color: ignoreTheme ? '#000000' : scss.black,
    },
    hover: {
      color: ignoreTheme ? '#FFFFFF' : scss.white,
      transition: {
        duration: 0.1,
      },
    },
  };

  const buttonAnimation: Variants = {
    initial: {
      backgroundColor: ignoreTheme ? '#FFFFFF' : scss.white,
      borderColor: ignoreTheme ? '#000000' : scss.black,
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
      width: '50%',
      color: ignoreTheme ? '#000000' : scss.black,
    },
    hover: {
      x: '90%',
      color: ignoreTheme ? '#FFFFFF' : scss.white,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <button type='submit' className={styles._container} onClick={method}>
      <motion.div
        whileHover='hover'
        variants={buttonAnimation}
        className={[styles._buttonContainer, ignoreTheme ? styles._ignoreTheme : ''].join(' ')}>
        <div className={styles._button}>
          <div className={styles._textContainer}>
            <motion.p
              className={styles._text}
              style={{ color: ignoreTheme ? '#000000' : scss.white }}
              variants={textAnimation}>
              {text}
            </motion.p>
          </div>

          <motion.div
            variants={arrowAnimation}
            className={styles._image}
            style={{ color: ignoreTheme ? '#000000' : scss.white }}>
            <Icon icon='mdi:arrow-right' width={22} />
          </motion.div>
        </div>
      </motion.div>
    </button>
  );
};

export default GeneralButton;
