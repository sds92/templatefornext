import React from 'react';
import { FullPage, Header, Footer } from '../components/complicated';
import { v2 } from '../utils/functions';

export default function Home({ w, lgView, app, menu, input, theme, products }) {
  return (
    <body>
      <>
        <Header lgView={lgView} menu={menu} app={app} theme={theme} />
        <div className='h-16'></div>
        {/* <FullPage/> */}
        <FullPage
          menu={menu}
          app={app}
          lgView={lgView}
          content={input}
          theme={theme}
          products={products}
          w={w}
        />
        <Footer app={app} />
      </>
    </body>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://xn--j1ano.com/uploads/staticsites/shinglas-rus.ru.json`).then((res) =>
    res.json()
  );
  const products = v2(res);
  return {
    revalidate: 5,
    props: {
      products,
    },
  };
}
