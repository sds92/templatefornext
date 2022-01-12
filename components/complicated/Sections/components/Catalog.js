import React from 'react';
import Fade from 'react-reveal/Fade';
import products from '../../../../data/products.json';
import { Button, Title, SubTitle } from '../../../lib';
// react-menu
import { Menu, MenuItem, MenuButton, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

import { Icons } from '../../';

export default function Catalog({ lgView }) {
  const [state, setState] = React.useState({
    chosen: 0,
    hover: null,
    show: false,
  });
  const [openMenu, setOpenMenu] = React.useState(false);

  const arr = [];
  products.map((item) => {
    return item.sizes.map((inner_item, index) => {
      return arr.push({
        category: item.name,
        catId: item.id,
        title: `МДВП ${item.name.toUpperCase()}, ${inner_item[1]} ${inner_item[0]}`,
        price: item.prices.square[index],
      });
    });
  });

  return (
    <div className={``}>
      <Title a={`Размеры и цены`} b={`МДВП БЕЛТЕРМО`}></Title>
      <SubTitle> У нас представлены плиты всех размеров, с толщиной МДВП плиты от 20 до 200 мм.</SubTitle>

      <div className={``}>
        <div className={``}>
          {!lgView ? (
            <Menu
              menuButton={({ open }) => {
                open ? setOpenMenu(true) : setOpenMenu(false);
                return (
                  <MenuButton className={``}>
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
                  className={``}
                  // onMouseEnter={() => setHover({ [index]: true })}
                  // onMouseLeave={() => setHover({ [index]: false })}
                >
                  &nbsp;{innerItem.title}
                </MenuItem>
              ))}
            </Menu>
          ) : (
            <>
              <ul className={`my-2 flex gap-6 justify-center`}>
                {products.map((item, index) => (
                  <li
                    className={`${
                      index === state.chosen ? 'user-catalog-active-link' : 'user-catalog-link'
                    } cursor-pointer text-2xl text-slate-700 font-light`}
                    key={`LINK${index}`}
                    onClick={() => {
                      setState((state) => {
                        return { ...state, chosen: index };
                      });
                    }}
                  >
                    {item.name.toUpperCase()}
                  </li>
                ))}
              </ul>
              <hr />
              <br/>
            </>
          )}
        </div>
        <div className={`flex flex-wrap gap-6 w-full justify-center`}>
          {arr.map((item, index) => {
            return (
              state.chosen === item.catId && (
                <Fade key={`ITEM${index}`}>
                  <div className={``}>
                    <div className={`relative`}>
                      <img
                        className={``}
                        src={`images/belplit-${item.category}-sp.jpg`}
                        alt
                        width='370'
                        height='256'
                      />
                      <div className={`absolute inset-0 bg-black opacity-50`}></div>
                      <div className={`absolute w-full bottom-6`}>
                        <p className={`bg-belplit24_2 text-slate-100 font-bold pl-10 text-xl py-2`}>
                          {item.price}руб./м2
                        </p>
                        <p className={`text-slate-100 pl-10 pt-2`}>{item.title}</p>
                      </div>
                    </div>
                  </div>
                </Fade>
              )
            );
          })}
        </div>
        <br/>
        <hr />
        <br/>
      </div>
    </div>
  );
}
