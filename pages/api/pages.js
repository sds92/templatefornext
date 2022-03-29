import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from 'lib/session';
import fs from 'fs';

export default withIronSessionApiRoute(async (req, res) => {
  require('dotenv').config();
  if (req.session.user.pass !== process.env.PASS) {
    res.status(500).json({ message: 'AUTH FAILED' });
  }

  if (req.method === 'POST') {
    fs.writeFile(`data/pages.json`, req.body, (err) => {
      if (err) throw err;
      res.json({ status: 'ok' });
      console.log('The file has been saved!');
    });
  }
  if (req.method === 'GET') {
    let pages = [];
    fs.readFile('data/pages.json', 'utf8', (err, data) => {
      if (err) throw err;
      pages = JSON.parse(data);
      res.json(JSON.stringify(pages));
      console.log('The file has been sent!');
    });
  }
}, sessionOptions);
