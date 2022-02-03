import React from 'react';
import Router from "next/router";
import withYM from "next-ym";

import '../styles/tailwind.css';
import { Footer, Head, Preloader } from '../components/complicated';
import pages from '../data/pages.json';
import app from '../data/app.json';
import theme from '../utils/theme';

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
    app: app[2],
    input: pages[2],
    theme: theme('black'),
    ...pageProps,
  };

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <div>
          <Head head={newProps.input.head}></Head>
          <Component {...newProps} />
          <Footer app={newProps.app}/>
        </div>
      )}
    </>
  );
}

export default withYM(app[0].api.ym, Router)(MyApp);

