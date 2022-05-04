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

const PromoM5 = (props: SectionProps) => {
  const { theme, w, data } = props;
  const [content, contacts, nothing, app] = data;

  return (
    <SectionWrapper id={content.id} theme={theme} w={w} minH>
      <SectionTitle title={content.title as string} theme={theme} />
      <div
        className={`relative zero:py-4 lg:py-10 flex grow flex-wrap justify-center w-full min-h-full mx-auto bg-${theme.bg.catalog.color.s1}`}
      >
        {content.images?.map((image, i) => {
          return (
            <div
              key={`image${i}`}
              className={`relative p-2 zero:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5`}
            >
              <img
                alt=''
                style={{ aspectRatio: `1 / 1` }}
                className={`min-h-full w-auto object-cover`}
                src={`${image}`}
              ></img>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default PromoM5;
