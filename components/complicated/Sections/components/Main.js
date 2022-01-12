import React from 'react';
import { AnimatePresence, domAnimation, LazyMotion, m, motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import { Button } from '../../../lib';
import { animations } from '../../../../styles/animations';

export default function Main() {
  return (
    <div className={`w-full flex user-main-fs relative`}>
      <div className={`p-10 w-full md:w-6/12 flex items-center absolute md:relative inset-0 z-10`}>
        <div className={`max-w-xl ml-auto -mt-10 cursor-default`}>
          <span className={`font-bold text-3xl text-belplit24_2`}>МДВП БЕЛТЕРМО</span>
          <br />
          <span className={``}>Экологичная тепло-звукоизоляция дома</span>
          <br /> <span className={`text-3xl`}>от 289 руб.</span>
          <p className={`my-4 text-slate-800 font-light tracking-wide`}>
            Плиты Белтермо - это природный материал на 94% состоящий из сосны! Предназначен для создания
            эффективной и экологически-чистой звуко/теплоизоляции дома, а также его ветрозащиты
          </p>
          <div className={`font-bold text-2xl text-belplit24_2 my-4`}>
            <a className={``} href='tel:+74951202735'>
              +7 (495) 120-27-35
            </a>
          </div>
          <Button href={'#Contacts'}>Оставить заявку</Button>
        </div>
      </div>
      <div
        className={`p-10 w-full md:w-6/12 absolute md:relative inset-0`}
        style={{
          background: 'no-repeat url(images/main.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`absolute inset-0 bg-slate-900 bg-opacity-30 md:opacity-0 transition-all`}></div>
      </div>
    </div>
  );
}
