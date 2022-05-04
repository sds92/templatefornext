import React from 'react';
import { useRouter } from 'next/router';
import { Header, Footer } from '../components/complicated';

export default function Home({ w, lgView, app, menu, input, theme, products }) {
  return (
    <body>
      <>
        <Header lgView={lgView} menu={menu} app={app} theme={theme} />
        <div className='h-16'></div>
        {/* <FullPage/> */}
        <div>Страница не найдена</div>
        <Footer app={app} />
      </>
    </body>
  );
}
