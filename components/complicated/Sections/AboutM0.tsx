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

const AboutM0 = (props: SectionProps) => {
  const { theme, w, data } = props;
  const { content, contacts, app } = data;

  return (
    <SectionWrapper id={content.id} theme={theme} w={w} minH>
      <SectionTitle title={content.title as string} theme={theme} app={app} />
      <div
        className={`grow flex flex-col flex-wrap justify-center w-full h-max mx-auto zero:py-4 md:py-10 relative `}
      >
        <div className={`max-w-5xl mx-auto px-8`}>
          <Text className={`zero:text-sm md:text-lg zero:text-justify md:text-left`}>{content.text}</Text>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutM0;
