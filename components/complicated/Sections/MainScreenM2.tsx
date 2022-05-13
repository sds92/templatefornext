import React from 'react';
import { Text } from '../../lib';
import FeedBack from '../Forms/FeedBack';
import { SectionWrapper } from './components';
import styles from './styles/mainScreen.module.css';

type SectionProps = {
  theme: ITheme;
  data: { content: Section; contacts: IApp['contacts'] };
  w: number;
  h: number;
  app: IApp;
};

const MainScreenM2 = (props: SectionProps) => {
  const { theme, w, h, data, app } = props;
  const { content, contacts } = data;
  return (
    <>
      <SectionWrapper id={content.id} theme={theme} w={w} minH>
        <div className={`absolute w-full h-full`}>
          <div className={`absolute h-full w-full z-10 bg-black bg-opacity-50 ${w < 1480 ? '' : ''}`}></div>
          <img alt='' className={`min-h-full w-auto object-cover`} src={`${content.images?.[0]}`}></img>
        </div>

        <div
          className={`z-20 max-w-7xl mx-auto flex items-center zero:justify-center md:justify-start relative w-full zero:mt-20 md:mt-40 text-${
            theme.text.sections[content.model].color.main
          } `}
        >
          <div className={`mx-4`}>
            <div className={`mt-8 relative flex flex-col zero:py-2 md:py-4 md:px-8 w-fit`}>
              <div
                className={
                  styles.blurrer +
                  ` z-10 absolute w-full h-full overflow-hidden m-1 border rounded-md border-opacity-20 border-zinc-400`
                }
              >
                <div className={` w-full inset-0 h-full blur-lg bg-white bg-opacity-55`}></div>
              </div>
              <div className={`relative z-20 pt-8`}>
                <Text
                  // styles.title +
                  className={`  main-title zero:ml-6 sm:ml-10 md:ml-14 pt-2 relative font-black zero:text-6xl sm:text-6xl md:text-8xl whitespace-nowrap text-${
                    theme.text.sections[content.model].color.main
                  }`}
                >
                  {content.title}
                </Text>
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
        </div>
      </SectionWrapper>
    </>
  );
};

export default MainScreenM2;
