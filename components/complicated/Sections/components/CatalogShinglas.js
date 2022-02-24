import React from 'react';

import { motion } from 'framer-motion';
import { animations } from '../../../../styles/animations';
import { Button, Text } from '../../../lib';
import About from './About';
// react-menu
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

import { Icons } from '../..';

export default function CatalogShinglas(props) {
  const { theme, lgView, w, datafromDB, data } = props;
  const { catalog } = data.content;
  const [products, categories, nested] = datafromDB;
  const [state, setState] = React.useState({
    category: 0,
    subcategory: 0,
    color: 0,
    chosen: nested
      ? `${categories[0].category}_${categories[0].items[0][0]}__${categories[0].items[0][1][0]}`
      : categories[0].category,
    hover: null,
    show: false,
    categoryOpen: {},
  });

  const arr = products.flat();
  // console.log('🚀', arr, categories, state, categories[0].items[0]);

  const minPrice = (productsArr) => {
    return Math.min(...productsArr.map((item) => item.price));
  };

  const curProduct = arr.find(
    (item) => state.chosen === `${item.category}_${item.subcategory[0]}__${item.subcategory[1]}`
  );
  console.log("🚀 ~ file: CatalogShinglas.js ~ line 39 ~ CatalogShinglas ~ curProduct", curProduct)

  return (
    <>
      <div className={``}>
        <Text className={`zero:text-xl sm:text-5xl text-center font-bold`}>{catalog.title}</Text>
        <Text className={`zero:text-sm sm:text-xl mt-2  text-center font-light`}>{catalog.subTitle}</Text>
        <Text className={`text-xl text-center font-light`}>{catalog.text}</Text>

        <div className={`w-full`}>
          <div className={`flex flex-col max-w-7xl mx-auto`}>
            <div className={`flex zero:flex-col sm:flex-row zero:items-start sm:justify-center ml-2 my-2`}>
              {categories.map((item, index) => (
                <div
                  className={`cursor-pointer sm:text-2xl zero:text-base text-zinc-700 font-light relative`}
                  key={`LINK${index}`}
                  onClick={() => {
                    setState((state) => {
                      return {
                        ...state,
                        chosen: `${item.category}_${categories[index].items[0][0]}__${categories[index].items[0][1][0]}`,
                        category: index,
                        subcategory: 0,
                      };
                    });
                  }}
                >
                  <div
                    className={`${
                      item.category === state.chosen.slice(0, state.chosen.indexOf('_'))
                        ? `sm:font-normal zero:font-bold text-zinc-900 underline decoration-1 underline-offset-4 decoration-${theme.borders.catalogActive}`
                        : 'text-zinc-800'
                    } mx-2 sm:text-center zero:text-left active:scale-x-105 active:text-${
                      theme.text.bodyTitle
                    } active:font-normal`}
                  >
                    <span
                      className={`sm:hidden transition-all font-bold ${
                        item.category === state.chosen.slice(0, state.chosen.indexOf('_'))
                          ? `text-${theme.text.bodyTitle}`
                          : 'text-transparent'
                      }`}
                    >
                      {'>'}&nbsp;
                    </span>
                    {item.category.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
            <hr />
            {/* COLLECTION */}
            <div className={`flex flex-wrap zero:mx-3`}>
              {categories[state.category].items.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      setState((state) => {
                        return {
                          ...state,
                          chosen: `${categories[state.category].category}_${
                            categories[state.category].items[index][0]
                          }__${categories[state.category].items[index][1][0]}`,
                          subcategory: index,
                        };
                      });
                    }}
                    className={`font-light mx-1 cursor-pointer ${
                      item[0] ===
                      state.chosen.slice(state.chosen.indexOf('_') + 1, state.chosen.indexOf('__'))
                        ? `text-zinc-900`
                        : `text-zinc-400`
                    }`}
                    style={{ minWidth: '100px' }}
                    key={`CATEGORY${index}`}
                  >
                    {item[0]} <br />
                    <span
                      className={`${
                        item[0] ===
                        state.chosen.slice(state.chosen.indexOf('_') + 1, state.chosen.indexOf('__'))
                          ? `font-bold `
                          : `text-zinc-400`
                      }`}
                    >
                      от&nbsp;
                      {minPrice(
                        arr.filter(
                          (item_i) =>
                            item_i.category === categories[state.category].category &&
                            item_i.subcategory[0] === categories[state.category].items[index][0]
                        )
                      )}
                      &nbsp;₽/м²
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <hr />
          {/* COLOR */}
          <div className={`flex flex-wrap max-w-7xl mx-auto`}>
            {categories[state.category].items[state.subcategory][1].map((item, index) => {
              return (
                <div onClick={
                  () => {
                    setState((state) => {
                      return {
                        ...state,
                        chosen: `${categories[state.category].category}_${
                          categories[state.category].items[state.subcategory][0]
                        }__${categories[state.category].items[state.subcategory][1][index]}`,
                        color: index,
                      };
                    });
                  }
                } className={`mx-2 flex flex-col items-center cursor-pointer`} key={`COLOR${index}`}>
                  <div className={`zero:text-xs sm:text-base`}>{item}</div>
                  <div className={`overflow-hidden rounded-full zero:w-16 sm:w-20`}>
                    <img
                      className={``}
                      src={`/images/shinglas.site/products/${state.chosen.slice(
                        0,
                        state.chosen.indexOf('_')
                      )}/${state.chosen.slice(
                        state.chosen.indexOf('_') + 1,
                        state.chosen.indexOf('__')
                      )}/${item}sm.jpg`}
                      alt
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <br />
          <div className={`flex zero:flex-col sm:flex-row gap-6 w-full justify-start max-w-7xl mx-auto`}>
            <div className={`relative overflow-hidden`}>
              <img
                className={``}
                src={`/images/shinglas.site/products/${curProduct.category}/${curProduct.subcategory[0]}/${curProduct.subcategory[1]}.jpg`}
                alt
                width='500'
                height='300'
              />
            </div>
            <div className={`text-zinc-800`}>
              <p className={`bg-belplit24_2 text-zinc-800 font-light pl-10 text-xl py-1`}>
                <span className={`text-7xl font-bold`}>{curProduct.price}</span>
                {' руб. '}
                {curProduct.priceFor}
              </p>
              <p className={`pl-10 pr-4 py-1.5 text-zinc-800`}>{curProduct.title}</p>
            </div>
          </div>
          <br />
          <hr />
          <br />
        </div>
      </div>
    </>
  );
}
