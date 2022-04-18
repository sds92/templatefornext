import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { animations } from '../../../styles/animations';

type SectionProps = {
  theme: ITheme;
  data: [Section, IApp['contacts']];
  w: number;
};

const MainScreenM0 = (props: SectionProps) => {
  const { theme, w, data } = props;
  const [content, contacts] = data;
  return (
    <section
      id={content.id}
      style={{ minHeight: `${w >= 900 ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)'}` }}
      className={`w-full zero:px-4 md:px-20 flex justify-start  relative`}
    >
      <div className={`p-4 zero:w-full sm:max-w-7xl flex items-center relative z-10`}>
        <div className={`-mt-10 cursor-default w-full`}>
          <motion.div
            className={`font-black zero:text-5xl sm:text-6xl zero:mt-24 md:mt-6 md:text-8xl whitespace-nowrap text-${
              theme.text.sections[content.model].color.main
            }`}
            initial='initial'
            animate='animate'
            exit='exit'
            variants={animations.slideUp.variants}
            transition={animations.slideUp.transition}
          >
            <Text>{content.title}</Text>
          </motion.div>
          <motion.div
            style={{ height: '1px' }}
            className={`zero:my-2 md:my-4 bg-${theme.text.sections[content.model].color.s2}`}
            initial='initial'
            animate='animate'
            exit='exit'
            variants={animations.line.variants}
            transition={animations.line.transition}
          />
          <Text className={`zero:text-sm md:text-xl ml-2`}>{content.subTitle}</Text>
          <br /> {content.price && <Text className={`text-3xl`}>{content.price}</Text>}
          {content.text && <Text className={`my-4 font-light`}>{content.text}</Text>}
          <div
            className={`ml-2 font-bold zero:text-xl md:text-3xl ${
              theme.text.sections[content.model].color.main
            } my-4`}
          >
            <a className={``} href={`tel:${contacts.phones[0]}`}>
              {contacts.phones[0]}
            </a>
          </div>
          <div
            className={`relative flex flex-col gap-1 items-center justify-center sm:items-start sm:justify-start`}
          >
            {content.buttons?.map((button: Button, i: number) => {
              return button.pseudo ? (
                <a
                  style={{
                    textShadow: `0px 0px 20px ${theme.logo}`,
                  }}
                  className={`${
                    // @ts-ignore
                    content.buttons[i + 1]?.pseudo ? 'mt-4' : 'mt-0'
                  } ml-2 whitespace-nowrap text-lg hover:scale-105 transition-all cursor-pointer text-${
                    theme.text.sections[content.model].color.s2
                  } duration-75`}
                  href={button.link}
                >
                  {button.buttonText}
                </a>
              ) : (
                <a
                  key={`button${i}`}
                  className={`${theme.styles.buttons} text-${
                    theme.text.sections[content.model].color.buttons
                  } bg-${theme.bg.sections[content.model].color.main} hover:bg-${
                    theme.bg.sections[content.model].color.hover
                  } hover:scale-105 transition-all duration-75 active:scale-105`}
                  href={button.link}
                >
                  {button.buttonText}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`w-full md:w-7/12 mt-10 h-full absolute right-0 ${
          w <= 900 ? 'opacity-30' : 'opacity-100'
        }`}
        style={{
          background: `no-repeat url(${content.images && content.images[0]})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      ></div>
    </section>
  );
};

export default MainScreenM0;
