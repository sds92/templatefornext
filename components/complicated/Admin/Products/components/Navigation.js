import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts, selectProductsInit, selectIsChanged, setIsChanged } from 'redux/slices/productsSlice';

export default function Navigation(props) {
  const { handleSave } = props;
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const productsInit = useSelector(selectProductsInit);
  const isChanged = useSelector(selectIsChanged);
  const [block, setBlock] = React.useState(false);
  function handleBlock() {
    setBlock(true);
    setTimeout(() => {
      setBlock(false);
    }, 1000);
  }

  // React.useEffect(() => {
  //   if (JSON.stringify(products) !== JSON.stringify(productsInit)) {
  //    console.log("🚀 ~ file: Navigation.js ~ line 21 ~ React.useEffect ~ productsInit", productsInit)
  //    console.log("🚀 ~ file: Navigation.js ~ line 21 ~ React.useEffect ~ products", products)
  //    dispatch(setIsChanged(true))
  //   }
  // }, [products]);

  return (
    <div
      className={`fixed w-96 bg-white p-1 rounded-sm bg-opacity-95 border shadow-md border-zinc-100 bottom-3 flex items-center justify-start z-40`}
      style={{ left: '50%', marginLeft: '-12rem' }}
    >
      <div
        className={`cursor-pointer z-40 shadow-md left-2 ${
          isChanged
            ? `bg-belplit_2 text-white hover:scale-105 transition-all duration-75`
            : `bg-zinc-200 border ${block ? 'text-red-800' : 'text-zinc-800'}`
        }  text-sm font-light rounded-sm px-2 py-1 `}
        onClick={isChanged ? handleSave : handleBlock}
      >
        сохранить
      </div>
    </div>
  );
}
