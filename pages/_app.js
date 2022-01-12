import { SizeMe } from 'react-sizeme';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

import '../styles/tailwind.css';
import { Header, Footer, Head, Preloader } from '../components/complicated';
import pages from '../data/pages.json';
import { animations } from '../styles/animations';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <SizeMe>
          {({ size }) => {
            const newProps = {
              lgView: size.width >= 900,
              input: pages,
              ...pageProps,
            };
            return (
              <div>
                <Head head={newProps.input.head}></Head>
                <Component {...newProps} />
                <Footer />
              </div>
            );
          }}
        </SizeMe>
      )}
    </>
  );
}

export default MyApp;
