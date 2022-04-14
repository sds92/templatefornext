import { createSlice } from '@reduxjs/toolkit';
import ProductList from 'models/ProductList';
import { productsController } from 'utils/products.controller';

const cities = [
  ['Москва', 'square'],
  ['СПБ', 'spb'],
  ['Казань', 'kazan'],
  ['Краснодар', 'krasnodar'],
  ['Ростов', 'rostov'],
  ['Волгоград', 'volvograd'],
  ['Астрахань', 'astrahan'],
  ['Крым', 'crimea'],
]
const initialState = {

  productList: new ProductList({
    cities: [
      ['Москва', 'square'],
      ['СПБ', 'spb'],
      ['Казань', 'kazan'],
      ['Краснодар', 'krasnodar'],
      ['Ростов', 'rostov'],
      ['Волгоград', 'volvograd'],
      ['Астрахань', 'astrahan'],
      ['Крым', 'crimea'],
    ],
  }),
  productsInit: [],
  products: [],
  isChanged: false,
  toDeleteOptions: [],
  toDeleteProducts: [],
  createdOptions: [],
  createdProducts: [],
  pages: [],
  pagesInit: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setIsChanged: (state, action) => {
      state.isChanged = action.payload;
    },
    updateProducts: (state, action) => {
      state.products = action.payload;
    },
    updateProductsInit: (state, action) => {
      state.productsInit = action.payload;
    },
    importInitProducts: (state, action) => {
      state.productsInit = action.payload;
      state.products = action.payload;
    },

    setOption: (state, action) => {
      const { product_id, option_position, option_name, option_value } = action.payload;
      const _products = JSON.parse(JSON.stringify(state.products));
      const _product = _products.find((item) => item.id === product_id);
      _product.options[option_position][option_name] = option_value;

      const product_position = null;
      _products.find((item, i) => {
        if (item.id === parseInt(product_id)) {
          product_position = i;
        }
      });
      state.products.splice(product_position, 1, _product);
      state.save = true;
    },
    setPrices: (state, action) => {
      state.products = action.payload;
      state.save = true;
    },
    setToDeleteProducts: (state, action) => {
      state.toDeleteProducts.push(action.payload);
      state.save = true;
    },
    setToDeleteOptions: (state, action) => {
      const { product_id, option_position } = action.payload;
      state.toDeleteOptions.push({ product_id, option_position });
      state.save = true;
    },
    setCreatedOptions: (state, action) => {
      const { product_id, option_position } = action.payload;
      state.createdOptions.push({ product_id, option_position });
      state.save = true;
    },
    setCreatedProducts: (state, action) => {
      const { product_id } = action.payload;
      state.createdProducts.push(product_id);
      state.save = true;
    },
    clearToDeleteOptions: (state, action) => {
      state.toDeleteOptions = action.payload;
    },
    clearToDeleteProducts: (state, action) => {
      state.toDeleteProducts = action.payload;
    },
    clearCreatedOptions: (state, action) => {
      state.createdOptions = action.payload;
    },
    clearCreatedProducts: (state, action) => {
      state.createdProducts = action.payload;
    },
    deleteOptions: (state, action) => {
      state.products = action.payload;
    },
    importInitPages: (state, action) => {
      state.pages = action.payload;
      state.pagesInit = action.payload;
    },
    updatePages: (state, action) => {
      state.pages = action.payload;
    },
  },
});

export const {
  setCreatedOptions,
  setCreatedProducts,
  setToDeleteOptions,
  setToDeleteProducts,
  clearToDeleteOptions,
  clearToDeleteProducts,
  clearCreatedOptions,
  clearCreatedProducts,
  setOption,
  setPrices,
  setIsChanged,
  updateProducts,
  updateProductsInit,
  // addOption,
  importInitProducts,
  deleteOptions,
  setSave,
  importInitPages,
  updatePages,
} = productsSlice.actions;

export const selectPages = (state) => {
  return state.products.pages;
};
export const selectPagesInit = (state) => {
  return state.products.pagesInit;
};
export const selectCreatedOptions = (state) => {
  return state.products.createdOptions;
};
export const selectCreatedProducts = (state) => {
  return state.products.createdProducts;
};
export const selectToDeleteProducts = (state) => {
  return state.products.toDeleteProducts;
};
export const selectToDeleteOptions = (state) => {
  return state.products.toDeleteOptions;
};
export const selectProductList = (state) => {
  return state.products.productList;
};
export const selectProductsInit = (state) => {
  return state.products.productsInit;
};
export const selectProducts = (state) => {
  return state.products.products;
};
export const selectIsChanged = (state) => {
  return state.products.isChanged;
};

export const addOption =
  ({ product_id, option_position, a, b, h, show, connectionType, density }) =>
  (dispatch, getState) => {
    let products = JSON.parse(JSON.stringify(selectProducts(getState())));
    let product = productsController.getProductById(products, product_id);
    let product_position = productsController.getProductPositionById(products, product_id);
    dispatch(setCreatedOptions({ product_id, option_position }));
    
    product.options.push({
      a: parseInt(a),
      b: parseInt(b),
      h: parseInt(h),
      show: show || false,
      coef: ((parseInt(a) / 1000) * parseInt(b)) / 1000,
      connectionType: connectionType || ' - ',
      density: parseInt(density) || null,
      prices: productsController.getInitPrices(cities)
    });
    products.splice(product_position, 1, product);
    dispatch(updateProducts(products))
    dispatch(setIsChanged(true))
  };

export default productsSlice.reducer;
