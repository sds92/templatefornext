import type { IronSessionOptions } from 'iron-session';
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';
import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiHandler } from 'next';

// // this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
interface IronSessionOptionsWithUser extends IronSessionOptions {
  user?: {
    isLoggedIn: boolean;
    isAdmin: boolean;
    name: string;
  };
}
export const sessionOptions: IronSessionOptionsWithUser = {
  password: process.env.SECRET_COOKIE_PASSWORD === undefined ? '' : process.env.SECRET_COOKIE_PASSWORD,
  cookieName: process.env.SESSION_KEY || 'test',
  cookieOptions: {
    maxAge: 24 * 60 * 60,
    secure: process.env.NODE_ENV === 'production',
  },
};

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSessionSsr<P extends { [key: string]: unknown } = { [key: string]: unknown }>(
  handler: (
    context: GetServerSidePropsContext
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
  return withIronSessionSsr(handler, sessionOptions);
}
