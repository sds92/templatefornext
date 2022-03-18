import React from 'react';
import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';
import { animations } from '../../../../styles/animations';
import { Button, Title, SubTitle, Text } from '../../../lib';
import About from './About';
// react-menu
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

import { Icons } from '../../';

export default function Catalog({ w, lgView, content, app, theme, products }) {
  const [state, setState] = React.useState({
    chosen: products
      .map((item, i) => ({ prTitle: item.title, num: i }))
      .find(({ prTitle }) => prTitle === 'Top').num,
    hover: null,
    show: false,
  });

  const arr = [];
  products.map((item, i) => {
    return item.sizes.map((sizesItem, index) => {
      return arr.push({
        category: item.title,
        catId: i,
        title:
          `${app.productTitle} ${item.title.toUpperCase()}` +
          ', ' +
          `${sizesItem.a}x${sizesItem.b}x${sizesItem.h}мм`,
        prices: [item.prices[index], item.priceFor[index]],
        img: `/images/belplit24.ru/products/belplit-${item.title.toLowerCase()}.jpg`,
      });
    });
  });

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const textAnimation = `${w >= 500 ? (inView ? `translate-y-0 opacity-100` : `translate-y-11 opacity-0`) : ``
    }`;

  return (
    <>
      <div ref={ref} className={``}>
        <div
          className={`flex font-bold flex-wrap justify-center items-center max-w-7xl mx-auto transition-all duration-300 delay-100 ${textAnimation}`}
        >
          <Text className={`zero:text-3xl sm:text-5xl text-center`}>МДВП</Text>&nbsp;
          <Text className={`zero:text-3xl sm:text-5xl text-center ${theme.text.color.title}`}>БЕЛТЕРМО</Text>
        </div>
        <Text className={`zero:text-2xl sm:text-3xl font-bold text-center `}>Найдете дешевле, мы купим у Вас!</Text>
        {/* <Text className={`zero:text-2xl sm:text-3xl font-bold text-center`}>Размеры и цены:</Text> */}
        <div className={`transition-all duration-300 mx-1 delay-100 ${textAnimation}`}>
          <Text className={`font-light max-w-7xl mx-auto text-center text-lg pt-2 px-4`}>{content[1]}</Text>
        </div>

        <div className={`w-full`}>
          <div className={`flex items-center justify-center gap-1`}>
            {!lgView ? (
              <>
                <Menu
                  menuButton={({ open }) => {
                    return (
                      <MenuButton className={`my-4`}>
                        <Button
                          theme={theme}
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
                <a className={`${theme.bg.buttons} rounded-xl`} href={`tel:${app.contacts.phones[0]}`}>
                  <tel>

                    <div
                      className={` ${theme.text.buttons} rounded-md  p-2 w-40 mx-auto flex items-center justify-center gap-1 uppercase cursor-pointer active:scale-105`}
                    >
                      <Icons.Phone extraClasses={`w-8 h-8 mt-1.5`} />
                      Заказать
                    </div>
                  </tel>
                </a>
              </>
            ) : (
              <>
                <ul className={`my-2 flex flex-wrap gap-6 justify-center relative max-w-7xl mx-auto`}>
                  {products.map((item, index) => (
                    <li
                      className={`cursor-pointer text-2xl ${theme.text.catalog} font-light relative h-8`}
                      key={`LINK${index}`}
                      onClick={() => {
                        setState((state) => {
                          return { ...state, chosen: index };
                        });
                      }}
                    >
                      <div className={`whitespace-nowrap text-transparent inset-0 text-center `}>
                        {item.title.toUpperCase()}
                        <div
                          className={`${index === state.chosen
                              ? `${theme.text.color.title} font-normal -mr-1 border-b ${theme.borders.catalogMenuItem}`
                              : ''
                            } absolute hover:font-normal inset-0 ${theme.text.catalog
                            } active:scale-x-105  active:${theme.text.color.title} active:font-normal`}
                        >
                          {item.title.toUpperCase()}
                        </div>
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
                      className={`relative overflow-hidden`}
                    >
                      <img
                        className={`${state.hover === index && `scale-105`} duration-1000 transition-all`}
                        src={item.img}
                        alt
                        width='370'
                        height='256'
                      />
                      <div
                        className={`absolute inset-0 bg-black ${state.hover === index ? `opacity-0` : `opacity-50`
                          } transition-all`}
                      ></div>
                      <div className={`absolute w-full bottom-6 text-slate-100`}>
                        <p className={`${theme.bg.productLine} text-slate-100 font-bold pl-10 text-xl py-1`}>
                          {/* {item.prices.map((item_inner, index_inner) => {
                            return ( */}
                          <span key={`ITEMPRICE${index}`}>
                            {item.prices[0]}
                            {' руб. '}
                            {item.prices[1]}
                          </span>
                          {/* );
                          })} */}
                        </p>
                        <p
                          className={`pl-10 py-1.5 ${state.hover === index && `text-slate-800 bg-zinc-100 bg-opacity-70`
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
          {lgView && (
            <>
              <br />

              <a href={`#Contacts`}>
                <div
                  className={`${theme.bg.buttons} ${theme.text.buttons} w-40 mx-auto rounded-md p-2 flex text-2xl font-light items-center justify-center gap-1 uppercase cursor-pointer active:scale-105`}
                >
                  {/* <Icons.Phone extraClasses={`w-8 h-8 mt-1.5`} /> */}
                  Заказать
                </div>
              </a>
            </>
          )}
          <br />
          <hr />
          <br />
        </div>
      </div>
      <About content={content} w={w} theme={theme} />
    </>
  );
}
