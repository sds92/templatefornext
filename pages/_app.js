import React from 'react';

import '../styles/tailwind.css';
import { Head, Preloader, YM } from '../components/complicated';
import theme from '../utils/theme';

import { upload } from '../utils/pre';

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

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);
  const [w, setW] = React.useState(undefined);
  const data = upload(`${process.env.NEXT_PUBLIC_SITE_URL}`);

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
    data: data,
    lgView: w >= 900,
    theme: theme('green'),
    ...pageProps,
  };

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <>
          <Head head={newProps.data.content.head} theme={newProps.theme}></Head>
          <Component {...newProps} />
        </>
      )}
      <YM ymNum={newProps.data.api.ym}/>
    </>
  );
}

export default MyApp;
