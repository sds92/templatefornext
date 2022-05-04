import * as React from 'react';
import { UserHead, Header, Footer, Contacts } from '..';
import { useRouter } from 'next/router';

type LayoutProps = {
  w: number;
  theme: ITheme;
  app: IApp;
  pages: { id: number; path: string; head: IHeadMeta }[];
  children:  any;
}

const Layout = (props: LayoutProps) => {
  const { pages, w, theme, app, children } = props;
  const router = useRouter();
  return (
    <>
      <UserHead head={pages.find((item) => item.path === router.route)?.head} />
      <Header w={w} app={app} theme={theme} />
      {children && children}
      {/* <Footer app={app} theme={theme}/> */}
    </>
  );
};

export default Layout;
