import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { animations } from '../../../styles/animations';
import Image from 'next/image';

type SectionProps = {
  theme: ITheme;
  data: [Section, IApp['contacts']];
  w: number;
};

const PromoM1 = (props: SectionProps) => {
  const { theme, w, data } = props;
  const [content, contacts] = data;
  return (
    <section
      style={{ minHeight: `${w >= 900 ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)'}` }}
      id={content.id}
      className={`relative overflow-hidden justify-between w-full flex flex-col `}
    >
      <motion.div
        className={`text-center font-black mx-4 my-8 zero:text-4xl sm:text-5xl md:text-7xl text-${
          theme.text.sections[content.model].color.main
        }`}
        initial='initial'
        animate='animate'
        exit='exit'
        variants={animations.slideUp.variants}
        transition={animations.slideUp.transition}
      >
        <Text className={`py-4`}>{content.title}</Text>
      </motion.div>

      <div
        className={`relative flex flex-grow flex-col justify-center zero:self-start md:self-center my-10 zero:w-full md:w-1/2 px-8`}
      >
        <Text className={`font-semibold -my-0.5 zero:text-base md:text-xl text-${theme.text.sections[content.model].color.s2}`}>
          {content.text}
        </Text>
      </div>
      <div
        style={{
          height: '70vh',
        }}
        className={`absolute mt-40 min-w-xl right-0 -z-10 zero:opacity-50 md:opacity-80`}
      >
        <Image
          alt=''
          width={'100%'}
          height={'100%'}
          layout='fill'
          objectFit='cover'
          src={`/${content.images && content?.images[0]}`}
        />
      </div>
    </section>
  );
};

export default PromoM1;
