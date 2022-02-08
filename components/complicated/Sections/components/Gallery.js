import React from 'react';
import { Title, SubTitle } from '../../../lib';

export default function Gallery(props) {
  const { w, lgView, app, theme, products } = props
  const content = props.content.content.gallery
  const imgs = content[2]
  return (
    <div id={`Gallery`} className={`py-20`}>
      <Title a={content[0][0]} b={content[0][1]} />
      <SubTitle>{content[1]}</SubTitle>
      <hr />
      <br />
      <div className={`flex gap-4 flex-wrap justify-center md:w-10/12 lg:w-6/12 mx-auto`}>
        {imgs.map((item, index) => (
          <div key={`IMG${index}`} className={`flex-none`}>
            <div className={`relative`}>
              <img className={``} src={`${item[0]}.jpg`} alt width='370' height='256' />
              <div
                className={`absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-0 hover:bg-opacity-30 duration-500 transition-all`}
              >
                <p
                  className={`uppercase absolute inset-0 user-pt-1/2 text-center text-slate-100 md:opacity-0 hover:opacity-100 transition-all`}
                >
                  {item[1]}
                </p>
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
