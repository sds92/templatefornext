import React from 'react';
import { motion } from 'framer-motion';
import { Text, PromoBlock } from '../../lib';
import { animations } from '../../../styles/animations';
import type { SectionProps } from './Section';
import Section from './Section';

const PromoM0 = (props: { theme: ITheme; data: [Section, IApp['contacts']]; w: number }) => {
  const { theme, w, data } = props;
  const [content, contacts] = data;
  return (
    <section
      id={content.id}
      style={{ minHeight: `${w >= 900 ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)'}` }}
      className={`overflow-hidden w-full flex flex-col user-main-fs relative`}
    >
      <div className={`flex flex-col mx-auto`}>
        <motion.div
          className={`font-bold text-3xl text-${theme.text.sections[content.model].color.main}`}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={animations.slideUp.variants}
          transition={animations.slideUp.transition}
        >
          <Text>{content.title}</Text>
        </motion.div>
        <motion.div
          style={{ height: '1px' }}
          className={`my-4 bg-${theme.text.sections[content.model].color.s2}`}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={animations.line.variants}
          transition={animations.line.transition}
        />
      </div>
      <div className={`flex flex-wrap max-w-7xl mx-auto`}>
        {content.blocks?.map((block, i) => {
          
          
          return (
            <PromoBlock key={`promoblock${i}`} block={block} theme={theme} model={content.model} index={i}/>
          );
        })}
      </div>
    </section>
  );
};

export default PromoM0;
