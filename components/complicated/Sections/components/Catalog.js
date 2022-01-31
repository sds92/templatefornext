import React from 'react';
import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';
import { animations } from '../../../../styles/animations';
// import products from '../../../../data/products.json';
import { Button, Title, SubTitle } from '../../../lib';
import About from './About';
// react-menu
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

import { Icons } from '../../';

export default function Catalog({ lgView, content, app, theme, products }) {
  const [state, setState] = React.useState({
    chosen: 0,
    hover: null,
    show: false,
  });

  const arr = [];
  products.map((item) => {
    return item.sizes.map((inner_item, index) => {
      return arr.push({
        category: item.name,
        catId: item.id,
        title: `${app.productTitle} ${item.name.toUpperCase()}, ${inner_item[1]} ${inner_item[0]}`,
        prices: item.prices.map((item_inner2) => [item_inner2[0][index], item_inner2[1]]),
        img: item.files.product,
      });
    });
  });
    console.log("🚀 ~ file: Catalog.js ~ line 34 ~ products.map ~ products", products)

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <>
      <div ref={ref} className={``}>
        <div
          className={`transition-all duration-300 delay-100 ${
            inView ? `translate-y-0 opacity-100` : `translate-y-11 opacity-0`
          }`}
        >
          <Title a={content[0][0]} b={content[0][1]}></Title>
        </div>
        <div
          className={`transition-all duration-300 mx-1 delay-100 ${
            inView ? `translate-y-0 opacity-100` : `-translate-y-11 opacity-0`
          }`}
        >
          <SubTitle>{content[1]}</SubTitle>
        </div>

        <div className={`w-full`}>
          <div className={`flex items-center justify-center`}>
            {products.length >= 5 || !lgView ? (
              <Menu
                menuButton={({ open }) => {
                  return (
                    <MenuButton className={`ml-4 my-4 ${theme?.buttonColours}`}>
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
                {products.map((innerItem, index) => (
                  <MenuItem
                    key={`NAVLGINNER${index}`}
                    onClick={() => {
                      setState((state) => {
                        return { ...state, chosen: index };
                      });
                    }}
                  >
                    &nbsp;{innerItem.title}
                  </MenuItem>
                ))}
              </Menu>
            ) : (
              <>
                <ul className={`my-2 flex flex-wrap gap-6 justify-center relative max-w-7xl mx-auto`}>
                  {products.map((item, index) => (
                    <li
                      className={`cursor-pointer text-2xl text-slate-700 font-light relative h-8`}
                      key={`LINK${index}`}
                      onClick={() => {
                        setState((state) => {
                          return { ...state, chosen: index };
                        });
                      }}
                    >
                      <div
                        className={`whitespace-nowrap text-transparent inset-0 text-center `}
                      >
                        {item.name.toUpperCase()}
                        <div className={`${
                        index === state.chosen ? 'user-catalog-active-link font-normal' : 'user-catalog-link'
                      } absolute inset-0 text-zinc-800 active:scale-x-105  active:text-belplit24_2 active:font-normal`}>{item.name.toUpperCase()}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <hr />
          <br />
          <div className={`flex flex-wrap gap-6 w-full justify-center`}>
            {arr.map((item, index) => {
              return (
                state.chosen === item.catId && (
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
                      className={`relative hover:scale-110 transition-all`}
                    >
                      <img className={``} src={`images/${item.img}`} alt width='370' height='256' />
                      <div
                        className={`absolute inset-0 bg-black opacity-50 ${
                          state.hover === index && `opacity-0 bg-white`
                        } transition-all`}
                      ></div>
                      <div className={`absolute w-full bottom-6 text-slate-100`}>
                        <p className={`bg-belplit24_2 text-slate-100 font-bold pl-10 text-xl py-1`}>
                          {item.prices.map((item_inner, index_inner) => {
                            return (
                              <span key={`ITEMPRICE${index}`}>
                                {item_inner[0]}
                                {item_inner[1]}{' '}
                              </span>
                            );
                          })}
                        </p>
                        <p className={`pl-10 pt-2 ${state.hover === index && `text-slate-800`}`}>
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
      <About content={content} />
    </>
  );
}
