import React from 'react';
import { Button, Title, SubTitle } from '../../../lib';

export default function About() {
  const imgs = [
    ['images/icon1.png', 94, 'ВОЛОКНА ДРЕВЕСИНЫ СОСНЫ'],
    ['images/icon2.png', 1.5, 'ПАРАФИНОВАЯ ЭМУЛЬСИЯ'],
    ['images/icon3.png', 4, 'СИНТЕТИЧЕСКИЕ ВОЛОКНА'],
  ];
  return (
    <div className={``}>
      <Title a={`Что такое`} b={`МДВП БЕЛТЕРМО`}></Title>
      <SubTitle>
        Плиты Белтермо - это природный материал на 94% состоящий из сосны! <br /> У нас представлены плиты
        всех размеров, с толщиной МДВП плиты от 20 до 200 мм. <br /> Широкая линейка утеплителей БЕЛТЕРМО
        позволяет выбрать материал по его назначению,опираясь на свойства, характеристики и особенности
        исполнения каждого его вида.
      </SubTitle>

      <div className={`flex flex-wrap justify-center gap-40 my-10`}>
        {imgs.map((item, index) => (
          <div key={`ADVIMG${index}`} className={``}>
            <article className={`flex flex-col justify-center items-center`}>
              <div>
                <img src={item[0]} alt='' />
              </div>
              <div className={`flex text-3xl justify-center`}>
                <div className={``}>{item[1]}</div>%
              </div>
              <h5 className={``}>{item[2]}</h5>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
