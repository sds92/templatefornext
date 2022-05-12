import React from 'react';

import '../styles/tailwind.css';
import { Head, YM } from '../components/complicated';
import theme from '../utils/theme';

import { upload } from '../utils/pre';

function MyApp({ Component, pageProps }) {
  const [w, setW] = React.useState(undefined);
  const data = upload(`${process.env.NEXT_PUBLIC_SITE_URL}`);

  React.useEffect(() => {
    setW(window.innerWidth);
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
    theme: theme(process.env.NEXT_PUBLIC_THEME),
    ...pageProps,
  };

  return (
    <>
      <Head head={newProps.data.content.head} theme={newProps.theme}></Head>
      <Component {...newProps} />
      {newProps.data.api.ym && <YM ymNum={newProps.data.api.ym} />}
    </>
  );
}

export default MyApp;
