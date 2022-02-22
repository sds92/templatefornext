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
  const [products, categories] = datafromDB;
  const [state, setState] = React.useState({
    chosen: categories[0].category,
    hover: null,
    show: false,
  });

  const arr = products.flat();


  return (
    <>
      <div id={`Catalog`} className={``}>
        <Text className={`zero:text-xl sm:text-5xl text-center font-bold`}>{catalog.title}</Text>
        <Text className={`zero:text-sm sm:text-xl mt-2  text-center font-light`}>{catalog.subTitle}</Text>
        <Text className={`text-xl text-center font-light`}>{catalog.text}</Text>

        <div className={`w-full`}>
          <div className={`flex items-center justify-center`}>
            {!lgView ? (
              <Menu
                menuButton={({ open }) => {
                  return (
                    <MenuButton className={`my-4 ${theme.styles.buttons} text-${theme.text.buttons} bg-${theme.bg.buttons} hover:bg-${theme.bg.buttonsHover} active:scale-105`}>
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
                        return { ...state, chosen: index };
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
                  {categories.map((item, index) => (
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
                          } text-center absolute inset-0  active:scale-x-105  active:text-${theme.text.bodyTitle} active:font-normal`}
                        >
                          {item.category.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <hr />
          <br />
          {/* CATALOG ITEMS */}
          <div className={`flex flex-wrap gap-6 w-full justify-center`}>
            {arr.map((item, index) => {
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
            })}
          </div>
          <br />
          <hr />
          <br />
        </div>
      </div>
    </>
  );
}
