import React from 'react';
import { Title, SubTitle } from '../../../lib';

export default function About({content}) {
  const imgs = content[2];
  return (
    <div className={``}>
      <Title a={`Что такое`} b={`МДВП БЕЛТЕРМО`}></Title>
      <SubTitle>
        {content[1]}
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
