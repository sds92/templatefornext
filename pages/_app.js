import React from 'react';
import Router from 'next/router';

import '../styles/tailwind.css';
import { Footer, Head, Preloader, YM } from '../components/complicated';
import pages from '../data/pages.json';
import app from '../data/app.json';
import theme from '../utils/theme';

/**
 * 0 - plitaosb-3.ru
 * 1 - plitaosb-3.kz
 * 2 - belplit24.ru
 * 3 - fanera.site
 * 4 - csptamak.site
 * 5 - pilomateriali.site
 *
 */

const siteId = 4;

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
    app: app.find(({ id }) => id === siteId),
    input: pages.find(({ id }) => id === siteId),
    theme: theme('black'),
    ...pageProps,
  };

  return (
    w && (
      <>
        {loading && <Preloader />}
        <div className={`${loading ? `w-screen h-screen opacity-0` : `opacity-100`}`}>
          <Head head={newProps.input.head}></Head>
          <Component {...newProps} />
          <Footer app={newProps.app} />
        </div>

        {/* <YM ymNum={newProps?.data?.api?.ym} /> */}
      </>
    )
  );
}

export default MyApp;
