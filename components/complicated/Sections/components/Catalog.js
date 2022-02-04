import React from 'react';
import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';
import { animations } from '../../../../styles/animations';
import { Button, Title, SubTitle } from '../../../lib';
import About from './About';
// react-menu
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

import { Icons } from '../../';

export default function Catalog({ w, lgView, content, app, theme, products }) {
  const [state, setState] = React.useState({
    chosen: 0,
    hover: null,
    show: false,
  });

  const arr = [];
  products.map((item, i) => {
    return item.infos.map((infosItem, index) => {
      return arr.push({
        category: item.title,
        catId: i,
        title: `${app.productTitle}, ${infosItem}`,
        prices: [item.prices[index], item.priceFor[index]],
        imgs: item.imgs[index][0]
          ? app.api.serv + item.paths[index] + item.imgs[index][0]
          : 'https://xn--j1ano.com//uploads/catalog/5f85ba274a9a5d34e0a45fed/categories/5fb3766c5225b630baf84756/610a632c9f01f210be9c5ec9/bac3642e-42ee-497f-8757-881eb7b72744.jpg',
        //
      });
    });
  });

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const textAnimation = `${
    w >= 500 ? (inView ? `translate-y-0 opacity-100` : `translate-y-11 opacity-0`) : ``
  }`;

  return (
    <>
      <div ref={ref} className={``}>
        <div className={`transition-all duration-300 delay-100 ${textAnimation}`}>
          <Title a={content[0][0]} b={content[0][1]}></Title>
        </div>
        <div className={`transition-all duration-300 mx-1 delay-100 ${textAnimation}`}>
          <SubTitle>{content[1]}</SubTitle>
        </div>

        <div className={`w-full`}>
          <div className={`flex items-center justify-center`}>
            {[
              { title: 'ФК', key: 'ФК' },
              { title: 'ФСФ', key: 'ФСФ' },
              { title: 'ЛФСФ', key: 'Ламинированная' },
            ].map((item, index) => {
              return (
                <Menu
                  key={`MENU${index}`}
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
                          {item.title}
                          <Icons.ChevronDown
                            extraClasses={`w-6 h-6 transition-all ${open ? `rotate-180` : ''}`}
                          />
                        </Button>
                      </MenuButton>
                    );
                  }}
                >
                  {products
                    .filter((item2) => {
                      console.log('🚀 ~ file: Catalog.js ~ line 86 ~ .filter ~ item2', item2.title);

                      return item2.title.includes(`${item.key}`);
                    })
                    .map((innerItem, index) => (
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
              );
            })}
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
                        src={item.imgs}
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
                        <p className={`bg-belplit24_2 text-slate-100 font-bold pl-10 text-xl py-1`}>
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
                          className={`pl-10 py-1.5 ${
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
      <About content={content} w={w} />
    </>
  );
}
