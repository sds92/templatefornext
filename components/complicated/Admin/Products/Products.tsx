import React from 'react';
import { Icons } from '../..';
import { Layout, AddProduct, Product, Settings } from './components';
import { productsController } from 'utils/products.controller';
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

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);
  const products = useSelector(selectProducts);
  const toDeleteOptions = useSelector(selectToDeleteOptions);
  const toDeleteProducts = useSelector(selectToDeleteProducts);
  const pages = useSelector(selectPages);
  const [settings, setSettings] = React.useState(null);
  
  const getProducts = () => {
    fetch('api/products')
      .then((res) => res.json())
      .then((res) => {
        dispatch(importInitProducts(res));
      })
      .catch((err) => console.log(err));
  };
  const getPages = () => {
    fetch('api/pages')
      .then((res) => res.json())
      .then((res) => {
        dispatch(importInitPages(res));
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
  const savePages = async (input:any) => {
    let _t = [];
    if (input) {
      _t = input;
    } else {
      _t = pages;
    }
    
    await fetch(`api/pages`, {
      method: 'POST',
      body: JSON.stringify(_t),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.status === 'ok') {
          getPages();
        }
      })
      .catch((err) => console.log(err));
    };
    
  function addProduct(a:any) {
    const [pr, id] = productsController.addProduct(products, a);
    dispatch(updateProducts(pr));
    // dispatch(updatePages(pg));
    dispatch(setCreatedProducts(id));
    dispatch(setIsChanged(true));
  }

  function deleteProduct(id:any) {
    let _products = JSON.parse(JSON.stringify(products));
    let _pages = JSON.parse(JSON.stringify(pages));
    let product_position = null;
    let page_position = null;
    _products.find((item_i:any, i:any) => {
      if (item_i.id === id) {
        product_position = i;
        return true;
      }
    });
    _pages.find((item_ii:any, i:any) => {
      if (item_ii.content.product_id === parseInt(id)) {
        page_position = i;
        return true;
      }
    });
    _products.splice(product_position, 1);
    _pages.splice(page_position, 1);
    saveProducts(_products);
    // savePages(_pages);
    dispatch(setIsChanged(false));
  }

  

  React.useEffect(() => {
    getProducts();
    // getPages();
  }, []);

  return (
    <div className={`font-rc px-2 relative`}>
      <AddProduct addProduct={addProduct} />
      {products.map((item: any, i: React.SetStateAction<null>) => {
        let highlight: boolean | string = false;
        toDeleteProducts.map((item_i: any) => {
          if (item.id === item_i) {
            highlight = 'red';
          }
        });
        // pages.find((page) => page.content.product_id === item.id)?.head
        return (
          <div className={`mb-2 shadow-md`} key={`lfjkh${i}`}>
            <Product
              handleSettingsOpenState={(a: any) => {
                if (settings === i) {
                  setSettings(null);
                } else {
                  setSettings(i);
                }
              }}
              settings={settings === i}
              product={item}
              highlight={highlight}
              deleteProduct={deleteProduct}
              saveProducts={saveProducts}
            >
            {/* SETTINGS */}
            {settings === i ? (
                <Settings
                  meta={pages.find((page: { content: { product_id: any; }; }) => page.content.product_id === item.id)?.head}
                  // deleteProduct={deleteProduct}
                  product={item}
                  pages={pages}
                  productList={productList}
                  saveProducts={saveProducts}
                  savePages={savePages}
                />
              ) : (
                <></>
              )}
            </Product>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
