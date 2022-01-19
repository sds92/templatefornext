import React from 'react';
import { AnimatePresence, domAnimation, LazyMotion, m, motion } from 'framer-motion';
import { Button } from '../../../lib';
import { animations } from '../../../../styles/animations';

export default function Main({ app, content, lgView }) {
  return (
    <div className={`w-full flex user-main-fs relative`}>
      <div className={`p-10 w-full md:w-6/12 flex items-center absolute md:relative inset-0 z-10`}>
        <div className={`max-w-xl ml-auto -mt-10 cursor-default`}>
          <div>
            {lgView ? (
              <>
                <motion.div
                  className='font-bold text-3xl text-belplit24_2'
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  variants={animations.slideUp.variants}
                  transition={animations.slideUp.transition}
                >
                  {app.title}
                </motion.div>
                <motion.div
                  style={{ height: '1px' }}
                  className={`my-4 bg-belplit24`}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  variants={animations.line.variants}
                  transition={animations.line.transition}
                />
              </>
            ) : (
              <>
                <div className='font-bold text-3xl text-belplit24_2'>{app.title}</div>
                <div style={{ height: '1px' }} className={`my-4 bg-belplit24`}></div>
              </>
            )}
          </div>
          <span className={``}>{content[0]}</span>
          <br /> <span className={`text-3xl`}>{content[1]}</span>
          <p className={`my-4 text-black md:text-slate-800 font-light`}>{content[2]}</p>
          <div className={`font-bold text-2xl text-belplit24_2 my-4`}>
            <a className={``} href={`tel:${app.contacts.phones[0]}`}>
              {app.contacts.phones[0]}
            </a>
          </div>
          <Button href={'#Contacts'}>Оставить заявку</Button>
        </div>
      </div>
      <div
        className={`p-10 w-full md:w-6/12 h-full absolute right-0 ${!lgView && 'opacity-30'}`}
        style={{
          background: `no-repeat url(${content[3]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
}
