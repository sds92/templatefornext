import React from 'react';

export default function Gallery() {
  const imgs = [
    ['images/example1.jpg', 'Внутренняя изоляции перекрытий под стяжку бесшовных полов (ламинат, паркетная доска)'],
    ['images/example2.jpg', 'Внутренняя изоляция стен'],
    ['images/example3.jpg', 'Утепление зданий'],
    ['images/example4.jpg', 'Внешняя изоляция крыш каркасных домов'],
    ['images/example5.jpg', 'Утепление внешних стен (мокрый фасад) плитами Белтермо'],
    ['images/example6.jpg', 'Изоляция межэтажных перекрытий и потолка'],
  ];
  return (
    <div className={``}>
      <h3 className={`text-center`}>
        <span className={`text-3xl`}>
          Примеры использования <span className={`font-bold text-belplit24_2`}>МДВП БЕЛТЕРМО</span>
        </span>
      </h3>
      <p className={`text-center`}>
        <span className={`text-xl`}>
          МДВП Белтермо применяются в самых разных областях строительства, для самых разных целей.
        </span>
      </p>
      <div className={`flex gap-4 flex-wrap w-8/12 mx-auto`}>
        {imgs.map((item, index) => (
          <div key={`IMG${index}`} className={`flex-none`}>
            <div className={`relative`}>
              <img
                className={``}
                src={item[0]}
                alt
                width='370'
                height='256'
              />
              <div className={`absolute inset-0 bg-black bg-opacity-25`}>
                <p className={`absolute text-slate-100 `}>
                  {item[1]}
                </p>
              </div>
              <div className={``}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
