import React from 'react';
import { Icons } from '../..';
import { Layout, AddProduct, Product, Navigation, Settings } from './components';

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

export default function Products() {
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

  const saveProducts = async (input) => {
    let _t = [];
    if (input) {
      _t = input;
    } else {
      _t = products;
    }

    await fetch(`api/prices`, {
      method: 'POST',
      body: JSON.stringify(_t),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'ok') {
          getProducts();
        }
      })
      .catch((err) => console.log(err));
  };
  const savePages = async (input) => {
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

  function addProduct(a) {
    const [pr, pg, id] = productList.addItem(products, pages, a);
    dispatch(updateProducts(pr));
    dispatch(updatePages(pg));
    dispatch(setCreatedProducts(id));
    dispatch(setIsChanged(true));
  }

  function deleteProduct(id) {
    let _products = JSON.parse(JSON.stringify(products));
    let _pages = JSON.parse(JSON.stringify(pages));
    let product_position = null;
    let page_position = null;
    _products.find((item_i, i) => {
      if (item_i.id === id) {
        product_position = i;
        return true;
      }
    });
    _pages.find((item_ii, i) => {
      if (item_ii.content.product_id === parseInt(id)) {
        page_position = i;
        return true;
      }
    });
    _products.splice(product_position, 1);
    _pages.splice(page_position, 1);
    saveProducts(_products);
    savePages(_pages);
    dispatch(setIsChanged(false));
  }

  function handleSave() {
    if (toDeleteOptions.length !== 0 || toDeleteProducts.length !== 0) {
      let _products = JSON.parse(JSON.stringify(products));
      let _pages = JSON.parse(JSON.stringify(pages));
      Promise.all([
        toDeleteOptions.map((item) => {
          let product_position = null;
          let _product = _products.find((item_i, i) => {
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
        dispatch(updatePages(_pages));
        dispatch(clearToDeleteOptions([]));
        dispatch(clearToDeleteProducts([]));
      });
      saveProducts(_products);
      savePages(_pages);
    } else {
      dispatch(clearCreatedOptions([]));
      dispatch(clearCreatedProducts([]));
      saveProducts(products);
      savePages(pages);
    }
    dispatch(setIsChanged(false));
  }

  React.useEffect(() => {
    getProducts();
    getPages();
  }, []);

  return (
    <div className={`font-rc px-2 relative`}>
      <Navigation handleSave={handleSave} />
      <AddProduct addProduct={addProduct} />
      {products.map((item, i) => {
        let highlight = false;
        toDeleteProducts.map((item_i) => {
          if (item.id === item_i) {
            highlight = 'red';
          }
        });
        // pages.find((page) => page.content.product_id === item.id)?.head
        return (
          <div className={`mb-2 shadow-md`} key={`lfjkh${i}`}>
            <Product
              handleSettingsOpenState={(a) => {
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
            >
              {/* SETTINGS */}
              {settings === i ? (
                <Settings
                  meta={pages.find((page) => page.content.product_id === item.id)?.head}
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
}

// {Object.entries(item.desc).map((descItem, dii) => {
//   if (descItem[0] !== 'tech') {
//     return (
//       //! DESC ITEM
//       <React.Fragment key={`dfskgh${dii}`}>
//         <div className={`ml-2 flex`}>
//           {descs.find((item) => item[1] === descItem[0])[0]}:
//         </div>
//         <div className={`ml-2 flex flex-col border rounded-sm p-2 bg-white`}>
//           {descItem[1].map((descItem_i, dii_i) => {
//             return (
//               //! DESC ITEM -> ITEM
//               <div
//                 key={`sdkjfh${dii_i}`}
//                 onMouseEnter={() => {
//                   setSettings((s) => ({
//                     ...s,
//                     [i]: { ...s[i], hover: { [dii]: dii_i } },
//                   }));
//                 }}
//                 // onMouseLeave={() => {}}
//                 className={`font-light text-sm cursor-default relative h-6 ${
//                   settings[i]?.hover?.[dii] === dii_i ? `bg-blue-100` : ``
//                 }`}
//               >
//                 {settings[i].edit?.[dii] === dii_i ? (
//                   <React.Fragment>
//                     <div className={`absolute w-full h-6 z-50 flex gap-2`}>
//                       <input
//                         className={`w-full border rounded-sm `}
//                         value={settings[i]?.content?.[dii]?.[dii_i]}
//                         onChange={(e) => {
//                           setSettings((s) => ({
//                             ...s,
//                             [i]: {
//                               ...s[i],
//                               content: {
//                                 [dii]: { [dii_i]: e.target.value },
//                               },
//                             },
//                           }));
//                         }}
//                       />
//                       <Icons.Ok
//                         extraClasses={`bg-zinc-50 h-6 w-6 shadow-md border border-green-900 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
//                         onClick={() => {
//                           handleSettingsChange({
//                             product: i,
//                             descName: descItem[0],
//                             descNamePosition: dii,
//                             descItemPosition: dii_i,
//                           });
//                           setSettings((s) => ({
//                             ...s,
//                             [i]: {
//                               ...s[i],
//                               edit: {},
//                               hover: {},
//                             },
//                           }));
//                         }}
//                       />
//                     </div>
//                     <div className={`fixed top-0 left-0 w-full h-screen z-40`}></div>
//                   </React.Fragment>
//                 ) : (
//                   dii_i + 1 + '. ' + descItem_i
//                 )}
//                 {settings[i].hover?.[dii] === dii_i && (
//                   <div className={`absolute flex justify-start gap-2 inset-0`}>
//                     <Icons.Edit
//                       extraClasses={`ml-3 bg-green-900 bg-opacity-80 h-5 w-5 -m-0.5 shadow-md  border-green-900 text-zinc-100 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
//                       onClick={() => {
//                         setSettings((s) => ({
//                           ...s,
//                           [i]: {
//                             ...s[i],
//                             edit: { [dii]: dii_i },
//                             hover: {},
//                             content: {
//                               [dii]: { [dii_i]: descItem_i || '' },
//                             },
//                           },
//                         }));
//                       }}
//                     />
//                     <Icons.Close
//                       extraClasses={`bg-red-900 bg-opacity-80 h-5 w-5 -m-0.5 shadow-md  border-red-900 text-zinc-100 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
//                       onClick={() => {
//                         deskItemDelete({
//                           product: i,
//                           descName: descItem[0],
//                           descNamePosition: dii,
//                           descItemPosition: dii_i,
//                         });
//                       }}
//                     />
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//           <div className={`h-8 w-full relative`}>
//             {/* ADD DESC ITEM */}
//             {settings[i].edit?.[dii] ? (
//               <React.Fragment>
//                 <div className={`absolute w-full h-6 z-50 flex gap-2 my-1`}>
//                   <input
//                     className={`w-full border rounded-sm `}
//                     value={settings[i]?.content?.[dii]?.[descItem[1].length + 1]}
//                     onChange={(e) => {
//                       setSettings((s) => ({
//                         ...s,
//                         [i]: {
//                           ...s[i],
//                           content: {
//                             [dii]: {
//                               [descItem[1].length + 1]: e.target.value,
//                             },
//                           },
//                         },
//                       }));
//                     }}
//                   ></input>
//                   <Icons.Ok
//                     extraClasses={`bg-zinc-50 h-6 w-6 shadow-md border border-green-900 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
//                     onClick={() => {
//                       deskItemAdd({
//                         product: i,
//                         descName: descItem[0],
//                         descNamePosition: dii,
//                         descItemPosition: descItem[1].length + 1,
//                       });
//                       setSettings((s) => ({
//                         ...s,
//                         [i]: {
//                           ...s[i],
//                           edit: {},
//                           hover: {},
//                         },
//                       }));
//                     }}
//                   />
//                 </div>
//                 <div className={`fixed top-0 left-0 w-full h-screen z-40`}></div>
//               </React.Fragment>
//             ) : (
//               <Icons.Plus
//                 extraClasses={`bg-zinc-50 h-6 w-6 mt-1 shadow-md border border-green-900 text-zinc-800 rounded-md hover:scale-110 cursor-pointer transition-all duration-75`}
//                 onClick={() => {
//                   setSettings((s) => ({
//                     ...s,
//                     [i]: {
//                       ...s[i],
//                       edit: { [dii]: descItem[1].length + 1 },
//                       hover: {},
//                       content: {
//                         [dii]: { [descItem[1].length + 1]: '' },
//                       },
//                     },
//                   }));
//                 }}
//               />
//             )}
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// })}
