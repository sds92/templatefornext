
import React from 'react';

import '../styles/tailwind.css';
import { Footer, Head, Preloader } from '../components/complicated';
import pages from '../data/pages.json';
import app from '../data/app.json';

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
    app: app[0],
    input: pages[0],
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
