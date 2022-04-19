import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProductList } from 'redux/slices/productsSlice';
import { Icons } from '../../..';
import { productsController } from 'utils/products.controller';

const Products = (props) => {
  const { children } = props;
  return <div className={`mx-1`}>{children && children}</div>;
};

const Specs = (props) => {
  // const productList = useSelector(selectProductList);
  return (
    <div width={'100%'} className={`text-sm mt-1`}>
      <div className={`flex justify-start bg-zinc-100 border border-zinc-500 items-center rounded-sm`}>
        <div className={`w-10 border-r border-zinc-500 flex-none`}>
          <Icons.Visible fill={`#1b5374`} w={5} h={5} className={`mx-auto `} />
        </div>
        <div className={`w-32 h-5 pt-0.5 text-center font-bold text-xs border-r border-zinc-500 flex-none`}>размеры[мм]</div>

        {productsController.cities.map((city, i) => {
          return (
            <div
              key={`sdfjksd${i}`}
              className={`font-bold pt-0.5 h-5 w-32 text-xs flex-none text-center ${
                i !== productsController.cities.length ? `border-r border-zinc-500` : ''
              }`}
            >
              {city[0]}
            </div>
          );
        })}
      </div>
      <div>{props.children && props.children}</div>
    </div>
  );
};

const Layout = {
  Specs,
  Products,
};
export default Layout;
