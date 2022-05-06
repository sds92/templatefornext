import React from 'react';
import { Text } from '../../lib';
import { Slider } from './components';
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
  console.log("🚀 ~ file: MainScreenM2.tsx ~ line 18 ~ MainScreenM2 ~ content", content)
  return (
    <>
      <SectionWrapper id={content.id} theme={theme} w={w} minH>
        {/* <div className={`absolute bg-black bg-opacity-20 w-full h-full z-20`}></div> */}
        <div className={`absolute w-full h-full`}>
          <div className={`absolute h-full w-full z-10 ${w < 1480 ? 'bg-white bg-opacity-50' : ''}`}></div>
          <img alt='' className={`min-h-full w-auto object-cover ml-auto`} src={`${content.images[0]}`}></img>
        </div>

        <div
          className={`left-0 zero:-ml-4 sm:-ml-8 z-20 top-0 rounded-r-sm ${
            h <= 500 ? 'mt-4' : 'mt-40'
          } text-${theme.text.sections[content.model].color.main} `}
        >
          <div className={`absolute pr-8`}>
            <Text
              style={{
                textShadow: `2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.1)`,
              }}
              className={`zero:ml-6 sm:ml-10 md:ml-14 pt-2 relative font-black zero:text-5xl sm:text-6xl md:text-8xl whitespace-nowrap text-${
                theme.text.sections[content.model].color.main
              }`}
            >
              {content.title}
            </Text>
            <div className={`relative flex flex-col zero:py-2 md:py-4 md:pl-8`}>
              <Text
                className={`zero:ml-8 sm:ml-12 font-bold zero:text-sm sm:text-base md:text-lg text-${
                  theme.text.sections[content.model].color.s2
                }`}
              >
                {content.subTitle}
              </Text>
              <Text
                className={`zero:ml-8 sm:ml-12 font-bold zero:text-sm sm:text-base md:text-xl py-4 whitespace-nowrap text-${
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
        {/* {w >= 900 && (
          <div className={`bottom-4 right-4 absolute z-20 rounded-md bg-opacity-60 `}>
            <Text
              style={{
                textShadow: `2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3)`,
              }}
              className={`font-semibold text-3xl uppercase text-${
                theme.text.sections[content.model].color.s1
              }`}
            >
              Заказать обратный звонок
            </Text>
            <div className={`z-30 relative mx-auto py-2 flex flex-col items-center`}>
              <FeedBack app={app} contacts={contacts} theme={theme} incol={true as boolean} />
            </div>
          </div>
        )} */}
      </SectionWrapper>
      {w <= 900 && (
        <div className={`z-20 w-full relative ${h <= 500 ? '' : '-mt-20'} flex flex-col bottom-0`}>
          <div
            className={`px-2 pb-10 flex flex-col items-center bg-${
              theme.bg.sections[content.model].color.s2
            } `}
          >
            <Text
              className={`uppercase py-4 font-bold text-xl text-${
                theme.text.sections[content.model].color.s1
              }`}
            >
              Заказать обратный звонок
            </Text>
            <FeedBack app={app} contacts={contacts} theme={theme} />
          </div>
        </div>
      )}
    </>
  );
};

export default MainScreenM2;
