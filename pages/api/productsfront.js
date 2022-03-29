import fs from 'fs';

export default async function (req, res) {
  require('dotenv').config();

  if (req.method === 'POST') {
    fs.writeFile(`data/products3.json`, req.body, (err) => {
      if (err) throw err;
      res.json({ status: 'ok' });
      console.log('The file has been saved!');
    });
  }
  if (req.method === 'GET') {
    let products = [];
    
    if (req.query.slug) {
      fs.readFile('data/products3.json', 'utf8', (err, data) => {
        if (err) throw err;
        products = JSON.parse(data);
        let product = products.find((item) => item.info.slug === req.query.slug);
        product.options = product.options.filter(o => o.show)
        res.json(JSON.stringify(product));
        console.log('The file has been sent!');
      });
    }

    fs.readFile('data/products3.json', 'utf8', (err, data) => {
      if (err) throw err;
      products = JSON.parse(data);
      res.json(JSON.stringify(products));
      console.log('The file has been sent!');
    });
  }
}
