import React from 'react';
import { Title, SubTitle } from '../../../lib';

export default function Gallery(props) {
  const content = props.content.content.gallery;
  const imgs = content[2];
  const [state, setState] = React.useState({
    hover: null,
  });
  return (
    <div id={`Gallery`} className={`py-20`}>
      <Title a={content[0][0]} b={content[0][1]} />
      <SubTitle>{content[1]}</SubTitle>
      <hr />
      <br />
      <div className={`flex flex-wrap justify-center md:w-10/12 lg:w-8/12 mx-auto`}>
        {imgs.length !== 0 && (
          <>
            <div className={`flex flex-wrap justify-center items-center`}>
              {imgs.map((item, index) => (
                <div key={`IMG${index}`} className={`cursor-pointer overflow-hidden md:basis-1/2 p-4`}>
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
                    <div
                      className={`relative h-full w-full transition-all duration-1000 overflow-hidden `}
                    >
                      <img
                        alt=''
                        className={`min-h-full transition-all duration-1000 ${
                          state.hover === index ? 'scale-110' : ''
                        } w-auto object-cover`}
                        src={`${item[0]}.webp`}
                      >
                      </img>
                        <div
                          className={`absolute shadow-2xl inset-0 bg-black bg-opacity-30 md:bg-opacity-0 hover:bg-opacity-30 duration-500 transition-all overflow-hidden`}
                        >
                          <p
                            className={`uppercase bg-belplit24_2 absolute bottom-0 mb-4 text-left text-slate-100 leading-5 transition-all px-2 py-1  ${
                              state.hover === index
                                ? 'bg-opacity-80 opacity-100 translate-x-'
                                : 'bg-opacity-0 opacity-0 -translate-x-10'
                            }`}
                          >
                            {item[1]}
                          </p>
                        </div>
                    </div>
                    {/* <img
                      className={`transition-all duration-1000 ${state.hover === index ? 'scale-110' : ''}`}
                      src={`${item[0]}.webp`}
                      alt=''
                      width='370'
                      height='256'
                    /> */}
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
