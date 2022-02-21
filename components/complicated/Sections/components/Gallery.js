import React from 'react';
import { Text } from '../../../lib';
import styles from './Gallery.module.css';

export default function Gallery(props) {
  const { theme, data, w } = props;
  const { gallery } = data.content;
  const imgs = gallery.imgs;
  const [state, setState] = React.useState({
    hover: null,
  });
  return (
    <div className={`py-20`}>
      <Text className={`text-5xl text-center font-bold`}>{gallery.title}</Text>
      <Text className={`text-center py-4 max-w-5xl mx-auto font-light`}>{gallery.text}</Text>
      <hr />
      <br />
      <div className={`flex gap-4 flex-wrap justify-center md:w-10/12 lg:w-8/12 mx-auto`}>
        {imgs.map((item, index) => (
          <div key={`IMG${index}`} className={``}>
            <div className={`relative`}
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
              <img className={``} src={`images/${data.url}/${item[0]}`} alt width='370' height='256' />
              <div
                className={`absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-0 hover:bg-opacity-30 duration-500 transition-all overflow-hidden`}
              >
                <p
                  className={`uppercase absolute bottom-0 mb-4 text-left text-slate-100 leading-5 transition-all px-2 py-1 ${styles.imgTitle} bg-${theme.bg.productcardPrice} ${state.hover === index ? 'bg-opacity-80 opacity-100 translate-x-0' : 'bg-opacity-0 opacity-0 -translate-x-10'}`}
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
