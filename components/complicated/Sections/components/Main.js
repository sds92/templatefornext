import React from 'react';
import { motion } from 'framer-motion';
import { Button, Text } from '../../../lib';
import { ImgGrid, Slider } from '../../';
import { animations } from '../../../../styles/animations';
import styles from './styles/main.module.css';

export default function Main(props) {
  const { theme, app, lgView } = props;
  const { main } = app.content;
  const { contacts } = app;

  return (
    <div
      id={`Main`}
      style={{ minHeight: 'calc(100vh - 80px)' }}
      className={`overflow-hidden w-full flex zero:items-center md:items-start zero:justify-center  md:justify-start user-main-fs relative h-1 z-0`}
    >
      <div className={`flex flex-col items-start justify-start max-w-7xl w-full mx-auto m-4`}>
        <div className={`relative z-40 `}>
          <div
            className={
              styles.blurrer +
              ` z-20 absolute w-full h-full overflow-hidden p-1 flex items-center justify-center border rounded-md   border-opacity-20 border-zinc-400 `
            }
          >
            <div className={` w-full inset-0 h-full blur-lg bg-white bg-opacity-80 border-opacity-20 scale-110 shadow-md`}></div>
          </div>
          <div className={`max-w-xl p-8 cursor-default relative z-40`}>
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
            <Text>{main.subTitle}</Text>
            <br /> <Text className={`text-3xl`}>{main.price}</Text>
            <Text className={`my-4 font-light`}>{main.text}</Text>
            <div className={`font-bold text-2xl ${theme.textDark} my-4`}>
              <a className={``} href={`tel:${contacts.phones[0]}`}>
                {contacts.phones[0]}
              </a>
            </div>
            <a href={'#Contacts'} title='Форма'>
              <div
                className={`${theme.styles.buttons} text-${theme.text.buttons} bg-${theme.bg.buttons} hover:bg-${theme.bg.buttonsHover} active:scale-105`}
              >
                Оставить заявку
              </div>
            </a>
          </div>
        </div>
      </div>
      <Slider lgView={lgView}imgs={main.imgs} />
    </div>
  );
}
