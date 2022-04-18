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
        className={`text-center font-black text-5xl mx-4 text-${theme.text.sections[content.model].color.s2}`}
        initial='initial'
        animate='animate'
        exit='exit'
        variants={animations.slideUp.variants}
        transition={animations.slideUp.transition}
      >
        <Text className={`my-2`}>{content.title}</Text>
      </motion.div>

      <div className={`flex flex-wrap max-w-7xl mt-6 mx-auto`}>
        {content.blocks?.map((block, i) => {
          return (
            <PromoBlock key={`promoblock${i}`} block={block} theme={theme} model={content.model} index={i} />
          );
        })}
      </div>
      <div
        className={`py-8 bg-${theme.bg.sections[content.model].color.s2} flex flex-col border-t mt-10 items-center justify-between border-${
          theme.borders.sections[content.model].color.main
        }`}
      >
        <div className={`px-4 my-4`}>
          <Text className={`text-3xl font-bold text-left text-${theme.text.sections[content.model].color.s1}`}>{content?.footer?.title}</Text>
          <Text className={`text-lg font-light text-left text-${theme.text.sections[content.model].color.s1}`}>{content?.footer?.text}</Text>
        </div>
        <div className={`px-4`}>
          {content?.footer?.buttons &&
            content.footer.buttons.map((button: Button, i: number) => {
              return button.pseudo ? (
                <div
                  key={`button${i}`}
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
                  className={`${theme.styles.buttons} text-${
                    theme.text.sections[content.model].color.buttons
                  } bg-${theme.bg.sections[content.model].color.main} hover:bg-${
                    theme.bg.sections[content.model].color.hover
                  } active:scale-105`}
                  href={`${button.link}`}
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
