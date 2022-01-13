
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
    setW(window.innerWidth)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    window.addEventListener(
      'resize',
      () => {
        setW(window.innerWidth);
      },
      []
    );
    document.onload = function () {
        alert('111')
    }
    document.onreadystatechange = function () {
      // if (document.readyState == "complete") {
      //   alert('111')
      // }
    }
    
  }, []);

  const newProps = {
    menu:  [
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
      {!loading && (
        <div>
          <Head head={newProps.input.head}></Head>
          <Component {...newProps} />
          <Footer />
        </div>
      )}
    </>
  );
}

export default MyApp;
