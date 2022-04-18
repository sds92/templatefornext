import { withIronSessionApiRoute } from 'iron-session/next';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions, withSessionRoute, withSessionSsr } from 'lib/session';
import 'utils/dbConnect';
import User, { IUser } from 'db/schema/Users';

export default withSessionRoute(async (req: NextApiRequest, res: NextApiResponse) => {
  require('dotenv').config();
  const { email, password } = await req.body;

  try {
    let user = await User.findOne({ email: email });

    if (user.validatePassword(password)) {
      const sessionUser = { isLoggedIn: true, isAdmin: user.isAdmin || false, name: user.email };
      // @ts-ignore
      req.session.user = sessionUser;
      await req.session.save();
      res.status(200).json(sessionUser);
    }
    res.status(401).json({
      errors: {
        auth: 'failed',
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'error.message' });
  }
});
