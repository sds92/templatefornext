import React from 'react';
import { useRouter } from 'next/router';
import { FullPage, Header, Section } from '../components/complicated';
import { motion } from 'framer-motion';
import { animations } from '../styles/animations';
import { v2 } from '../utils/functions';

export default function Home({ w, lgView, app, menu, input, theme, products }) {
  const router = useRouter();
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
  const products = v2(res);
  console.log("🚀 ~ file: index.js ~ line 37 ~ getStaticProps ~ products", products)
  // By returning { props: { posts } }, the Blog component
  // will receive posts as a prop at build time
  return {
    props: {
      products,
    },
  };
}
