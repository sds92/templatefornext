import React from 'react';

import { Button, Title, SubTitle, Text } from '../../../../lib';
import { Icons } from '../../../';

export default function Colors({ state, products }) {
  const curProducts = products
    .find((item) => item[0] === state.category)[1]
    .find((item) => item[0] === state.subCategory);
  console.log('🚀 ~ file: Colors.js ~ line 10 ~ Colors ~ curProducts', curProducts);
  return (
    <div className={`max-w-7xl mx-auto text-3xl font-bold my-4 px-4`}>
      <div className={`my-4 zero:text-center sm:text-left`}>Коллекция {state.subCategory}</div>
      <div className={`text-xl font-light flex flex-wrap gap-2 zero:justify-center sm:justify-start`}>
        {curProducts[1].map((product, i) => {
          console.log(`images/shinglas.site.ru/products/${product.category}/${product.subCategory}/${product.colors}sm.jpg`);
          return (
            <div
              key={`COLOR${i}`}
              className={`flex flex-col items-center justify-center`}
              onClick={() => {
                setState((state) => {
                  return {
                    ...state,
                    color: product.colors,
                  };
                });
              }}
            >
              <div className={`relative`}>
                <img
                  alt={`${product.title}`}
                  className={`rounded-full overflow-hidden cursor-pointer`}
                  src={`images/shinglas.site/products/${product.category}/${product.subCategory}/${product.colors}sm.jpg`}
                ></img>

                {product.colors === state.color && <Icons.Ok stroke='white' extraClasses={`absolute`} />}
              </div>

              <div className={`text-base text-center cursor-pointer`}>{product.colors}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
