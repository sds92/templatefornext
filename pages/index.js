import React from 'react';
import { FullPage, Header } from '../components/complicated';
import { v2, v3 } from '../utils/functions';

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
      </>
    </body>
  );
}

export async function getStaticProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`https://xn--j1ano.com/uploads/staticsites/shinglas-rus.ru.json`).then((res) =>
    res.json()
  );
  const products = v3(res);
  // By returning { props: { posts } }, the Blog component
  // will receive posts as a prop at build time
  return {
    props: {
      products,
    },
  };
}
