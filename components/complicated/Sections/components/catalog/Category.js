import React from 'react';

export default function Category({ lgView, products, categoryName, onChangeCategory, state }) {
  //   console.log("🚀 ~ file: Category.js ~ line 4 ~ Category ~ products, categoryName", products, categoryName)
  if (lgView) {
    return (
      <>
        <div className={`max-w-7xl mx-auto px-4`}>
          <div className={`text-xl font-bold my-4`}>{`${categoryName} черепица`}:</div>
          <div className={`max-w-7xl mx-auto flex flex-wrap justify-start px-2`}>
            {products.map(([productTitle, product], i) => {
              return (
                <div
                  className={`cursor-pointer text-xl text-slate-700 font-light px-2`}
                  key={`product${i}`}
                  onClick={() => {
                    onChangeCategory((state) => {
                      return {
                        ...state,
                        category: categoryName,
                        subCategory: productTitle,
                        color: product[0].colors,
                      };
                    });
                  }}
                >
                  <div
                    className={`flex flex-col transition-all whitespace-nowrap ${
                      state.subCategory === productTitle
                        ? 'text-zinc-900'
                        : 'text-zinc-300 hover:text-belplit24_2'
                    } text-left `}
                  >
                    <div className={`text-base`}>{productTitle}</div>
                    <div className={`font-semibold`}>от {product[0].prices}₽/м²</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <br />
      </>
    );
  } else {
    return (
      <>
        {state.menuOpen && (
          <div className={`rounded-md bg-white z-50 inset-x-0 p-4 shadow-xl mx-4`}>
            <div className={`text-xl mt-4 font-medium`}>{`${categoryName} черепица`}:</div>
            <hr />
            <div className={`mt-2 flex flex-wrap mx-auto`}>
              {products.map(([productTitle, product], i) => {
                return (
                  <div
                    className={`cursor-pointer text-xl font-light px-2`}
                    key={`product${i}`}
                    onClick={() => {
                      onChangeCategory((state) => {
                        return {
                          ...state,
                          category: categoryName,
                          subCategory: productTitle,
                          color: product[0].colors,
                          menuOpen: false
                        };
                      });
                    }}
                  >
                    <div
                      className={`flex flex-col transition-all whitespace-nowrap ${
                        state.subCategory === productTitle ? 'text-belplit24_2' : 'text-zinc-900'
                      } text-left `}
                    >
                      <div className={`text-base`}>{productTitle}</div>
                      <div className={`font-semibold`}>{product[0].prices}₽/м²</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}
