import React from 'react';
import { Title } from '../../../lib';

export default function Advantages({content}) {
  const textArr = content[1]
  const textArr2 = content[3]
  return (
    <>
      
      <div className={`bg-zinc-800 flex flex-col`}>
        <div className={`max-w-6xl mx-auto py-20 px-4`}>
          <Title atc={`slate-100`} a={content[0][0]} b={content[0][1]} />
          <article className={`py-10`}>
            {textArr.map((item, index) => (
              <div className={`flex`} key={`TEXT1${index}`}>
                <div className={`flex flex-col`}>
                  <div className={`mx-auto h-1.5 ${index === 0 ? `` : `bg-slate-100`}`} style={{width: '1px'}}/>
                  <div className={`rounded-full border w-4 h-4 flex-none`} />
                  <div className={`mx-auto bg-slate-100 grow`} style={{width: '1px'}}/>
                </div>
                <div className={``}>
                  <p className={`text-slate-300 pl-2 rd-nav-link text-lg tracking-tight font-light`}>{item[0].toUpperCase()}</p>
                  <p className={`text-slate-100 pl-2 pb-4`}>{item[1]}</p>
                </div>
              </div>
            ))}
          </article>
          <Title atc={`slate-100`} a={content[2][0]} b={content[2][1]} />
          <article className={`py-10`}>
            {textArr2.map((item, index) => (
              <div className={`flex`} key={`TEXT1${index}`}>
                <div className={`flex flex-col`}>
                  <div className={`w-0.5 mx-auto h-1.5 ${index === 0 ? `` : `bg-slate-100`}`} style={{width: '1px'}} />
                  <div className={`rounded-full border w-4 h-4 flex-none`} />
                  <div className={`mx-auto bg-slate-100 grow`} style={{width: '1px'}}/>
                </div>
                <div className={``}>
                  <p className={`text-slate-300 pl-2 rd-nav-link text-lg tracking-tight font-light`}>{item[0].toUpperCase()}</p>
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
