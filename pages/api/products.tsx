import type { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions, withSessionRoute, withSessionSsr } from 'lib/session';
import fs from 'fs';

export default withSessionRoute(async (req: NextApiRequest, res: NextApiResponse) => {
  require('dotenv').config();
  // if (req.session.user.pass !== process.env.PASS) {
  //   res.status(500).json({ message: 'AUTH FAILED' });
  // }

  if (req.method === 'POST') {
    fs.writeFile(`data/products.ru.json`, req.body, (err) => {
      if (err) throw err;
      res.json({ status: 'ok' });
      console.log('The file has been saved!');
    });
  }
  if (req.method === 'GET') {
    let products = [];
    fs.readFile('data/products.ru.json', 'utf8', (err, data) => {
      if (err) throw err;
      products = JSON.parse(data);
      res.json(JSON.stringify(products));
      console.log('The file has been sent!');
    });
  }
});
