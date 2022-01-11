import React from 'react';

export default function About() {
  const imgs = [
    ['images/icon1.png', 94, 'ВОЛОКНА ДРЕВЕСИНЫ СОСНЫ'],
    ['images/icon2.png', 1.5, 'ПАРАФИНОВАЯ ЭМУЛЬСИЯ'],
    ['images/icon3.png', 4, 'СИНТЕТИЧЕСКИЕ ВОЛОКНА'],
  ];
  return (
    <div className={``}>
      <div className={`text-center`}>
        <p className={``}>
          <span className={`text-3xl`}>
            Что такое <span className={`font-bold text-belplit24_2`}>МДВП БЕЛТЕРМО</span>
          </span>
          <br />
          <span className={``}>Плиты Белтермо - это природный материал на 94% состоящий из сосны!</span>
          <br />
          <span className={``}>
            Предназначен для создания эффективной и экологически-чистой звуко/теплоизоляции дома, а также его
            ветрозащиты
          </span>
          <br />
          <span className={``}>
            Широкая линейка утеплителей БЕЛТЕРМО позволяет выбрать материал по его назначению,опираясь на
            свойства, характеристики и особенности исполнения каждого его вида.
          </span>
        </p>
      </div>
      <div className={`flex justify-center gap-10`}>
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
