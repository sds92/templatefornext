import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { animations } from '../../../styles/animations';
import { CardsGrid, Slider } from './components';
import FeedBackForm from '../Forms/FeedBackForm';

type SectionProps = {
  theme: ITheme;
  data: [Section, IApp['contacts']];
  w: number;
  h: number;
};

const MainScreenM1 = (props: SectionProps) => {
  const { theme, w, h, data } = props;
  const [content, contacts] = data;
  return (
    <>
      <section
        id={content.id}
        style={{ minHeight: `${w >= 900 ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)'}` }}
        className={`w-full h-auto relative flex flex-col justify-between overflow-hidden z-10`}
      >
        <div className={`absolute h-full w-full`}>
          <Slider imgs={content.images as string[]} />
        </div>

        <div
          className={`z-20 relative rounded-r-sm zero:-left-[24px] md:absolute ${
            h <= 500 ? 'mt-4' : 'mt-20'
          } zero:mr-auto zero:py-4 zero:pr-6 sm:pr-10 pl-10 whitespace-nowrap text-${
            theme.text.sections[content.model].color.main
          } `}
        >
          <div style={{width: `calc(100% + 100px)`}} className={`w-full bg-opacity-95 -skew-x-12 h-full absolute -left-10 bg-${theme.bg.sections[content.model].color.s2}`}/>
          <Text
          style={{
            textShadow: `2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.1)`,
          }}
            className={`relative ml-20 font-black zero:pb-4 underline decoration-zinc-100 zero:text-5xl sm:text-6xl md:text-8xl whitespace-nowrap text-${
              theme.text.sections[content.model].color.main
            }`}
          >
            {content.title}
          </Text>
          <div className={`pl-4 ml-20 relative`}>
            <Text
              className={`font-thin pl-4 zero:text-sm sm:text-base md:text-lg whitespace-nowrap text-${
                theme.text.sections[content.model].color.s1
              }`}
            >
              {content.subTitle}
            </Text>
          </div>
        </div>
        {w >= 900 && (
          
          <div className={`bottom-20 absolute z-20 right-0 rounded-l-sm`}>
            <div style={{width: `calc(100% + 100px)`}} className={`-right-12 skew-x-12 absolute h-full z-20 bg-opacity-95 bg-${
            theme.bg.sections[content.model].color.s2
          }`}> </div>
            <div
              className={`z-30 relative pl-2 pr-10 pb-10 flex flex-col items-center `}
            >
              <Text
              style={{
                textShadow: `2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3)`,
              }}
                className={`py-8 font-bold text-3xl uppercase text-${
                  theme.text.sections[content.model].color.s1
                }`}
              >
                Заказать обратный звонок
              </Text>
              <FeedBackForm contacts={contacts} theme={theme} incol={true as boolean}/>
            </div>
          </div>
        )}
      </section>
      {w <= 900 && (
        <div className={`z-50 w-full relative ${h <= 500 ? '' : '-mt-20'} flex flex-col bottom-0`}>
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
            <FeedBackForm contacts={contacts} theme={theme} />
          </div>
        </div>
      )}
    </>
  );
};

export default MainScreenM1;
