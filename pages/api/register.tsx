import type { NextApiRequest, NextApiResponse } from 'next';
import User from 'db/schema/Users';
import mongoose from 'mongoose';
import 'utils/dbConnect';

const registerRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'POST': {
      try {
        let {
          body: { name, email, password },
        } = req;

        if (!name) {
          return res.status(422).json({
            errors: {
              name: 'is required',
            },
          });
        }

        if (!password) {
          return res.status(422).json({
            errors: {
              password: 'is required',
            },
          });
        }

        if (!email) {
          return res.status(422).json({
            errors: {
              email: 'is required',
            },
          });
        }
        // mongoose.connections[0].Users
        let repeatments = await User.find({ email: email });
        if (repeatments.length > 0) {
          return res.status(422).json({
            errors: {
              email: 'is in use',
            },
          });
        }
        let user = new User({
          name,
          email,
          isAdmin: false,
        });
        await user.setPassword(password);
        await user.save();
        return res.status(200).json({ user: user.toAuthJSON() });
      } catch (error) {
        return res.status(400).json({
          success: false,
        });
      }
    }
    default:
      res.setHeader('Allow', ['POST']);
      return res.status(405).json({ success: false })
  }
};

export default registerRoute;
