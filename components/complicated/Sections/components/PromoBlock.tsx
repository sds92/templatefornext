import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../../lib';
import { animations } from '../../../../styles/animations';

type PromoBlockProps = {
  block: SectionBlock;
  theme: ITheme;
  model: string;
  index: number;
};

const PromoBlock = (props: PromoBlockProps) => {
  const { block, theme, model, index } = props;
  // TODO fix
  // @ts-ignore
  const [a, b] = block.flag?.split(' ') || [null, null];
  return (
    <div className={`basis-${b} px-4 py-10`}>
      <div
        className={`flex ${
          a === 'row'
            ? `border-t mt-10 items-center justify-between border-${theme.borders.sections[model].color.main}`
            : 'w-96 mx-auto items-center justify-center flex-col'
        }`}
      >
        <div>
          <Text className={`text-3xl font-bold ${a === 'item' ? 'text-left' : 'text-left'}`}>
            {block.title}
          </Text>
          <Text className={`text-lg font-light ${a === 'item' ? 'text-left' : 'text-left'}`}>{block.text}</Text>
        </div>
        <div>
          {block.buttons &&
            block.buttons.map((button, i) => {
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
                    theme.text.sections[model].color.s2
                  }  `}
                >
                  {button.buttonText}
                </div>
              ) : (
                <div
                  key={`button${i}`}
                  className={`${theme.styles.buttons} text-${
                    theme.text.sections[model].color.buttons
                  } bg-${theme.bg.sections[model].color.main} hover:bg-${
                    theme.bg.sections[model].color.hover
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
  );
};

export default PromoBlock;
