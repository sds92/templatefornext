import React from 'react';
import { Options, InputSwitch } from '.';
import { Icons } from '../../..';

type ProductProps = {
  [key: string]: any;
};

const Product = (props: ProductProps) => {
  const { product, deleteProduct, children, productList, handleSettingsOpenState, settings, highlight } =
    props;

  const [state, setState] = React.useState({
    open: {
      options: true,
      modal: false,
    },
  });

  React.useEffect(() => {
    if (settings) {
      setState((s) => ({ ...s, open: { ...s.open, options: false } }));
    }
  }, [settings]);

  return (
    <React.Fragment>
      <div
        className={`border ${
          highlight === 'red' ? 'bg-red-500 ' : 'bg-zinc-500 '
        } border-zinc-500 text-zinc-900 font-semibold rounded-sm relative z-10 -m-1`}
      >
        <div className={`flex justify-start items-center px-0.5`}>
          <Icons.Settings
            h={6}
            w={6}
            className={`${
              settings ? `bg-sky-900 bg-opacity-90 text-white` : `bg-zinc-50`
            }  mx-0.5 my-1 shadow-md border text-zinc-800 rounded-sm hover:scale-110 cursor-pointer transition-all duration-300`}
            onClick={handleSettingsOpenState}
          />
          <Icons.ChevronDown
            h={6}
            w={6}
            className={`${
              state.open.options ? `bg-sky-900 bg-opacity-90  text-white rotate-0` : `bg-zinc-50 -rotate-90`
            }  mx-0.5 my-1 shadow-md border text-zinc-800 rounded-sm hover:scale-110 cursor-pointer transition-all duration-300`}
            onClick={() => {
              if (settings) {
                handleSettingsOpenState();
              }
              setState((s) => ({ ...s, open: { ...s.open, options: !state.open.options } }));
            }}
          />
          {/* <InputSwitch
            textClassName={`rounded-sm w-44 bg-zinc-50 border mx-0.5 uppercase text-lg h-6 leading-snug relative`}
            onSubmit={(a) => {}}
            initValue={product.info?.title}
          /> */}

          <Icons.Close
            h={6}
            w={6}
            className={`mx-0.5 text-red-700 bg-zinc-50 shadow-md rounded-sm hover:scale-110 cursor-pointer transition-all duration-75 active:bg-zinc-900`}
            onClick={() => {
              setState((s) => ({ ...s, open: { ...s.open, modal: true } }));
            }}
          />
        </div>
      </div>
      {children && children}
      {state.open.modal && (
        <div
          className={`fixed w-screen h-screen z-50 inset-0 bg-black bg-opacity-30 flex items-center justify-center`}
        >
          <div className={`bg-sky-900 max-w-xs rounded-sm px-8 py-1`}>
            <div className={`text-white text-sm font-light`}>Вы уверены?</div>
            <div className={`flex items-center justify-center gap-1 my-1`}>
              <Icons.Ok
                onClick={() => {
                  setState((s) => ({ ...s, open: { ...s.open, modal: false } }));
                  deleteProduct(product.id);
                }}
                h={6}
                w={6}
                className={`rounded-sm text-green-700 bg-zinc-50 hover:scale-110 cursor-pointer transition-all duration-75`}
              />
              <Icons.Close
                onClick={() => {
                  setState((s) => ({ ...s, open: { ...s.open, modal: false } }));
                }}
                h={6}
                w={6}
                className={`rounded-sm text-red-700 bg-zinc-50 hover:scale-110 cursor-pointer transition-all duration-75`}
              />
            </div>
          </div>
        </div>
      )}
      {state.open.options && <Options product={product} productList={productList} />}
    </React.Fragment>
  );
};

export default Product;
