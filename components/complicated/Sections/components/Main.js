import React from 'react';
import { motion } from 'framer-motion';
import { Button, Text } from '../../../lib';
import { ImgGrid } from '../../';
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
      className={`overflow-hidden w-full flex items-center justify-center user-main-fs relative min-h-screen`}
    >
      <div className={`p-10 z-20 lex items-center`}>
        {/* <div
          className={
            styles.blurrer +
            ` z-10 absolute w-full h-full overflow-hidden m-1 border rounded-md border-opacity-20 border-zinc-400`
          }
        >
          <div className={` w-full inset-0 h-full blur-lg bg-white bg-opacity-55`}></div>
        </div> */}
        <div className={`max-w-xl ml-auto -mt-10 cursor-default`}>
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
          <div
            className={`${theme.styles.buttons} text-${theme.text.buttons} bg-${theme.bg.buttons} hover:bg-${theme.bg.buttonsHover} active:scale-105`}
            href={'#Contacts'}
          >
            Оставить заявку
          </div>
        </div>
      </div>
      <div className={`z-10 w-full h-full absolute inset-0`}>
        <ImgGrid imgs={main.imgs} />
      </div>
    </div>
  );
}
