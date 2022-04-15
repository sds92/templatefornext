import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { animations } from '../../../styles/animations';
import type { SectionProps } from './Section';
import Section from './Section';

const PromoM1 = (props: { theme: ITheme; data: [Section, IApp['contacts']]; w: number }) => {
  const { theme, w, data } = props;
  const [content, contacts] = data;
  return (
    <div
      id={content.id}
      style={{ minHeight: `${w >= 900 ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)'}` }}
      className={`overflow-hidden w-full flex user-main-fs relative`}
    >
      
      <div className={`p-10 w-full md:w-6/12 flex items-center absolute md:relative inset-0 z-10`}>
        <div className={`max-w-xl ml-auto -mt-10 cursor-default`}>
          <div>
            {w >= 900 ? (
              <>
                <motion.div
                  className={`font-bold text-3xl text-${theme.text.sections[content.model].color.main}`}
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
                  className={`my-4 bg-${theme.text.sections[content.model].color.s2}`}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  variants={animations.line.variants}
                  transition={animations.line.transition}
                />
              </>
            ) : (
              <>
                <Text className={`font-bold text-3xl text-${theme.text.sections[content.model].color.main}`}>
                  {content.title}
                </Text>
                <div
                  style={{ height: '1px' }}
                  className={`my-4 bg-${theme.bg.sections[content.model].color.main}`}
                ></div>
              </>
            )}
          </div>
          <Text>{content.subTitle}</Text>
          <br /> <Text className={`text-3xl`}>{content.price}</Text>
          <Text className={`my-4 font-light`}>{content.text}</Text>
          
          <div className={`relative flex flex-col gap-1 items-start justify-start`}>
            {content.buttons?.map((button, i) => {
              return button.pseudo ? (
                <div
                className={`${
                  // @ts-ignore
                  content.buttons[i + 1]?.pseudo ? 'mt-4' : 'mt-0'
                  } ml-2 whitespace-nowrap text-lg hover:scale-105 transition-all cursor-pointer text-${
                    theme.text.sections[content.model].color.s2
                  }`}
                >
                  {button.buttonText}
                </div>
              ) : (
                <div
                  key={`button${i}`}
                  className={`${theme.styles.buttons} text-${
                    theme.text.sections[content.model].color.buttons
                  } bg-${theme.bg.sections[content.model].color.main} hover:bg-${
                    theme.bg.sections[content.model].color.hover
                  } active:scale-105`}
                  href={'#Contacts'}
                >
                  {button.buttonText}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`p-10 w-full md:w-6/12 h-full absolute right-0 ${w <= 900 && 'opacity-30'}`}
        style={{
          background: `no-repeat url(${content.images})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
};

export default PromoM1;
