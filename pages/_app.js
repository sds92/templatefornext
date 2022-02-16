import React from 'react';
import Router from 'next/router';
import Script from 'next/script';
// import withYM from 'next-ym';

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
    theme: theme('green'),
    ...pageProps,
  };

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <>
          <div>
            <Head head={newProps.input.head}></Head>
            <Component {...newProps} />
            <Footer app={newProps.app} theme={newProps.theme} />
          </div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");
        
        ym(${app[2].api.ym}, "init", {
             clickmap:true,
             trackLinks:true,
             accurateTrackBounce:true,
             webvisor:true,
             trackHash:true
        });
`,
            }}
          />
        </>
      )}
    </>
  );
}

export default MyApp;
