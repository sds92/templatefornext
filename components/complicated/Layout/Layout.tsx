import * as React from 'react';
import { UserHead, Header } from '..';
import { useRouter } from 'next/router';
interface MainProps {
  w: number;
  lgView: boolean;
  data: {};
  theme: ITheme;
  app: IApp;
  pages: { id: number; path: string; head: IHeadMeta }[];
  products: {};
}

const Layout: React.FC<MainProps> = (props: MainProps) => {
  const { pages, w, theme, app } = props;
  const router = useRouter();
  return (
    <>
      <UserHead head={pages.find((item) => item.path === router.route)?.head} />
      <Header w={w} app={app} theme={theme}/>
      {app.content.template.map((item: Section, i: number) => {
        const [...a] = item.model.split('.')
        console.log("🚀 ~ file: Layout.tsx ~ line 23 ~ {app.template.map ~ a,b", [...a])
        // const Section = Sections[a][b]
        return 
      })}
    </>
  );
};

export default Layout;
