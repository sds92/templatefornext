import React from 'react';

import { motion } from 'framer-motion';
import { animations } from '../../../../styles/animations';
import { Button, Text } from '../../../lib';

// react-menu
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

import { Icons } from '../../';

export default function Catalog(props) {
  const { theme, lgView, w, datafromDB, data } = props;
  const { catalog } = data.content;
  const [products, categories, nested] = datafromDB;
  const [state, setState] = React.useState({
    chosen: nested ? `${categories[0].category}_${categories[0].items[0]}` : categories[0].category,
    hover: null,
    show: false,
    categoryOpen: {},
  });

  const arr = products.flat();

  return (
    <>
      <div id={`Catalog`} className={``}>
        <Text className={`zero:text-xl sm:text-5xl text-center font-bold`}>{catalog.title}</Text>
        <Text className={`zero:text-sm sm:text-xl mt-2  text-center font-light`}>{catalog.subTitle}</Text>
        <Text className={`text-xl text-center font-light`}>{catalog.text}</Text>
        {catalog.download && (
          <div className={`w-full flex items-center justify-center`}>
            <div
              className={`mt-2 ${theme.styles.buttons} text-${theme.text.buttons} bg-${theme.bg.buttons} hover:bg-${theme.bg.buttonsHover} active:scale-105`}
            >
              <a href={`${catalog.download}`} download>
                Скачать прайс
              </a>
            </div>
          </div>
        )}
        <div className={`w-full`}>
          <div
            className={`flex zero:flex-col zero:max-w-sm sm:max-w-full zero:mx-auto sm:flex-row flex-wrap items-center justify-center`}
          >
            {/* NESTED */}
            {nested ? (
              <>
                {/* CATEGORIES */}
                {categories.map((item, index) => {
                  return (
                    <div
                      className={`flex flex-col zero:w-full sm:w-auto sm:mx-2 `}
                      key={`NAVLGINNER${index}`}
                    >
                      <div
                        className={`flex justify-center zero:w-full zero:mx-auto zero:text-sm sm:text-xl items-center m-2 ${theme.styles.buttons} text-${theme.text.buttons} bg-${theme.bg.buttons} hover:bg-${theme.bg.buttonsHover} active:scale-105`}
                        onClick={() =>
                          setState((state) => {
                            return { ...state, categoryOpen: { [index]: !state.categoryOpen[index] } };
                          })
                        }
                      >
                        {item.category.toUpperCase()}
                        <Icons.ChevronDown
                          extraClasses={`w-6 h-6 transition-all ${
                            state.categoryOpen[index] ? `rotate-180` : ''
                          }`}
                        />
                      </div>
                      {state.categoryOpen[index] && (
                        <div className={`relative`}>
                          <div
                            className={`fixed w-full h-full inset-0 z-40`}
                            onClick={() =>
                              setState((state) => {
                                return { ...state, categoryOpen: { [index]: !state.categoryOpen[index] } };
                              })
                            }
                          ></div>
                          <div
                            style={{ minWidth: '150px' }}
                            className={`flex shadow-xl flex-col absolute top-0 inset-x-0  bg-zinc-100 rounded-md py-4 z-50`}
                          >
                            {/* SUBCATEGORIES */}
                            {item.items
                              .sort((a, b) => {
                                if (a === 'Другие') return 1;
                                return a === b ? 0 : a < b ? -1 : 1;
                              })
                              .map((item_i, index_i) => {
                                return (
                                  <div
                                    onClick={() =>
                                      setState((state) => {
                                        return {
                                          ...state,
                                          chosen: `${item.category}_${item_i}`,
                                          categoryOpen: { [index]: !state.categoryOpen[index] },
                                        };
                                      })
                                    }
                                    className={`uppercase px-4 py-2 cursor-pointer hover:text-${theme.text.buttons} hover:bg-${theme.bg.headerHoverLink}`}
                                    key={`SUBCAT${index}${index_i}`}
                                  >
                                    {item_i}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {!lgView ? (
                  <Menu
                    menuButton={({ open }) => {
                      return (
                        <MenuButton
                          className={`my-4 ${theme.styles.buttons} text-${theme.text.buttons} bg-${theme.bg.buttons} hover:bg-${theme.bg.buttonsHover} active:scale-105`}
                        >
                          <Button
                            style={{ border: 'none' }}
                            onClick={() =>
                              setState((state) => {
                                return { ...state, show: !state.show };
                              })
                            }
                          >
                            Выбрать
                            <Icons.ChevronDown
                              extraClasses={`w-6 h-6 transition-all ${open ? `rotate-180` : ''}`}
                            />
                          </Button>
                        </MenuButton>
                      );
                    }}
                  >
                    {/* MOBILE MENU */}
                    {categories.map((item, index) => (
                      <MenuItem
                        key={`NAVLGINNER${index}`}
                        onClick={() => {
                          setState((state) => {
                            return { ...state, chosen: item.category };
                          });
                        }}
                      >
                        &nbsp;{item.category}
                      </MenuItem>
                    ))}
                  </Menu>
                ) : (
                  // DESKTOP MENU
                  <>
                    <div className={`my-2 flex flex-wrap gap-6 justify-center relative max-w-7xl mx-auto`}>
                      {categories.map((item, index) => {
                        return (
                          <div
                            className={`cursor-pointer text-2xl text-zinc-700 font-light relative h-8`}
                            key={`LINK${index}`}
                            onClick={() => {
                              setState((state) => {
                                return { ...state, chosen: item.category };
                              });
                            }}
                          >
                            <div className={`whitespace-nowrap text-transparent inset-0 text-center `}>
                              {item.category.toUpperCase()}
                              <div
                                className={`${
                                  item.category === state.chosen
                                    ? `font-normal text-zinc-900 underline decoration-1 underline-offset-4 decoration-${theme.borders.catalogActive} `
                                    : 'text-zinc-800'
                                } text-center absolute inset-0  active:scale-x-105  active:text-${
                                  theme.text.bodyTitle
                                } active:font-normal`}
                              >
                                {item.category.toUpperCase()}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <hr />
          <br />
          {/* CATALOG ITEMS */}
          <div className={`flex flex-wrap gap-6 w-full justify-center`}>
            {/* NESTED */}
            {nested ? (
              <>
                {arr.map((item, index) => {
                  return (
                    state.chosen === `${item.category}_${item.subcategory}` && (
                      <motion.div
                        initial='initial'
                        animate='animate'
                        variants={animations.opacity.variants}
                        transition={animations.opacity.transition}
                      >
                        <div
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
                          className={`relative overflow-hidden`}
                        >
                          <img
                            className={`${state.hover === index && `scale-105`} duration-1000 transition-all`}
                            src={data.api.serv + item.imgs[0]}
                            alt
                            width='370'
                            height='256'
                          />
                          <div
                            className={`absolute inset-0 bg-black ${
                              state.hover === index ? `opacity-0` : `opacity-50`
                            } transition-all`}
                          ></div>
                          <div className={`absolute w-full bottom-6 text-slate-100`}>
                            <p
                              className={`bg-${theme.bg.productcardPrice} text-slate-100 font-bold pl-10 text-xl py-1`}
                            >
                              <span key={`ITEMPRICE${index}`}>
                                {item.price}
                                {' руб. '}
                                {item.priceFor}
                              </span>
                            </p>
                            <p
                              className={`pl-10 pr-4 py-1.5 ${
                                state.hover === index && `text-slate-800 bg-zinc-100 bg-opacity-70`
                              }`}
                            >
                              {item.title}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  );
                })}
              </>
            ) : (
              arr.map((item, index) => {
                return (
                  state.chosen === item.category && (
                    <motion.div
                      // className='font-bold text-3xl text-belplit24_2'
                      initial='initial'
                      animate='animate'
                      variants={animations.opacity.variants}
                      transition={animations.opacity.transition}
                    >
                      <div
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
                        className={`relative overflow-hidden`}
                      >
                        <img
                          className={`${state.hover === index && `scale-105`} duration-1000 transition-all`}
                          src={data.api.serv + item.imgs[0]}
                          alt
                          width='370'
                          height='256'
                        />
                        <div
                          className={`absolute inset-0 bg-black ${
                            state.hover === index ? `opacity-0` : `opacity-50`
                          } transition-all`}
                        ></div>
                        <div className={`absolute w-full bottom-6 text-slate-100`}>
                          <p
                            className={`bg-${theme.bg.productcardPrice} text-slate-100 font-bold pl-10 text-xl py-1`}
                          >
                            <span key={`ITEMPRICE${index}`}>
                              {item.price}
                              {' руб. '}
                              {item.priceFor}
                            </span>
                          </p>
                          <p
                            className={`pl-10 pr-4 py-1.5 ${
                              state.hover === index && `text-slate-800 bg-zinc-100 bg-opacity-70`
                            }`}
                          >
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                );
              })
            )}
          </div>
          <br />
          <hr />
          <br />
        </div>
      </div>
    </>
  );
}
