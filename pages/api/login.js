import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";

export default withIronSessionApiRoute(async (req, res) => {
  require('dotenv').config();
  const { userpass } = await req.body;

  try {
    // const {
    //   data: { login, avatar_url },
    // } = await octokit.rest.users.getByUsername({ username });

    if (userpass === process.env.PASS) {
      const pass = userpass
      const user = { isLoggedIn: true, pass: pass };
      req.session.user = user;
      await req.session.save();
      res.json(user);
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}, sessionOptions);
