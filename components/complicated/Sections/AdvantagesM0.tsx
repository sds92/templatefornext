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

const AdvantagesM0 = (props: SectionProps) => {
  const { theme, w, data } = props;
  const { content, app } = data;

  return (
    <SectionWrapper id={content.id} theme={theme} w={w} minH>
      <div
        className={`grow flex flex-col flex-wrap justify-start max-w-7xl h-max mx-auto zero:py-4 md:py-10 relative `}
      >
        {content.blocks?.map((block, i: number) => {
          return (
            <div className={`px-4`} key={`block${i}`}>
              <SectionTitle title={block.title as string} theme={theme} app={app} />
              {Array.isArray(block.text) && block.text?.map((textItem, ii: number) => {
                return (
                  <div key={`text${ii}`}>
                    <div className={`flex items-center`}>
                      <div className={`w-6 h-6 flex-none border border-${theme.text.sections[content.model].color.main} rounded-full`}></div>
                      <Text className={`ml-2 font-bold w-full`}>{textItem[0]}</Text>
                    </div>
                    <div className={`flex`}>
                      <div style={{width: '1px'}} className={`ml-3 min-h-full border-l border-${theme.text.sections[content.model].color.main}`}></div>
                      <Text className={`ml-6 w-full`}>{textItem[1]}</Text>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default AdvantagesM0;
