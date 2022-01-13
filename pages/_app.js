import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

import '../styles/tailwind.css';
import { Header, Footer, Head, Preloader } from '../components/complicated';
import pages from '../data/pages.json';
import app from '../data/app.json';
import { animations } from '../styles/animations';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);
  const [w, setW] = React.useState(undefined);
  React.useEffect(() => {
    setW(window.innerWidth);
    window.addEventListener(
      'resize',
      () => {
        setW(window.innerWidth);
      },
      []
    );
    // const timer = (a) =>
    //   setTimeout(() => {
    //     a();
    //   }, 1000);

    window.onload = function() {
      setLoading(false);
    }
    // document.onreadystatechange = function () {
    //   if (document.readyState === 'interactive') {
    //     console.log("🚀 interactive ", document.readyState)
    //     setLoading(false);
    //   }
    //   if (document.readyState === 'complete') {
    //     console.log("🚀 complete", document.readyState)
    //     setLoading(false);
    //   }
    // };
  }, []);

  const newProps = {
    menu: [
      ['Главная', '#Main'],
      ['Цены', '#Catalog'],
      ['Преимущества', '#Advantages'],
      ['Применение', '#Gallery'],
      ['Контакты', '#Contacts'],
    ],
    lgView: w >= 900,
    app: app,
    input: pages,
    ...pageProps,
  };

  return (
    <>
      {loading && <Preloader />}
      {/* {!loading && ( */}
      <div>
        <Head head={newProps.input.head}></Head>
        <Component {...newProps} />
        <Footer />
      </div>
      {/* )} */}
    </>
  );
}

export default MyApp;
