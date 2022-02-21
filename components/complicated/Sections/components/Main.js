import React from 'react';
import { motion } from 'framer-motion';
import { Button, Text } from '../../../lib';
import { animations } from '../../../../styles/animations';

export default function Main(props) {
  const { theme, data, lgView } = props;
  const { main } = data.content;
  const { contacts } = data;
  
  return (
    <div className={`w-full flex user-main-fs relative`}>
      <div className={`p-10 w-full md:w-6/12 flex items-center absolute md:relative inset-0 z-10`}>
        <div className={`max-w-xl ml-auto -mt-10 cursor-default`}>
          <div>
            {lgView ? (
              <>
                <motion.div
                  className={`font-bold text-3xl text-${theme.text.bodyTitle}`}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  variants={animations.slideUp.variants}
                  transition={animations.slideUp.transition}
                >
                  <Text>{main.title}</Text>
                </motion.div>
                <motion.div
                  style={{ height: '1px' }}
                  className={`my-4 bg-${theme.text.body}`}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  variants={animations.line.variants}
                  transition={animations.line.transition}
                />
              </>
            ) : (
              <>
                <Text className={`font-bold text-3xl text-${theme.text.bodyTitle}`}>{data.title}</Text>
                <div style={{ height: '1px' }} className={`my-4 bg-${theme.text.body}`}></div>
              </>
            )}
          </div>
          <Text>{main.subTitle}</Text>
          <br /> <Text className={`text-3xl`}>{main.price}</Text>
          <Text className={`my-4 font-light`}>{main.text}</Text>
          <div className={`font-bold text-2xl ${theme.textDark} my-4`}>
            <a className={``} href={`tel:${contacts.phones[0]}`}>
              {contacts.phones[0]}
            </a>
          </div>
          <div className={`${theme.styles.buttons} text-${theme.text.buttons} bg-${theme.bg.buttons} hover:bg-${theme.bg.buttonsHover} active:scale-105`} href={'#Contacts'}>
            Оставить заявку
          </div>
        </div>
      </div>
      <div
        className={`p-10 w-full md:w-6/12 h-full absolute right-0 ${!lgView && 'opacity-30'}`}
        style={{
          background: `no-repeat url(${main.img}.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
}
