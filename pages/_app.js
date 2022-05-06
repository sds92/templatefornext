import React from 'react';

import '../styles/tailwind.css';
import { Footer, Head, Preloader } from '../components/complicated';
import pages from '../shinglas/pages.json';
import app from '../shinglas/app.json';
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
    lgView: w >= 900,
    ymNum: app.api.ym,
    app: app,
    input: pages,
    theme: theme('black'),
    ...pageProps,
  };

  return (
    <>
      <Head head={newProps.input.head}></Head>
      {w && <Component {...newProps} />}
      
      {/* <script
        type='text/javascript'
        dangerouslySetInnerHTML={{
          __html: `
         (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
         m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
         (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");
      
         ym(${newProps.ymNum}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              trackHash:true
         });
`,
        }} */}
      {/* /> */}
    </>
  );
}

export default MyApp;
