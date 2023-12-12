import React from 'react';
import styles from './styles.module.scss';
import { motion, Variants } from 'framer-motion';

const FadeIn = ({ className, children }: any) => {
  const fadeInAnimation: Variants = {
    hide: {
      opacity: 0,
      y: 35,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      className={className}
      style={{ maxWidth: '100%' }}
      initial='hide'
      whileInView='show'
      variants={fadeInAnimation}
      viewport={{ once: true }}>
      {children}
    </motion.div>
  );
};

export default FadeIn;
