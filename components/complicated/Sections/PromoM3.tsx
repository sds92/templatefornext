import React from 'react';
import Image from 'next/image';
// @ts-ignore
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { animations } from '../../../styles/animations';

type SectionProps = {
  theme: ITheme;
  data: { section: Section; app: IApp['contacts'] };
  w: number;
};

const PromoM3: React.FC<SectionProps> = (props: SectionProps) => {
  const { theme, w, data } = props;
  const { section } = data;
  return (
    <section
      id={section.id}
      style={{ minHeight: `${w >= 900 ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)'}` }}
      className={`cursor-default overflow-hidden w-full flex flex-col  relative py-10`}
    >
      <motion.div
        className={`uppercase text-center font-black zero:text-4xl sm:text-5xl md:text-7xl text-${
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
      <div
        className={`flex flex-wrap justify-center max-w-7xl mx-auto py-10 relative`}
        style={{
          minHeight: `60vh`,
        }}
      >
        {section.blocks?.map((block, i) => {
          return (
            <div className={`zero:w-full sm:w-1/2 md:w-1/3 p-4`} key={`block${i}`}>
              <div className={`h-full shadow-md rounded-sm bg-${theme.bg.catalog.color.main}`}>
                <Image
                  alt={``}
                  height={320}
                  width={320}
                  className={`hover:scale-105 transition-all duration-500`}
                  src={`/${block.image && block?.image}`}
                  layout='responsive'
                  objectFit='cover'
                />
                <div className={`mx-auto pb-8 overflow-hidden`}>
                  <div
                    style={{
                      textShadow: `2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3)`,
                    }}
                    className={`text-center border-b my-2 mx-auto w-min lg:whitespace-nowrap zero:text-xl lg:text-2xl font-bold uppercase text-${
                      theme.text.sections[section.model].color.s1
                    }`}
                  >
                    {block.title}
                  </div>
                  <div
                    className={`text-center mx-8 zero:text-sm lg:text-lg font-light text-${
                      theme.text.sections[section.model].color.s2
                    } `}
                  >
                    {block.text}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PromoM3;