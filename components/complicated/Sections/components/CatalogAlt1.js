import React from 'react';
import { Button, Title, SubTitle, Text } from '../../../lib';
// react-menu
import '@szhsin/react-menu/dist/index.css';

import { Icons } from '../../';

export default function CatalogAlt1(props) {
  const { w, lgView, app, theme, products } = props;
  const content = props.content.content.catalog;
  const [state, setState] = React.useState({
    chosenType: products[0].options[0][0].value === 'Однослойная' ? 'flexible' : 'multilayer',
    chosenColor: [0, products[0].options[0][4].value],
    chosenOption: 0,
    chosen: 0,
    hover: null,
    show: false,
    menuOpen: false,
  });


  let r = products[state.chosen].colours.reduce((p, c, i) => {
  console.log("🚀 ~ file: CatalogAlt1.js ~ line 23 ~ r ~ products[state.chosen].colours", state.chosenColor)
    console.log(
      '🚀 ',
      p, c
    );

    return p === state.chosenColor[1] ? i : c;
  })
  console.log("🚀 ~ file: CatalogAlt1.js ~ line 31 ~ r ~ r", r)


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
          {lgView ? (
            <>
              <div className={`max-w-7xl mx-auto px-4`}>
                <div className={`text-xl font-bold my-4`}>Однослойная черепица:</div>
                <div className={`max-w-7xl mx-auto flex flex-wrap justify-start px-2`}>
                  {products
                    .map((item, productIndex) => ({ ...item, type: item.type[0], productIndex }))
                    .filter((item) => item.type === 'Однослойная')
                    .map((item, index) => (
                      <div
                        className={`cursor-pointer text-xl text-slate-700 font-light px-2`}
                        key={`LINK${item.productIndex}`}
                        onClick={() => {
                          setState((state) => {
                            return {
                              ...state,
                              chosen: item.productIndex,
                              chosenType: item.type === 'Однослойная' ? 'flexible' : 'multilayer',
                              chosenColor: [
                                0,
                                products[item.productIndex].options[state.chosenOption].find(
                                  ({ key }) => key === 'Цвет'
                                ).value,
                              ],
                            };
                          });
                        }}
                      >
                        <div
                          className={`flex flex-col transition-all whitespace-nowrap ${
                            state.chosen === item.productIndex
                              ? 'text-zinc-900'
                              : 'text-zinc-300 hover:text-belplit24_2'
                          } text-left `}
                        >
                          <div className={`text-base`}>{item.title}</div>
                          <div className={`font-semibold`}>{item.prices[0]}₽/м²</div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className={`text-xl font-bold my-4`}>Многослойная черепица:</div>
                <div className={`max-w-7xl mx-auto flex flex-wrap justify-start px-2`}>
                  {products
                    .map((item, productIndex) => ({ ...item, type: item.type[0], productIndex }))
                    .filter((item) => item.type === 'Многослойная')
                    .map((item, index) => (
                      <div
                        className={`cursor-pointer text-xl  font-light px-2`}
                        key={`LINK${item.productIndex}`}
                        onClick={() => {
                          setState((state) => {
                            return {
                              ...state,
                              chosen: item.productIndex,
                              chosenType: item.type === 'Однослойная' ? 'flexible' : 'multilayer',
                            };
                          });
                        }}
                      >
                        <div
                          className={`flex flex-col transition-all whitespace-nowrap ${
                            state.chosen === item.productIndex
                              ? 'text-zinc-900'
                              : 'text-zinc-300 hover:text-belplit24_2'
                          } text-left `}
                        >
                          <div className={`text-base`}>{item.title}</div>
                          <div className={`font-semibold`}>{item.prices[0]}₽/м²</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <br />
            </>
          ) : (
            <>
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
              {state.menuOpen && (
                <div className={`rounded-md absolute bg-white z-50 inset-x-0 p-4 shadow-xl mx-4`}>
                  <div className={`text-xl mt-4 font-medium`}>Однослойная черепица:</div>
                  <hr />
                  <div className={`mt-2 flex flex-wrap mx-auto`}>
                    {products
                      .map((item, productIndex) => ({ ...item, type: item.type[0], productIndex }))
                      .filter((item) => item.type === 'Однослойная')
                      .map((item, index) => (
                        <div
                          className={`cursor-pointer text-xl  font-light px-2`}
                          key={`LINK${item.productIndex}`}
                          onClick={() => {
                            setState((state) => {
                              return {
                                ...state,
                                menuOpen: !state.menuOpen,
                                chosen: item.productIndex,
                                chosenType: item.type === 'Однослойная' ? 'flexible' : 'multilayer',
                              };
                            });
                          }}
                        >
                          <div
                            className={`flex flex-col transition-all whitespace-nowrap ${
                              state.chosen === item.productIndex ? 'text-belplit24_2' : 'text-zinc-900'
                            } text-left `}
                          >
                            <div className={`text-base`}>{item.title}</div>
                            <div className={`font-semibold`}>{item.prices[0]}₽/м²</div>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className={`text-xl mt-4 font-medium`}>Многослойная черепица:</div>
                  <hr />
                  <div className={`mt-2 flex flex-wrap`}>
                    {products
                      .map((item, productIndex) => ({ ...item, type: item.type[0], productIndex }))
                      .filter((item) => item.type === 'Многослойная')
                      .map((item, index) => (
                        <div
                          className={`cursor-pointer text-xl  font-light px-2`}
                          key={`LINK${item.productIndex}`}
                          onClick={() => {
                            setState((state) => {
                              return {
                                ...state,
                                menuOpen: !state.menuOpen,
                                chosen: item.productIndex,
                                chosenType: item.type === 'Однослойная' ? 'flexible' : 'multilayer',
                              };
                            });
                          }}
                        >
                          <div
                            className={`flex flex-col transition-all whitespace-nowrap ${
                              state.chosen === item.productIndex ? 'text-belplit24_2' : 'text-zinc-900'
                            } text-left `}
                          >
                            <div className={`text-base`}>{item.title}</div>
                            <div className={`font-semibold`}>{item.prices[0]}₽/м²</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </>
          )}
          <br />
          <div className={`max-w-7xl mx-auto text-3xl font-bold my-4 px-4`}>
            <div className={`my-4`}>
              Коллекция {products.find((item, index) => index === state.chosen).title}
            </div>
            <div className={`text-xl font-light flex flex-wrap gap-2`}>
              {products
                .find((item, i) => i === state.chosen)
                .options.sort((a, b) =>
                  a.find(({ key }) => key === 'Цвет').value === b.find(({ key }) => key === 'Цвет').value
                    ? 0
                    : a.find(({ key }) => key === 'Цвет').value < b.find(({ key }) => key === 'Цвет').value
                    ? -1
                    : 1
                )
                .filter((item) => item.find(({ key }) => key === 'Цвет').value !== 'Огайо')
                .map((item, i) => {
                  return (
                    <div
                      key={`COLOR${i}`}
                      className={``}
                      onClick={() => {
                        setState((state) => {
                          return {
                            ...state,
                            chosenColor: [i, item.find(({ key }) => key === 'Цвет').value],
                          };
                        });
                      }}
                    >
                      <div className={`relative flex`}>
                        <img
                          className={`rounded-full overflow-hidden cursor-pointer`}
                          src={`images/shinglas-rus.ru/products/${state.chosenType}/${
                            products[state.chosen].title
                          }/${i + 1}sm.jpg`}
                        ></img>

                        {state.chosenColor[0] === i && <Icons.Ok stroke='white' extraClasses={`absolute`} />}
                      </div>

                      <div className={`text-base text-center cursor-pointer`}>
                        {item.find((option, ii) => option.key === 'Цвет').value}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={`max-w-7xl mx-auto z-10 my-4 flex flex-wrap px-4`}>
            <div
              className={`relative overflow-hidden zero:w-full sm:w-2/3`}
              style={{ height: lgView ? w / 3 : w / 1.5 }}
            >
              <img
                className={`w-full`}
                src={`images/shinglas-rus.ru/products/${state.chosenType}/${products[state.chosen].title}/${
                  state.chosenColor[0] + 1
                }.jpg`}
                alt
              />
            </div>
            <div className={`flex flex-col`}>
              <div className={`font-light ml-4 text-2xl flex flex-col my-2`}>
                {' '}
                Коллекция {products[state.chosen].title}
              </div>
              <div className={`font-bold ml-4 text-3xl flex flex-col mb-2`}>
                {
                  products[state.chosen].prices[products[state.chosen].colours.indexOf(state.chosenColor[1])]
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
