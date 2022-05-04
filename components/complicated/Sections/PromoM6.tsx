import React from 'react';
import { Text } from '../../lib';
import { SectionTitle, SectionWrapper } from './components';

type SectionProps = {
  theme: ITheme;
  data: [Section, IApp['contacts'], boolean, IApp];
  w: number;
};

const PromoM6 = (props: SectionProps) => {
  const { theme, w, data } = props;
  const [content, nothing, nothing2, app] = data;

  return (
    <SectionWrapper id={content.id} theme={theme} w={w} minH>
      <SectionTitle title={content.title as string} theme={theme} app={app} />
      <div
        className={`grow flex flex-wrap justify-center w-full h-full mx-auto py-10 relative bg-${theme.bg.catalog.color.s1}`}
      >
        {content.blocks?.map((block, i) => {
          return (
            <div key={`block${i}`} className={`flex flex-col zero:w-full md:basis-1/2 lg:basis-1/3 p-4`}>
              <div className={`flex items-center gap-2`}>
                <img className={`w-20 h-20`} src={`/images/shinglas.site/icons/${block.icon}.webp`}></img>
                <Text className={`font-bold text-3xl`}>{block.title}</Text>
              </div>
              <div>{block.text}</div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default PromoM6;
