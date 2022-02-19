import React from 'react';
import { Header, FullPage, Footer } from '../components/complicated';
import { motion } from 'framer-motion';
import { animations } from '../styles/animations';
import { plitaosb3ru } from '../utils/functions';
import { transform } from '../utils/transform';

export default function Home(props) {
  return (
    <>
      <Header {...props} />
      <motion.div
        initial='initial'
        animate='animate'
        exit='exit'
        variants={animations.opacity.variants}
        transition={animations.opacity.transition}
      >
        <FullPage {...props} />
      </motion.div>
      {/* <Footer /> */}
    </>
  );
}

export async function getStaticProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`https://xn--j1ano.com/uploads/staticsites/plitaosb-3.ru.json`).then((res) =>
    res.json()
  );
  const products = plitaosb3ru(res);
  const check = transform(res);
  // By returning { props: { posts } }, the Blog component
  // will receive posts as a prop at build time
  return {
    props: {
      products,
    },
  };
}
