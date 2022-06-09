
const __cities = [
  ['Москва', 'square'],
  // ['СПБ', 'spb'],
  // ['Казань', 'kazan'],
  // ['Краснодар', 'krasnodar'],
  // ['Ростов', 'rostov'],
  // ['Волгоград', 'volvograd'],
  // ['Астрахань', 'astrahan'],
  // ['Крым', 'crimea'],
];
const __product = {
  id: null,
  info: { slug: '', position: null, displayName: '', title: '' },
  options: [
    {
      a: null,
      b: null,
      h: null,
      show: false,
      coef: null,
      connectionType: '',
      density: null,
      prices: __cities.map((item) => ({ city: item[1], value: null })),
    },
  ],
  desc: [],
}
export const productsController = {
  cities: __cities,
  _product: __product,
  copy: (arr) => {
    let res = JSON.parse(JSON.stringify(arr));
    return res;
  },
  getNewId: (arrOfObjs) => {
    let ids = arrOfObjs.map((obj) => obj.id);
    for (let index = 0; index < ids.length; index++) {
      if (ids[index + 1] - ids[index] !== 1) {
        return index + 1;
      }
    }
  },
  getProductById: (products, id) => {
    return products.find((item) => item.id === parseInt(id));
  },
  getProductPositionById: (products, id) => {
    let product_position = null;
    productsController.copy(products).find((item, i) => {
      if (item.id === parseInt(id)) {
        product_position = i;
        return true;
      }
    });
    return product_position;
  },
  getInitPrices: (cities) => {
    return cities.map((item) => ({ city: item[1], value: null }));
  },
  setDesc: (products, product_id, { title, value }) => {
    let product = productsController.getProductById(products, product_id);
    if (product.desc.find((item) => item.title === title)) {
      product.desc.find((item) => item.title === title).value = value;
    } else {
      product.desc.push({ title, value });
    }
    let product_position = productsController.getProductPositionById(products, product_id);
    products.splice(product_position, 1, product);
    return products;
  },
  setTitle: (products, product_id, title) => {
    let product = productsController.getProductById(products, product_id);
    product.info.title = title;
    let product_position = productsController.getProductPositionById(products, product_id);
    products.splice(product_position, 1, product);
    return products;
  },
  setUserTitle: (products, product_id, value) => {
    let product = productsController.getProductById(products, product_id);
    product.info.userTitle = value;
    let product_position = productsController.getProductPositionById(products, product_id);
    products.splice(product_position, 1, product);
    return products;
  },
  setPosition: (products, product_id, position) => {
    let product = productsController.getProductById(products, product_id);
    product.info.position = parseInt(position);
    let product_position = productsController.getProductPositionById(products, product_id);
    products.splice(product_position, 1, product);
    return products;
  },
  sortByPosition: (products) => {
    let _products = productsController.copy(products);
    return _products.sort((a, b) => parseInt(a.info.position) - parseInt(b.info.position));
  },
  addProduct: (products, input) => {
    let _products = productsController.copy(products);
    let newProduct = JSON.parse(JSON.stringify(productsController._product));
    newProduct.id = productsController.getNewId(_products);
    newProduct.info.slug = input?.slug || '';
    newProduct.info.title = input.title;
    _products.push(newProduct);
    return [_products, newProduct.id];
  },
  setPrices: (products, { product_id, option_position, option_city, option_value }) => {
    let _products = productsController.copy(products);
    let _product = _products[product_id];
    let product_position = null;
    let price_position = null;
    _products.find((item, i) => {
      if (item.id === parseInt(product_id)) {
        product_position = i;
        return true;
      }
    });
    _product.options[option_position].prices.find((item, i) => {
      if (item.city === option_city) {
        price_position = i;
        return true;
      }
    });
    _product.options[option_position].prices.splice(price_position, 1, {
      city: option_city,
      value: option_value,
    });
    _products.splice(product_position, 1, _product);
    return _products;
  }
};