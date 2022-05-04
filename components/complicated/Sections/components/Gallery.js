import React from 'react';
import { Title, SubTitle } from '../../../lib';

export default function Gallery({ content }) {
  const imgs = content[2]
  const [state, setState] = React.useState({
    hover: null,
  });
  return (
    <div className={`py-20`}>
      <Title a={content[0][0]} b={content[0][1]} />
      <SubTitle>{content[1]}</SubTitle>
      <hr />
      <br />
      <div className={`flex gap-4 flex-wrap justify-center md:w-10/12 lg:w-8/12 mx-auto`}>
      {imgs.length !== 0 && (
        <>
          <div className={`flex gap-4 flex-wrap justify-center `}>
            {imgs.map((item, index) => (
              <div key={`IMG${index}`} className={``}>
                <div
                  className={`relative`}
                  onMouseEnter={() =>
                    setState((state) => {
                      return { ...state, hover: index };
                    })
                  }
                  onMouseLeave={() =>
                    setState((state) => {
                      return { ...state, hover: null };
                    })
                  }
                >
                  <img className={``} src={`${item[0]}.webp`} alt width='370' height='256' />
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-0 hover:bg-opacity-30 duration-500 transition-all overflow-hidden`}
                  >
                    <p
                      className={`uppercase bg-belplit24_2 absolute bottom-0 mb-4 text-left text-slate-100 leading-5 transition-all px-2 py-1  ${
                        state.hover === index
                          ? 'bg-opacity-80 opacity-100 translate-x-0'
                          : 'bg-opacity-0 opacity-0 -translate-x-10'
                      }`}
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
        </>
      )}
      </div>
      <br />
      <hr />
    </div>
  );
}
