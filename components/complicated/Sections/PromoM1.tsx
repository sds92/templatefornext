import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { animations } from '../../../styles/animations';

type SectionProps = {
  theme: ITheme;
  data: [Section, IApp['contacts']];
  w: number;
};

const PromoM1: React.FC<SectionProps> = (props: SectionProps) => {
  const { theme, w, data } = props;
  const [content, contacts] = data;
  return (
    <section
      style={{ minHeight: `${w >= 900 ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)'}` }}
      id={content.id}
      className={`overflow-hidden w-full flex flex-col bg-${theme.bg.sections[content.model].color.s1}`}
    >
      
      <motion.div
        className={`text-center font-black mx-4 my-8 text-4xl md:text-5xl text-${
          theme.text.sections[content.model].color.main
        }`}
        initial='initial'
        animate='animate'
        exit='exit'
        variants={animations.slideUp.variants}
        transition={animations.slideUp.transition}
      >
        <Text className={``}>{content.title}</Text>
      </motion.div>

      <div className={`flex flex-col zero:self-start md:self-center my-10 zero:w-full md:w-1/2 px-8`}>
        <Text className={`font-light text-${theme.text.sections[content.model].color.s2}`}>
          {content.text}
        </Text>
      </div>
      <div
        className={`p-10 w-full md:w-6/12 h-full absolute right-0 ${w <= 900 && 'opacity-30'}`}
        style={{
          background: `no-repeat url(${content.images})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </section>
  );
};

export default PromoM1;
