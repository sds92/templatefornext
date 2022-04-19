import React from 'react';
import { AddDesc, InputSwitch } from '.';
import { Icons } from '../../..';
import { productsController } from 'utils/products.controller';
import { useSelector, useDispatch } from 'react-redux';
import { updatePages, selectProducts, updateProducts, setIsChanged } from 'redux/slices/productsSlice';

export default function Settings(props) {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const { productList, product, meta, pages, saveProducts, savePages } = props;
  const [values, setValues] = React.useState({
    // meta: {
    //   keywords: meta.meta.find(({ name }) => name === 'keywords').content || '',
    //   description: meta.meta.find(({ name }) => name === 'description').content || '',
    //   title: meta.title || '',
    // },
    info: {
      userTitle: product.info?.userTitle || '',
    },
    desc: {
      main: product.desc.find((item) => item.title === 'main')?.value || '',
    },
  });
  const [state, setState] = React.useState({
    hover: {},
    edit: {},
    create: {
      desc: true,
    },
  });

  function addDesk() {
    let _products = productsController.copy(products);
    _products = productsController.setDesc(_products, product.id, { title: 'main', value: values.desc.main });
    dispatch(updateProducts(_products));
    saveProducts(_products);
    dispatch(setIsChanged(false));
  }

  function setUserTitle(a) {
    let _products = productList.setUserTitle(products, a, product.id);
    dispatch(updateProducts(_products));
    saveProducts(_products);
    dispatch(setIsChanged(false));
  }

  // function setMeta(input) {
  //   let _pages = JSON.parse(JSON.stringify(pages));
  //   let pagePosition = null;
  //   let _page = _pages.find((item, i) => {
  //     if (item.content.product_id === input.productId) {
  //       pagePosition = i;
  //       return true;
  //     }
  //   });
  //   switch (input.metaName) {
  //     case 'title': {
  //       _page.head.title = input.value;
  //       break;
  //     }
  //     case 'keywords': {
  //       _page.head.meta.find((_metaItem) => _metaItem.name === input.metaName.toLowerCase()).content =
  //         input.value;
  //       break;
  //     }
  //     case 'description': {
  //       _page.head.meta.find((_metaItem) => _metaItem.name === input.metaName.toLowerCase()).content =
  //         input.value;
  //       break;
  //     }
  //     default:
  //       break;
  //   }
  //   _pages.splice(pagePosition, 1, _page);
  //   savePages(_pages);
  //   dispatch(updatePages(_pages));
  //   dispatch(setIsChanged(false));
  // }

  return (
    <div className={`flex flex-col`}>
      {/* <div className={`border border-zinc-500 bg-slate-100 w-full p-2 rounded-sm`}>
        <div className={`uppercase font-bold relative cursor-default`}>Метатеги</div>
        {['TITLE', 'KEYWORDS', 'DESCRIPTION'].map((metaItem, i) => {
          return (
            <InputSwitch
              key={`dfjg${i}`}
              title={metaItem}
              onSubmit={(a) =>
                setMeta({
                  productId: product.id,
                  metaName: metaItem.toLowerCase(),
                  value: a,
                })
              }
              initValue={
                metaItem.toLowerCase() === 'title'
                  ? pages.find((item) => item.content.product_id === product.id)?.head.title
                  : pages
                      .find((item) => item.content.product_id === product.id)
                      ?.head.meta.find((_metaItem) => _metaItem.name === metaItem.toLowerCase())?.content
              }
            />
          );
        })}
      </div> */}
      <div className={`border border-zinc-500 bg-slate-100 w-full p-2 mt-1 rounded-sm`}>
        <InputSwitch
          title={'ЗАГОЛОВОК'}
          onSubmit={(a) => setUserTitle(a)}
          initValue={values.info.userTitle}
        />
        <InputSwitch
          type='textarea'
          title={'ОПИСАНИЕ ТОВАРА'}
          onSubmit={(a) => addDesk({ title: 'main', value: a })}
          initValue={values.desc.main}
        />
      </div>
    </div>
  );
}
