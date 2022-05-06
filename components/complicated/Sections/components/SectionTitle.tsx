import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../../lib';
import { animations } from '../../../../styles/animations';
import { useInView } from 'react-intersection-observer';
import Slider from './Slider';

type SectionTitleProps = {
  app?: IApp;
  theme: ITheme;
  title: string;
};

const SectionTitle = ({ title, theme, app }: SectionTitleProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div
      className={`pt-4 relative uppercase text-center zero:text-2xl sm:text-5xl md:text-5xl drop-shadow-xl font-light text-${theme.text.catalog.color.s2}`}
      ref={ref}
    >
      <Text className={`pb-4`}>{title}</Text>
    </div>
  );
};

export default SectionTitle;
