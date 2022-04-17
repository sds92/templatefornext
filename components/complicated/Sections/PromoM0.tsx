import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { PromoBlock } from './components';
import { animations } from '../../../styles/animations';

type SectionProps = {
  theme: ITheme;
  data: [Section, IApp['contacts']];
  w: number;
};

const PromoM0: React.FC<SectionProps> = (props: SectionProps) => {
  const { theme, w, data } = props;
  const [content, contacts] = data;
  return (
    <section
      id={content.id}
      style={{ minHeight: `${w >= 900 ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)'}` }}
      className={`overflow-hidden w-full flex flex-col user-main-fs relative justify-between`}
    >
      <motion.div
        className={`font-bold text-3xl mx-auto text-${theme.text.sections[content.model].color.main}`}
        initial='initial'
        animate='animate'
        exit='exit'
        variants={animations.slideUp.variants}
        transition={animations.slideUp.transition}
      >
        <Text>{content.title}</Text>
      </motion.div>

      <div className={`flex flex-wrap max-w-7xl mt-6 mx-auto`}>
        {content.blocks?.map((block, i) => {
          return (
            <PromoBlock key={`promoblock${i}`} block={block} theme={theme} model={content.model} index={i} />
          );
        })}
      </div>
      <div
        className={`flex border-t mt-10 items-center justify-between border-${theme.borders.sections[content.model].color.main}`}
      >
        <div>
          <Text className={`text-xl font-bold text-left`}>
            {content.footer.title}
          </Text>
          <Text className={`font-light text-left`}>{content.footer.text}</Text>
        </div>
        <div>
          {content.footer.buttons &&
            content.footer.buttons.map((button, i) => {
              return button.pseudo ? (
                <div
                  style={{
                    // TODO fix
                    // @ts-ignore
                    ['text-shadow']: `0px 0px 20px ${theme.logo}`,
                  }}
                  className={`${
                    // TODO fix
                    // @ts-ignore
                    content.buttons[i + 1]?.pseudo ? 'mt-4' : 'mt-0'
                  } ml-2 whitespace-nowrap text-lg hover:scale-105 transition-all cursor-pointer text-${
                    theme.text.sections[content.model].color.s2
                  }  `}
                >
                  {button.buttonText}
                </div>
              ) : (
                <div
                  key={`button${i}`}
                  className={`${theme.styles.buttons} text-${theme.text.sections[content.model].color.buttons} bg-${theme.bg.sections[content.model].color.main} hover:bg-${theme.bg.sections[content.model].color.hover} active:scale-105`}
                  href={'#Contacts'}
                >
                  {button.buttonText}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default PromoM0;
