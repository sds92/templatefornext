import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { animations } from '../../../styles/animations';
import { SectionTitle, SectionWrapper } from './components';

type SectionProps = {
  theme: ITheme;
  data: [Section, IApp['contacts'], boolean, IApp];
  w: number;
};

const PromoM4 = (props: SectionProps) => {
  const { theme, w, data } = props;
  const [content, contacts, nothing, app] = data;

  return (
    <SectionWrapper id={content.id} theme={theme} w={w} minH>
      <SectionTitle title={content.title as string} theme={theme} app={app} />
      <div
        className={`grow flex flex-wrap justify-center w-full h-max mx-auto zero:py-4 md:py-10 relative bg-${theme.bg.catalog.color.s1}`}
      >
        <div className={`md:basis-8/12 zero:p-4 md:p-10 flex items-center justify-center`}>
          <Text className={`max-w-4xl zero:text-sm md:text-base`}>{content.text}</Text>
        </div>
        <div className={`md:basis-4/12`}>
          <div className={`h-96 w-96 relative`}>
            <div
              className={`-bottom-60 -right-40 absolute inline h-full w-full transition-all duration-1000 overflow-hidden shadow-2xl p-4`}
            >
              <img
                alt=''
                className={`min-h-full w-auto object-cover`}
                src={`/images/shinglas/promo03.jpg`}
              ></img>
            </div>
            <div
              className={`-bottom-20 absolute inline h-full w-full transition-all duration-1000 overflow-hidden shadow-2xl p-4`}
            >
              <img
                alt=''
                className={`min-h-full w-auto object-cover`}
                src={`/images/shinglas/promo02.jpg`}
              ></img>
            </div>
            <div
              className={`-right-60 absolute inline h-full w-full transition-all duration-1000 overflow-hidden shadow-2xl p-4`}
            >
              <img
                alt=''
                className={`min-h-full w-auto object-cover`}
                src={`/images/shinglas/promo01.jpg`}
              ></img>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PromoM4;
