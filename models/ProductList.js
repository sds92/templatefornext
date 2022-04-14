import { pagesInit } from './pages';

class ProductList {
  constructor(config) {
    this.pagesInit = pagesInit;
    this.cities = config.cities;
    this.product = {
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
          prices: config.cities.map((item) => ({ city: item, value: null })),
        },
      ],
      desc: [],
    };
    this.option = {
      a: null,
      b: null,
      h: null,
      show: false,
      coef: null,
      connectionType: '',
      density: null,
      prices: config.cities.map((item) => ({ city: item, value: null })),
    };
    this.page = {
      id: null,
      path: '',
      title: '',
      content: { product_id: null },
      head: {
        title: '',
        meta: [
          {
            name: 'keywords',
            content: '',
          },
          {
            name: 'description',
            content: '',
          },
        ],
      },
    };
  }

  getNewId(arrOfObjs) {
    let ids = arrOfObjs.map((obj) => obj.id);
    for (let index = 0; index < ids.length; index++) {
      if (ids[index + 1] - ids[index] !== 1) {
        return index + 1;
      }
    }
  }

  addItem(products, pages, input) {
    let _products = JSON.parse(JSON.stringify(products));
    let _pages = JSON.parse(JSON.stringify(pages));
    let newProduct = JSON.parse(JSON.stringify(this.product));
    let newPage = JSON.parse(JSON.stringify(this.page));
    newProduct.id = this.getNewId(_products);
    newProduct.info.slug = input.slug;
    newProduct.info.title = input.title;
    newPage.id = this.getNewId(pages);
    newPage.path = `/catalog/${input.slug}`;
    newPage.title = `Белтермо ${input.slug}`;
    newPage.content = { product_id: newProduct.id };
    _products.push(newProduct);
    _pages.push(newPage);
    return [_products, _pages, newProduct.id];
  }
  deleteItem(products, pages, id) {
    let _products = JSON.parse(JSON.stringify(products));
    let _pages = JSON.parse(JSON.stringify(pages));
    let product_position = null;
    let page_position = null;
    _products.find((item, i) => {
      if (item.id === parseInt(id)) {
        product_position = i;
        return true;
      }
    });
    _pages.find((item, i) => {
      if (item.content.product_id === parseInt(id)) {
        page_position = i;
        return true;
      }
    });
    _products.splice(product_position, 1);
    _pages.splice(page_position, 1);
    return [_products, _pages, id];
  }

  setUserTitle(productList, input, id) {
    let _products = JSON.parse(JSON.stringify(productList));
    let _product = this.findById(_products, id);
    _product.info.userTitle = input;
    let product_position = null;
    _products.find((item, i) => {
      if (item.id === parseInt(id)) {
        product_position = i;
        return true;
      }
    });
    _products.splice(product_position, 1, _product);
    return _products;
  }

  addDesk(productList, input, id) {
    let _products = JSON.parse(JSON.stringify(productList));
    let _product = this.findById(_products, id);
    _product.desc.push(input);
    let product_position = null;
    _products.find((item, i) => {
      if (item.id === parseInt(id)) {
        product_position = i;
        return true;
      }
    });
    _products.splice(product_position, 1, _product);
    return _products;
  }

  findById(productList, product_id) {
    return productList.find((item) => item.id === product_id);
  }

  modifyOptions(productList, input) {
    this.findById(input.product_id).options[input.option_position][input.option_name] = input.option_value;
  }

  setPrices(productList, { product_id, option_position, option_city, option_value }) {
    let _products = JSON.parse(JSON.stringify(productList));
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

  

  instance() {}
}

export default ProductList;
