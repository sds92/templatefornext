import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { PromoBlock } from './components';
import { animations } from '../../../styles/animations';

type SectionProps = {
  theme: ITheme;
  data: [Section, IApp['contacts']];
  w: number;
};

const PromoM2: React.FC<SectionProps> = (props: SectionProps) => {
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
          className={`text-center font-black mx-4 my-8 text-4xl md:text-5xl  text-${theme.text.sections[content.model].color.s2}`}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={animations.slideUp.variants}
          transition={animations.slideUp.transition}
        >
          <Text>{content.title}</Text>
        </motion.div>
     
      </div>
      <div className={`flex flex-wrap max-w-7xl mx-auto`}>
        <div className={`flex flex-wrap w-2/3`}>
          {content.blocks?.map((block, i) => {
            return (
              <PromoBlock
                key={`promoblock${i}`}
                block={block}
                theme={theme}
                model={content.model}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromoM2;
