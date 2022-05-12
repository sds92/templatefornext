import React from 'react';
import { Header, FullPage, Footer, Head, YM } from '../components/complicated';
import { motion } from 'framer-motion';
import { animations } from '../styles/animations';
import { transform } from '../utils/transform';
import fs from 'fs';

export default function Home(props) {
  const {w, app, theme} = props
  return (
    w && (
      <>
      <Head head={app.content.head} theme={theme}></Head>
        <Header {...props} />
        <motion.div
          className={``}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={animations.opacity.variants}
          transition={animations.opacity.transition}
        >
          <FullPage {...props} />
        </motion.div>
        <Footer theme={theme} app={app} />
        {app.api.ym && <YM ymNum={app.api.ym} />}
      </>
    )
  );
}

export async function getStaticProps() {
  const resProducts = await fetch(
    `https://xn--j1ano.com/uploads/staticsites/pilomateriali.site.json`
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
  
  return {
    revalidate: 10,
    props: {
      app,
      datafromDB
    },
  };
}
