import React from 'react';
import { Title, Text } from '../../../lib';

export default function Advantages({ content, theme }) {
  const textArr = content[1]; 
  const textArr2 = content[3];
  return (
    <>
      <div className={`${theme.bg.advantages} flex flex-col`}>
        <div className={`max-w-6xl mx-auto py-20 px-4`}>
          <div
            className={`flex font-bold flex-wrap justify-center items-center max-w-7xl mx-auto transition-all duration-300 delay-100 `}
          >
            <Text className={`text-3xl  ${theme.text.color.title2}`}>Преимущества МДВП</Text>&nbsp;
            <Text className={`text-3xl ${theme.text.color.title}`}>БЕЛТЕРМО</Text>
          </div>
          <article className={`py-10`}>
            {textArr.map((item, index) => (
              <div className={`flex`} key={`TEXT1${index}`}>
                <div className={`flex flex-col`}>
                  <div
                    className={`mx-auto h-1.5 ${index === 0 ? `` : `bg-slate-100`}`}
                    style={{ width: '1px' }}
                  />
                  <div className={`rounded-full border w-4 h-4 flex-none`} />
                  <div className={`mx-auto bg-slate-100 grow`} style={{ width: '1px' }} />
                </div>
                <div className={``}>
                  <p className={`text-slate-300 pl-2 rd-nav-link text-lg tracking-tight font-light`}>
                    {item[0].toUpperCase()}
                  </p>
                  <p className={`text-slate-100 pl-2 pb-4`}>{item[1]}</p>
                </div>
              </div>
            ))}
          </article>
          <div
            className={`flex font-bold flex-wrap justify-center items-center max-w-7xl mx-auto transition-all duration-300 delay-100 `}
          >
            <Text className={`text-3xl  ${theme.text.color.title2}`}>Применение МДВП</Text>&nbsp;
            <Text className={`text-3xl ${theme.text.color.title}`}>БЕЛТЕРМО</Text>
          </div>
          <article className={`py-10`}>
            {textArr2.map((item, index) => (
              <div className={`flex`} key={`TEXT1${index}`}>
                <div className={`flex flex-col`}>
                  <div
                    className={`w-0.5 mx-auto h-1.5 ${index === 0 ? `` : `bg-slate-100`}`}
                    style={{ width: '1px' }}
                  />
                  <div className={`rounded-full border w-4 h-4 flex-none`} />
                  <div className={`mx-auto bg-slate-100 grow`} style={{ width: '1px' }} />
                </div>
                <div className={``}>
                  <p className={`text-slate-300 pl-2 rd-nav-link text-lg tracking-tight font-light`}>
                    {item[0].toUpperCase()}
                  </p>
                  <p className={`text-slate-100 pl-2 pb-4`}>{item[1]}</p>
                </div>
              </div>
            ))}
          </article>
        </div>
      </div>
    </>
  );
}
