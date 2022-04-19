import { withIronSessionApiRoute } from 'iron-session/next';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'lib/session';

export default withIronSessionApiRoute(async (req: NextApiRequest, res: NextApiResponse) => {
  require('dotenv').config();
  const { token } = await req.body;

  try {
    let user = {};

    if (token === process.env.PASS) {
      user = { isLoggedIn: true, isAdmin: true, name: 'admin' };
      req.session.user = user;
      await req.session.save();
      res.json(user);
    }
    res.status(401).json({
      errors: {
        auth: 'failed',
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'error.message' });
  }
}, sessionOptions);
