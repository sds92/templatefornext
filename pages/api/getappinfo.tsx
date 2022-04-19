import type { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions, withSessionRoute, withSessionSsr } from 'lib/session';
import fs from 'fs';

export default withIronSessionApiRoute(async (req: NextApiRequest, res: NextApiResponse) => {
  require('dotenv').config();
  if (req.session.user.pass !== process.env.PASS) {
    res.status(500).json({ message: 'AUTH FAILED' });
  }

  if (req.method === 'POST') {
    fs.writeFile(`data/app.ru.json`, req.body, (err) => {
      if (err) throw err;
      res.json({ status: 'ok' });
      console.log('The file has been saved!');
    });
  }
  if (req.method === 'GET') {
    let _data = [];
    fs.readFile('data/app.ru.json', 'utf8', (err, data) => {
      if (err) throw err;
      _data = JSON.parse(data);
      console.log('🚀 ~ file: app.tsx ~ line 23 ~ fs.readFile ~ _data', _data);
      res.json(JSON.stringify(_data));
      console.log('The file has been sent!');
    });
  }
}, sessionOptions);
