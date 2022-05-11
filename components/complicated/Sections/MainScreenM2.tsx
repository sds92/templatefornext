import React from 'react';
import { Text } from '../../lib';
import FeedBack from '../Forms/FeedBack';
import { SectionWrapper } from './components';

type SectionProps = {
  theme: ITheme;
  data: {content: Section, contacts: IApp['contacts']};
  w: number;
  h: number;
  app: IApp;
};

const MainScreenM2 = (props: SectionProps) => {
  const { theme, w, h, data, app } = props;
  const {content, contacts} = data;
  return (
    <>
      <SectionWrapper id={content.id} theme={theme} w={w} minH>
        <div className={`absolute zero:hidden md:block w-full h-full`}>
          <div className={`absolute h-full w-full z-10 ${w < 1480 ? 'bg-white bg-opacity-50' : ''}`}></div>
          <img alt='' className={`min-h-full w-auto object-cover ml-auto`} src={`${content.images[0]}`}></img>
        </div>

        <div
          className={`z-20 md:ml-40 relative w-full zero:mt-20 md:mt-40 text-${theme.text.sections[content.model].color.main} `}
        >
          <div className={`pr-4`}>
            <Text
              style={{
                textShadow: `2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.1)`,
              }}
              className={`zero:ml-6 sm:ml-10 md:ml-14 pt-2 relative font-black zero:text-6xl sm:text-6xl md:text-8xl whitespace-nowrap text-${
                theme.text.sections[content.model].color.main
              }`}
            >
              {content.title}
            </Text>
            <div className={`relative flex flex-col zero:py-2 md:py-4 md:pl-8`}>
              <Text
                className={`zero:ml-8 sm:ml-12 font-bold zero:text-base sm:text-lg md:text-lg text-${
                  theme.text.sections[content.model].color.s2
                }`}
              >
                {content.subTitle}
              </Text>
              <Text
                className={`zero:ml-8 sm:ml-12 font-bold zero:text-base sm:text-lg md:text-xl py-4 whitespace-nowrap text-${
                  theme.text.sections[content.model].color.s2
                }`}
              >
                {content.price}
              </Text>
              <Text
                className={`zero:ml-8 sm:ml-12 max-w-lg font-normal zero:text-sm sm:text-base md:text-lg text-${
                  theme.text.sections[content.model].color.s2
                }`}
              >
                {content.text}
              </Text>
              
            </div>
          </div>
        </div>
      </SectionWrapper>
   
    </>
  );
};

export default MainScreenM2;
