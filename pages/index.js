import React from 'react';
import { Header, FullPage, Footer } from '../components/complicated';
import { motion } from 'framer-motion';
import { animations } from '../styles/animations';
import { transform } from '../utils/transform';
import fs from 'fs';

export default function Home({ w, newProps }) {
  return (
    w && (
      <>
        <Header {...newProps} />
        <motion.div
          className={``}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={animations.opacity.variants}
          transition={animations.opacity.transition}
        >
          <FullPage {...newProps} />
        </motion.div>
        <Footer app={newProps} />
      </>
    )
  );
}

export async function getStaticProps() {
  const resProducts = await fetch(
    `https://xn--j1ano.com/uploads/staticsites/${encodeURI(process.env.NEXT_PUBLIC_SITE_URL)}.json`
  )
    .then((res) => res.json())
    .catch((err) => {
      return null;
    });
  
    let app = JSON.parse(fs.readFileSync('pilomateriali/app.ru.json', 'utf8'));
  // const resContacts = await fetch(
  //   `https://xn--j1ano.com/uploads/staticsites/contacts_${encodeURI(process.env.NEXT_PUBLIC_SITE_URL)}.json`
  // )
  //   .then((res) => res.json())
  //   .catch((err) => {
  //     return null;
  //   });

  // const resMainBanner = await fetch(
  //   `https://xn--j1ano.com/uploads/staticsites/mainBanner_${encodeURI(process.env.NEXT_PUBLIC_SITE_URL)}.json`
  // )
  //   .then((res) => res.json())
  //   .catch((err) => {
  //     return null;
  //   });

  const datafromDB = transform(resProducts.filter((item) => item.visible));
  // let pages = JSON.parse(fs.readFileSync('pilomateriali/pages.ru.json', 'utf8'));
  let theme = JSON.parse(fs.readFileSync('data/theme.json', 'utf8'));
  return {
    revalidate: 10,
    props: {
      app,
      // pages,
      theme,
      datafromDB,
      resContacts,
      resMainBanner,
    },
  };
}
