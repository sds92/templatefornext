import React from 'react';
import { Title, SubTitle, Text } from '../../../lib';

export default function Gallery({ content, theme }) {
  const imgs = content[2];
  return (
    <div className={`py-20`}>
      <div
        className={`flex ${theme.text.color} font-bold flex-wrap justify-center items-center max-w-7xl mx-auto transition-all duration-300 delay-100 `}
      >
        <Text className={`text-3xl text-center ${theme.text.color.normal}`}>Примеры использования МДВП</Text>&nbsp;
        <Text className={`text-3xl text-center ${theme.text.color.title}`}>БЕЛТЕРМО</Text>
      </div>
      <hr />
      <br />
      <div className={`flex gap-4 flex-wrap justify-center md:w-10/12 lg:w-8/12 mx-auto`}>
        {imgs.map((item, index) => (
          <div key={`IMG${index}`} className={`flex-none`}>
            <div className={`relative`}>
              <img className={``} src={`${item[0]}.jpg`} alt width='370' height='256' />
              <div
                className={`absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-0 hover:bg-opacity-30 duration-500 transition-all`}
              >
                <div className={``}>
                  <p
                    className={`uppercase absolute inset-0 user-pt-1/2 text-center text-slate-100 md:opacity-0 hover:opacity-100 transition-all`}
                  >
                    {item[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <hr />
    </div>
  );
}
