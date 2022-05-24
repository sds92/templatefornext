import React from 'react';
import { Button, Text } from '../../../lib';
import Category from './catalog/Category';
import Colors from './catalog/Colors';
// react-menu
import '@szhsin/react-menu/dist/index.css';

import { Icons } from '../../';

export default function CatalogAlt1(props) {

  const { lgView, theme, products } = props;
  const content = props.content.content.catalog;
  const [state, setState] = React.useState({
    category: products[0][0],
    subCategory: products[0][1][0][0],
    menuOpen: false,
    color: products[0][1][0][1][0].colors,
  });
 

  return (
    <>
      <div id={`Catalog`} className={`mt-20`}>
        <div
          className={`max-w-7xl mx-auto my-10 flex flex-wrap justify-center transition-all duration-300 delay-100`}
        >
          <Text className={`zero:text-3xl sm:text-5xl font-bold whitespace-nowrap`}>{content[0][0]}</Text>
          &nbsp;
          <Text className={`zero:text-3xl sm:text-5xl font-bold text-belplit24_2 whitespace-nowrap`}>
            {content[0][1]}
          </Text>
        </div>
        <div className={`w-full`}>
          <div className={`w-full ${lgView ? '' : 'absolute z-50'}`}>
            {products.map((category, i) => {
              return (
                <Category
                  key={`category${i}`}
                  lgView={lgView}
                  products={category[1]}
                  categoryName={category[0]}
                  onChangeCategory={setState}
                  state={state}
                />
              );
            })}
          </div>
          {!lgView && !state.menuOpen && (
            <div className={`mx-auto max-w-fit`}>
              <Button
                style={{ border: 'none' }}
                onClick={() =>
                  setState((state) => {
                    return { ...state, menuOpen: !state.menuOpen };
                  })
                }
              >
                Выбрать коллецию
                <Icons.ChevronDown
                  extraClasses={`w-6 h-6 transition-all ${state.menuOpen ? `rotate-180` : ''}`}
                />
              </Button>
            </div>
          )}
          <br />
          <Colors state={state} products={products} setState={setState} />
          <div className={`max-w-7xl mx-auto z-10 my-4 flex flex-wrap px-4`}>
            <div className={`relative overflow-hidden zero:w-full sm:w-2/3`} style={{ height: '307px' }}>
              <img
                alt={`${state.category} ${state.subCategory} ${state.color}`}
                className={`w-full`}
                src={`images/shinglas.site/products/${state.category}/${state.subCategory}/${state.color}.jpg`}
              />
            </div>
            <div className={`flex flex-col zero:w-full sm:w-1/3`}>
              <div className={`font-light ml-4 text-2xl flex flex-col my-2`}>
                {' '}
                Коллекция {state.subCategory}
              </div>
              <div className={`font-bold ml-4 text-3xl flex flex-col mb-2`}>
                {
                  products
                  .find((item) => item[0] === state.category)[1]
                  .find((item) => item[0] === state.subCategory)[1]
                  .find((item) => item.colors === state.color).prices
                }
                ₽/м²
              </div>
              <div className={`ml-4`}>
                <Button theme={theme} href={'#Contacts'}>
                  Рассчитать
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
