import React from 'react';
import { Layout, InputPrice } from '.';
import { Icons } from '../../..';
import { productsController } from 'utils/products.controller';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectProducts,
  selectProductList,
  selectProductsInit,
  setOption,
  setPrices,
  setToDeleteOptions,
  deleteOptions,
  addOption,
  selectToDeleteOptions,
  setCreated,
  selectCreatedOptions,
  setIsChanged,
} from 'redux/slices/productsSlice';

export default function Options(props) {
  const dispatch = useDispatch();
  const initProducts = useSelector(selectProductsInit);
  const products = useSelector(selectProducts);
  // const productList = useSelector(selectProductList);

  const toDeleteOptions = useSelector(selectToDeleteOptions);
  const createdOptions = useSelector(selectCreatedOptions);

  const { product } = props;
  const [state, setState] = React.useState({
    create: false,
    options: {},
    focus: {},
    newOption: {},
    tip: {},
  });

  function handlePrices(input) {
    dispatch(setIsChanged(true));
    let _products = JSON.parse(JSON.stringify(products));
    _products = productsController.setPrices(_products, input);
    dispatch(setPrices(_products));
  }

  return (
    <Layout.Specs>
      {product &&
        product.options.map((option, i) => {
          let highlight = false;
          toDeleteOptions.map((item) => {
            if (product.id === item.product_id && i === item.option_position) {
              highlight = 'red';
            }
          });
          createdOptions.map((item) => {
            if (product.id === item.product_id && i === item.option_position) {
              highlight = 'gold';
            }
          });
          const bg =
            highlight === 'red'
              ? 'bg-red-200'
              : highlight === 'gold'
              ? 'bg-yellow-500 bg-opacity-40'
              : i % 2 != 0
              ? 'bg-sky-900 bg-opacity-30'
              : 'bg-slate-200 bg-opacity-10';
          return (
            <div
              key={`sdjkfhs${i}`}
              className={`w-full border-x border-zinc-500 font-light flex items-center justify-start `}
            >
              <div
                className={`flex-none flex items-center justify-center h-8 w-10 rounded-l-sm border-r border-zinc-500 ${bg}`}
              >
                <div
                  className={`mx-auto w-5 h-5 bg-white shadow-inner rounded-sm border border-sky-900 hover:scale-105 transition-all cursor-pointer`}
                  onClick={() => {
                    dispatch(
                      setOption({
                        product_id: product.id,
                        option_position: i,
                        option_name: 'show',
                        option_value: !option.show,
                      })
                    );
                    dispatch(setIsChanged(true));
                  }}
                >
                  {option.show && <Icons.Ok w={5} h={5} />}
                </div>
              </div>
              <div
                className={`w-32 h-8 flex-none flex items-center justify-center border-r border-zinc-500 ${bg}`}
              >
                {option.a}x{option.b}x{option.h}
              </div>
              {/* <div
                className={`w-20 h-8 align-middle flex-none flex items-center justify-center border-r border-zinc-500 ${bg}`}
              >
                {option.connectionType}
              </div> */}
              {productsController.cities.map((city, ii) => {
                return (
                  <div
                    key={`sdfjksd${i}`}
                    className={`h-8 px-1 w-32 flex-none flex items-center justify-between border-r border-zinc-500 ${bg}`}
                  >
                    <div className={`font-light flex items-center`}>
                      <span className={`font-semibold text-lg`}>
                        {initProducts[product.id]?.options[i]?.prices.find((item) => item.city === city[1])
                          ?.value || ' - '}{' '}
                      </span>
                      <p className={`ml-0.5 -mb-0.5 italic text-xs`}>руб.</p>
                    </div>
                    <InputPrice optionPosition={i} city={city[1]} onChange={handlePrices} product={product} />
                  </div>
                );
              })}

              {/* DELETE */}
              <div className={`px-2 flex items-center border-r ${bg}`}>
                {!highlight && (
                  <Icons.Close
                    w={6}
                    h={6}
                    className={`bg-zinc-50 mx-auto shadow-md border border-red-900 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                    onClick={(e) => {
                      dispatch(setToDeleteOptions({ product_id: product.id, option_position: i }));
                      dispatch(setIsChanged(true));
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      {state.create ? (
        <>
          {/* SHOW */}
          <div
            className={`flex items-center justify-start h-10 border bg-white border-zinc-500 shadow-md px-0.5`}
          >
            <div
              className={`w-5 bg-white shadow-inner h-5 mx-1 rounded-sm border border-sky-900 hover:scale-105 transition-all cursor-pointer`}
              onClick={() => {
                setState((s) => ({ ...s, newOption: { ...s.newOption, show: !s.newOption?.show } }));
              }}
            >
              {state.newOption?.show && <Icons.Ok w={5} h={5} />}
            </div>

            <input
              type={'number'}
              className={`shadow-inner border border-zinc-500 rounded-sm w-20 h-6 font-extralight mx-1 placeholder:text-sm placeholder:ml-1`}
              onChange={(e) => {
                setState((s) => ({ ...s, newOption: { ...s.newOption, a: e.target.value } }));
              }}
              placeholder={' ширина*'}
            />
            <input
              type={'number'}
              className={`shadow-inner border border-zinc-500 rounded-sm w-20 h-6 font-extralight mx-1`}
              onChange={(e) => {
                setState((s) => ({ ...s, newOption: { ...s.newOption, b: e.target.value } }));
              }}
              placeholder={' длина*'}
            />
            <input
              type={'number'}
              className={`shadow-inner border border-zinc-500 rounded-sm w-20 h-6 font-extralight mx-1`}
              onChange={(e) => {
                setState((s) => ({ ...s, newOption: { ...s.newOption, h: e.target.value } }));
              }}
              placeholder={' высота*'}
            />
            {/* <select
              className={`shadow-inner border border-zinc-500 rounded-sm w-32 h-6 font-extralight mx-1 cursor-pointer `}
              onChange={(e) => {
                setState((s) => ({ ...s, newOption: { ...s.newOption, connectionType: e.target.value || 'прямая' } }));
              }}
              defaultValue={'прямая'}
            >
              <option value={'прямая'}>прямая</option>
              <option value={'шип-паз'}>шип-паз</option>
            </select> */}
            {/* <input
              type={'number'}
              className={`shadow-inner border border-zinc-500 h-6 rounded-sm w-22 font-extralight mx-1`}
              onChange={(e) => {
                setState((s) => ({ ...s, newOption: { ...s.newOption, density: e.target.value } }));
              }}
              placeholder={'плотность*'}
            /> */}
            <div className={`flex mx-1`}>
              <Icons.Ok
                w={6}
                h={6}
                className={`bg-zinc-50 ml-auto shadow-md border border-bp_green_2 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                onClick={(e) => {
                  if (!state.newOption.connectionType) {
                    setState((s) => ({ ...s, newOption: { ...s.newOption, connectionType: 'прямая' } }));
                  }
                  if (
                    state.newOption.a &&
                    state.newOption.b &&
                    state.newOption.h &&
                    state.newOption.density
                  ) {
                    dispatch(
                      addOption({
                        product_id: product.id,
                        option_position: product.options.length,
                        a: state.newOption.a,
                        b: state.newOption.b,
                        h: state.newOption.h,
                        show: state.newOption.show,
                        connectionType: !state.newOption.connectionType
                          ? 'прямая'
                          : state.newOption.connectionType,
                        density: state.newOption.density,
                      })
                    );
                    setState((s) => ({ ...s, create: false, newOption: {} }));
                  } else {
                    setState((s) => ({ ...s, tip: 'requared' }));
                    setTimeout(() => {
                      setState((s) => ({ ...s, tip: null }));
                    }, 1500);
                  }
                }}
              />
              <Icons.Close
                w={6}
                h={6}
                className={`bg-zinc-50 mr-auto shadow-md border border-red-900 text-zinc-800 rounded-md m-1 hover:scale-110 cursor-pointer transition-all duration-75`}
                onClick={() => {
                  setState({
                    create: !state.create,
                  });
                }}
              />
            </div>
            {state.tip === 'requared' && (
              <div
                className={`z-50 mx-1 rounded-sm bg-sky-800 bg-opacity-90 text-white text-xs font-light p-2 shadow-md`}
              >
                <strong>Заполните обязательные поля</strong>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className={`rounded-sm shadow-md border border-zinc-500`}>
          <div className={`flex justify-start items-center`}>
            <Icons.Plus
              extraClasses={`bg-zinc-50 m-2 h-6 w-6 shadow-md border border-belplit_2 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
              onClick={() => {
                setState((s) => ({
                  ...s,
                  create: !state.create,
                }));
              }}
            />
            <div>добавить спецификацию</div>
          </div>
        </div>
      )}
    </Layout.Specs>
  );
}
