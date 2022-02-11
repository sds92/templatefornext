import React from 'react';
import { useRouter } from 'next/router';
import { Header, Section } from '../components/complicated';
import { motion } from 'framer-motion';
import { animations } from '../styles/animations';
import { plitaosb3ru } from '../utils/functions';
import { FullPage } from '../components/complicated';

export default function Home(props) {
  const { w, lgView, app, menu, input, theme, products } = props;
  const router = useRouter();
  return (
    <body>
      <>
        <Header lgView={lgView} menu={menu} app={app} theme={theme} />
        <div className='h-16'></div>
        {/* <FullPage/> */}
        <motion.div
          key={router.route.concat(animations.opacity)}
          className='page-wrap'
          initial='initial'
          animate='animate'
          exit='exit'
          variants={animations.opacity.variants}
          transition={animations.opacity.transition}
        >
          <FullPage {...props}/>
        </motion.div>
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
  const products = plitaosb3ru(res);
  // By returning { props: { posts } }, the Blog component
  // will receive posts as a prop at build time
  return {
    props: {
      products,
    },
  };
}
