import React from 'react';
import { Text } from '../../../lib';

export default function Advantages(props) {
  const { theme, data } = props;
  const { advantages } = data.content;
  return (
    <>
      <div className={`bg-${theme.bg.advantages} flex flex-col`}>
        <div className={`max-w-6xl mx-auto py-20 px-4`}>
          <Text className={`text-5xl text-center font-bold text-${theme.text.advantages}`}>{advantages.title}</Text>
          <article className={`py-10`}>
            {advantages.items.map((item, index) => (
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
          <Text className={`text-5xl text-center font-bold text-${theme.text.advantages}`}>{advantages.title2}</Text>
          <article className={`py-10`}>
            {advantages.items2.map((item, index) => (
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
