import React from 'react';
import { Button, Title, SubTitle } from '../../../lib';

export default function Gallery() {
  const imgs = [
    [
      'images/example1.jpg',
      'Внутренняя изоляции перекрытий под стяжку бесшовных полов (ламинат, паркетная доска)',
    ],
    ['images/example2.jpg', 'Внутренняя изоляция стен'],
    ['images/example3.jpg', 'Утепление зданий'],
    ['images/example4.jpg', 'Внешняя изоляция крыш каркасных домов'],
    ['images/example5.jpg', 'Утепление внешних стен (мокрый фасад) плитами Белтермо'],
    ['images/example6.jpg', 'Изоляция межэтажных перекрытий и потолка'],
  ];
  return (
    <div className={`py-20`}>
      <Title a={`Примеры использования`} b={`МДВП БЕЛТЕРМО`} />
      <SubTitle>
        МДВП Белтермо применяются в самых разных областях строительства, для самых разных целей.
      </SubTitle>
      <hr/>
      <br/>
      <div className={`flex gap-4 flex-wrap justify-center md:w-10/12 lg:w-8/12 mx-auto`}>
        {imgs.map((item, index) => (
          <div key={`IMG${index}`} className={`flex-none`}>
            <div className={`relative`}>
              <img className={``} src={item[0]} alt width='370' height='256' />
              <div
                className={`absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-0 hover:bg-opacity-30 transition-all`}
              >
                <p
                  className={`absolute inset-0 user-pt-1/2 text-center text-slate-100 md:opacity-0 hover:opacity-100 transition-all`}
                >
                  {item[1]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br/>
      <hr/>
    </div>
  );
}
