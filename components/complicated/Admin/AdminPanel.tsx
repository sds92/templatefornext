import React from 'react';
import { Products, Pages, App, Navigation } from './';
import { useSelector, useDispatch } from 'react-redux';
import {
  setToDeleteProducts,
  selectToDeleteOptions,
  selectToDeleteProducts,
  clearToDeleteOptions,
  clearToDeleteProducts,
  clearCreatedOptions,
  clearCreatedProducts,
  setCreatedProducts,
  selectProducts,
  selectProductList,
  importInitProducts,
  updateProducts,
  selectPages,
  importInitPages,
  updatePages,
  setIsChanged,
} from 'redux/slices/productsSlice';

import { productsController } from 'utils/products.controller';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const [view, setView] = React.useState<'products' | 'pages' | 'app'>('products');
  const products = useSelector(selectProducts);
  const toDeleteOptions = useSelector(selectToDeleteOptions);
  const toDeleteProducts = useSelector(selectToDeleteProducts);

  const getProducts = () => {
    fetch('api/products')
      .then((res) => res.json())
      .then((res) => {
        dispatch(importInitProducts(res));
      })
      .catch((err) => console.log(err));
  };

  const saveProducts = async (input:any) => {
    let _t = [];
    if (input) {
      _t = input;
    } else {
      _t = products;
    }

    await fetch(`api/products`, {
      method: 'POST',
      body: JSON.stringify(productsController.sortByPosition(_t)),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'ok') {
          getProducts();
        }
      })
      .catch((err) => console.log(err));
  };

  function handleSave() {
    if (toDeleteOptions.length !== 0 || toDeleteProducts.length !== 0) {
      let _products = JSON.parse(JSON.stringify(products));
      Promise.all([
        toDeleteOptions.map((item: any) => {
          let product_position = null;
          let _product = _products.find((item_i: any, i: any) => {
            if (item_i.id === item.product_id) {
              product_position = i;
              return true;
            }
          });
          _product.options.splice(item.option_position, 1);

          _products.splice(product_position, 1, _product);
        }),
      ]).then(() => {
        dispatch(updateProducts(_products));
        dispatch(clearToDeleteOptions([]));
        dispatch(clearToDeleteProducts([]));
      });
      saveProducts(_products);
    } else {
      dispatch(clearCreatedOptions([]));
      dispatch(clearCreatedProducts([]));
      saveProducts(products);
    }
    dispatch(setIsChanged(false));
  }
  return (
    <>
      <Navigation handleSave={handleSave} setView={setView} view={view}/>
      {view === 'products' && <Products />}
      {/* {view === 'pages' && <Pages />}
      {view === 'app' && <App />} */}
    </>
  );
};
export default AdminPanel;
