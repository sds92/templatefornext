import React from 'react';
import { Button } from '../../lib';

export default function Deviders() {
  return (
    <div className={`bg-belplit24_3 py-10`}>
      <div className={`flex justify-evenly`}>
        <div className={`text-slate-100`}>
          <span
            className={`font-bold text-xl`}
            // style='visibility: visible; animation-name: slideInRight;'
          >
            Купить тепло-изоляционные плиты Белтермо —<span className={``}>не проблема</span>. Звоните нам!
          </span>
          <br />
          <div className={`font-light py-2`}>
            Доставка по Москве, Краснодару, Минску, Симферополю, Астрахани, Екатеринбургу и Санкт-Петербургу.
          </div>
        </div>
        <a className={``} href='#Contacts'>
          <div
            className={``}
            // style='visibility: visible; animation-name: slideInLeft;'
          >
            <Button href={`#Contacts`}>
              Заказать звонок
            </Button>
          </div>
        </a>
      </div>
    </div>
  );
}
