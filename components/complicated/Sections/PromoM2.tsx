import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { PromoBlock } from './components';
import { animations } from '../../../styles/animations';
import Image from 'next/image';

type SectionProps = {
  theme: ITheme;
  data: {section: Section, app: IApp['contacts']};
  w: number;
};

const PromoM2: React.FC<SectionProps> = (props: SectionProps) => {
  const { theme, w, data } = props;
  const { section } = data;
  return (
    <section
      id={section.id}
      style={{ minHeight: `${w >= 900 ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)'}` }}
      className={`bg-${theme.bg.sections[section.model].color.s2} overflow-hidden w-full flex flex-col relative`}
    >
      
        <motion.div
          className={`text-center font-black mt-8 mx-8 zero:text-4xl sm:text-5xl md:text-7xl text-${
            theme.text.sections[section.model].color.main
          }`}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={animations.slideUp.variants}
          transition={animations.slideUp.transition}
        >
          <Text className={`py-4`}>{section.title}</Text>
        </motion.div>
    
      <div className={`py-4 flex flex-wrap max-w-7xl mx-auto mt-8`}>
        <div className={`flex flex-wrap zero:w-full md:w-2/3`}>
          {section.blocks?.map((block, i) => {
            return (
              <PromoBlock
                key={`promoblock${i}`}
                block={block}
                theme={theme}
                model={section.model}
                index={i}
              />
            );
          })}
        </div>
        <div className={`zero:absolute zero:w-full md:relative min-h-full md:w-1/3 z-10 zero:opacity-30 md:opacity-100`}>
          <Image
            alt=''
            width={'100%'}
            height={'100%'}
            layout='fill'
            objectFit='cover'
            src={`/${section.images && section?.images[0]}`}
          />
        </div>
      </div>
    </section>
  );
};

export default PromoM2;
