import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Text } from '../../../lib';
import { SVGLib } from 'components/complicated';
import { animations } from '../../../../styles/animations';

type PromoBlockProps = {
  block: ISectionBlock;
  theme: ITheme;
  model: string;
  index: number;
};

const PromoBlock = (props: PromoBlockProps) => {
  const { block, theme, model, index } = props;
  // TODO fix
  // @ts-ignore
  const [a, b] = block.flag?.split(' ') || [null, null];
  const Icon = SVGLib[block && block?.icon as string] || null
  return (
    <div className={`zero:w-full md:w-${b} px-4 py-10 flex items-start zero:justify-center`}>
      {block.image && (
        <div
          style={{
            minWidth: '70px',
            minHeight: '70px',
          }}
          className={`mr-4 relative zero:hidden lg:block`}
        >
          <Image
            alt=''
            className={``}
            width={70}
            height={70}
            layout='responsive'
            objectFit='contain'
            src={`/${block.image}`}
          />
        </div>
      )}
      <div
        className={`flex ${
          a === 'row'
            ? `mt-10 items-center justify-between `
            : 'zero:w-full items-center justify-center flex-col'
        }`}
      >
        <div className={`w-full`}>
          <div className={`flex items-center`}>
            {block.image && <div
              style={{
                minWidth: '70px',
                minHeight: '70px',
              }}
              className={`mr-4 relative zero:block lg:hidden`}
            >
              <Image
                alt=''
                className={``}
                width={70}
                height={70}
                layout='responsive'
                objectFit='contain'
                src={`/${block.image}`}
              />
            </div>}
            {block.icon && <Icon fill={'#18181b'} w={20} h={20} className={`mr-4 flex-none`}/>}
            <Text
              className={`zero:text-2xl md:text-3xl font-black  ${a === 'item' ? 'text-left' : 'text-left'} text-${theme.text.sections[model].color.s2}`}
            >
              {block.title}
            </Text>
          </div>
          <Text
            className={`border-t mt-2 text-${
              theme.text.sections[model].color.s2
            } border-${
              theme.borders.sections[model].color.s2
            } zero:text-sm md:text-lg font-light ${a === 'item' ? 'text-left' : 'text-left'}`}
          >
            {block.text}
          </Text>
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
                <a
                  key={`button${i}`}
                  className={`${theme.styles.buttons} text-${theme.text.sections[model].color.buttons} bg-${theme.bg.sections[model].color.main} hover:bg-${theme.bg.sections[model].color.hover} active:scale-105`}
                  href={'#Contacts'}
                >
                  {button.buttonText}
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PromoBlock;
