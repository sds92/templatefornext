import React from 'react';
import { Button, Title, SubTitle, Text } from '../../../lib';
import Category from './catalog/Category';
import Colors from './catalog/Colors';
// react-menu
import '@szhsin/react-menu/dist/index.css';

import { Icons } from '../../';

export default function CatalogAlt1(props) {
  const { w, lgView, app, theme, products } = props;
  const content = props.content.content.catalog;
  const [state, setState] = React.useState({
    category: products[0][0],
    subCategory: products[0][1][0][0],
    menuOpen: false,
    color: products[0][1][0][1].color,
  });

  // const product = products[state.chosen];
  // const price = products[state.chosen].prices[state.chosenOption];
  // const title = product.titles[state.chosenOption];
  // const color = product.colours[state.chosenOption];

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
          <Colors state={state} products={products} />
          {/* <div className={`max-w-7xl mx-auto text-3xl font-bold my-4 px-4`}>
            <div className={`my-4 zero:text-center sm:text-left`}>Коллекция {subCategory}</div>
            <div className={`text-xl font-light flex flex-wrap gap-2 zero:justify-center sm:justify-start`}>
              {products
                .find((item, i) => i === state.chosen)
                .colours
                .filter((item) => item !== 'Огайо')
                .sort((a, b) => a === b ? 0 : a < b ? -1 : 1)
                .map((item, i) => {
                  return (
                    <div
                      key={`COLOR${i}`}
                      className={`flex flex-col items-center justify-center`}
                      onClick={() => {
                        setState((state) => {
                          return {
                            ...state,
                            chosenOption: i,
                            chosenColor: [i, item]
                          };
                        });
                      }}
                    >
                      <div className={`relative`}>
                        <img
                          className={`rounded-full overflow-hidden cursor-pointer`}
                          src={`images/shinglas-rus.ru/products/${state.chosenType}/${title}/${i + 1}sm.jpg`}
                        ></img>

                        {state.chosenColor[0] === i && <Icons.Ok stroke='white' extraClasses={`absolute`} />}
                      </div>

                      <div className={`text-base text-center cursor-pointer`}>{item}</div>
                    </div>
                  );
                })}
            </div>
          </div> */}
          {/* <div className={`max-w-7xl mx-auto z-10 my-4 flex flex-wrap px-4`}>
            <div
              className={`relative overflow-hidden zero:w-full sm:w-2/3`}
              style={{height: '307px'}}
            >
              <img
                className={`w-full`}
                src={`images/shinglas-rus.ru/products/${state.chosenType}/${title}/${
                  state.chosenColor[0] + 1
                }.jpg`}
                alt
                
              />
            </div>
            <div className={`flex flex-col zero:w-full sm:w-1/3`}>
              <div className={`font-light ml-4 text-2xl flex flex-col my-2`}> Коллекция {title}</div>
              <div className={`font-bold ml-4 text-3xl flex flex-col mb-2`}>
                {price}
                ₽/м²
              </div>
              <div className={`ml-4`}>
                <Button theme={theme} href={'#Contacts'}>
                  Рассчитать
                </Button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
