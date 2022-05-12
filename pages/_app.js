import React from 'react';
import '../styles/tailwind.css';
// import { YM } from '../components/complicated';
import theme from '../utils/theme';

function MyApp({ Component, pageProps }) {
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
    // data: data,
    lgView: w >= 900,
    theme: theme('green'),
    ...pageProps,
  };

  return <Component {...newProps} />;
}

export default MyApp;
