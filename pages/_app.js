import React from 'react';

import '../styles/tailwind.css';
import { Head, Preloader, YM } from '../components/complicated';
import theme from '../utils/theme';

import { upload } from '../utils/pre';

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
    theme: theme('black'),
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
