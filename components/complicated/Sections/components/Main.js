import React from 'react';

export default function Main() {
  return (
    <div className={`w-full flex`}>
      <div className={`p-10 w-6/12`}>
        <span className={`font-bold text-3xl text-belplit24_2`}>МДВП БЕЛТЕРМО</span>
        <br />
        <span className={``}>Экологичная тепло-звукоизоляция дома</span>
        <br /> <span className={`text-3xl`}>от 289 руб.</span>
        <p className={`my-4 w-96`}>
          Плиты Белтермо - это природный материал на 94% состоящий из сосны! Предназначен для создания
          эффективной и экологически-чистой звуко/теплоизоляции дома, а также его ветрозащиты
        </p>
        <div className={`font-bold text-2xl text-belplit24_2 my-4`}>
          <a className={``} href='tel:+74951202735'>
            +7 (495) 120-27-35
          </a>
        </div>
        <div className={`p-4 w-48 bg-belplit24_2 rounded-md text-slate-100 text-center`}>Оставить заявку</div>
      </div>
      <div
        className={`p-10 w-6/12`}
        style={{
          background: 'no-repeat url(images/main.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
}
