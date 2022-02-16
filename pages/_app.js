import React from 'react';
import Router from "next/router";
import withYM from "next-ym";

import '../styles/tailwind.css';
import { Footer, Head, Preloader } from '../components/complicated';
import theme from '../utils/theme';

/**
 * 0 - plitaosb-3.ru
 * 1 - plitaosb-3.kz
 * 2 - belplit24.ru
 * 3 - fanera.site
 * 4 - csptamak.site
 * 5 - pilomateriali.site
 * 6 - shinglas-rus.ru
 * 
 */

const siteId = 6
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);
  const [w, setW] = React.useState(undefined);


  React.useEffect(() => {
    setW(window.innerWidth);
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
  }, []);
  const data = require(`../data/${process.env.SITE_URL}.js`)
  const newProps = {
    menu: [
      ['Главная', '#Main'],
      ['Цены', '#Catalog'],
      ['Преимущества', '#Advantages'],
      ['Применение', '#Gallery'],
      ['Контакты', '#Contacts'],
    ],
    w: w,
    lgView: w >= 900,
    data,
    theme: theme('black'),
    ...pageProps,
  };

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <div>
          <Head head={newProps.data.head}></Head>
          <Component {...newProps} />
          <Footer app={newProps.app}/>
        </div>
      )}
    </>
  );
}

export default MyApp

