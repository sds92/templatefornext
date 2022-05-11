import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { animations } from '../../../styles/animations';
import { SectionTitle, SectionWrapper } from './components';

type SectionProps = {
  theme: ITheme;
  data: { content: Section; contacts: IApp['contacts']; app: IApp };
  w: number;
};

const GalleryM0 = (props: SectionProps) => {
  const { theme, w, data } = props;
  const { content, app } = data;

  const [hover, setHover] = React.useState<number | null>(null);

  return (
    <SectionWrapper id={content.id} theme={theme} w={w} minH>
      <SectionTitle title={content.title as string} theme={theme} app={app} />
      <div className={`grow flex flex-wrap justify-center w-full h-max zero:py-4 md:py-10 relative `}>
        {content.images?.map((image, i: number) => {
          return (
            <div
              key={`image${i}`}
              className={`inline zero:w-full md:w-1/3 transition-all duration-1000 overflow-hidden p-4`}
            >
              <div className={`relative w-full h-auto cursor-pointer overflow-hidden rounded-sm shadow-md`} onMouseEnter={() => setHover(i)}>
                <img alt='' style={{}} className={`h-auto min-w-full object-cover shadow-lg transition-all duration-1000 ${i === hover ? `scale-105` : ``}`} src={`${image[0]}`}></img>
                <div
                  className={`absolute inset-0 w-full h-full bg-bp_black transition-all ${
                    i === hover ? `bg-opacity-30` : `bg-opacity-0`
                  }`}
                ></div>
                {<div className={`absolute w-full bottom-4 transition-all px-4 ${
                    i === hover ? `opacity-100` : `opacity-0 -translate-x-10`
                  } text-${theme.text.sections[content.model].color.s1} bg-${theme.bg.sections[content.model].color.main}`}>{image[1]}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default GalleryM0;
