import React from 'react';
import { Options, InputSwitch } from '.';
import { Icons } from '../../..';
import { productsController } from 'utils/products.controller';
import { useSelector, useDispatch } from 'react-redux';
import { updatePages, selectProducts, updateProducts, setIsChanged } from 'redux/slices/productsSlice';

export default function Product(props) {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const { product, deleteProduct, children, productList, handleSettingsOpenState, settings, highlight, saveProducts } =
    props;

  const [state, setState] = React.useState({
    open: {
      options: true,
      modal: false,
    },
  });

  function setTitle(a) {
    
    let _products = productsController.copy(products);
    _products = productsController.setTitle(_products, product.id, a);
    dispatch(updateProducts(_products));
    saveProducts(_products);
    dispatch(setIsChanged(false));
  }

  function setPosition(a) {
    
    let _products = productsController.copy(products);
    _products = productsController.setPosition(_products, product.id, a);
    dispatch(updateProducts(_products));
    saveProducts(_products);
    dispatch(setIsChanged(false));
  }

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
            extraClasses={`${
              settings ? `bg-sky-900 bg-opacity-90 text-white` : `bg-zinc-50`
            }  mx-0.5 my-1 h-6 w-6 shadow-md border text-zinc-800 rounded-sm hover:scale-110 cursor-pointer transition-all duration-300`}
            onClick={handleSettingsOpenState}
          />
          <Icons.ChevronDown
            extraClasses={`${
              state.open.options ? `bg-sky-900 bg-opacity-90  text-white rotate-0` : `bg-zinc-50 -rotate-90`
            }  mx-0.5 my-1 h-6 w-6 shadow-md border text-zinc-800 rounded-sm hover:scale-110 cursor-pointer transition-all duration-300`}
            onClick={() => {
              if (settings) {
                handleSettingsOpenState();
              }
              setState((s) => ({ ...s, open: { ...s.open, options: !state.open.options } }));
            }}
          />
          <InputSwitch
            textClassName={`rounded-sm w-44 bg-zinc-50 border mx-0.5 uppercase text-lg h-6 leading-snug relative`}
            onSubmit={(a) => {
              setTitle(a)
            }}
            initValue={product.info?.title}
          />

          <Icons.Close
            extraClasses={`mx-0.5 text-red-700 bg-zinc-50 h-6 w-6 shadow-md text-zinc-800 rounded-sm hover:scale-110 cursor-pointer transition-all duration-75 active:bg-zinc-900`}
            onClick={() => {
              setState((s) => ({ ...s, open: { ...s.open, modal: true } }));
            }}
          />
          <div className={`ml-10 -mb-1.5 font-light text-white`}>№ в каталоге:</div>
          <InputSwitch
            textClassName={`rounded-sm w-10 bg-zinc-50 border mx-0.5 text-lg h-6 leading-snug relative`}
            onSubmit={(a) => {
              setPosition(a)
            }}
            initValue={product.info?.position}
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
                extraClasses={`w-6 h-6 rounded-sm text-green-700 bg-zinc-50 hover:scale-110 cursor-pointer transition-all duration-75`}
              />
              <Icons.Close
                onClick={() => {
                  setState((s) => ({ ...s, open: { ...s.open, modal: false } }));
                }}
                extraClasses={`w-6 h-6 rounded-sm text-red-700 bg-zinc-50 hover:scale-110 cursor-pointer transition-all duration-75`}
              />
            </div>
          </div>
        </div>
      )}
      {state.open.options && <Options product={product} productList={productList} />}
    </React.Fragment>
  );
}
