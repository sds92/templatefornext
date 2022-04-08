import * as React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr';
import fetchJson from 'lib/fetchJson';
import '../styles/tailwind.css';
import { UserHead, Preloader, YM } from '../components/complicated';
import theme from '../utils/theme';

import { upload } from '../utils/pre';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = React.useState(true);
  const [w, setW] = React.useState(undefined);
  const router = useRouter();

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
    w: w,
    lgView: w >= 900,
    ...pageProps,
  };
  if (router.route === '/admin' || router.route === '/login') {
    return (
      <SWRConfig
        value={{
          fetcher: fetchJson,
          onError: (err) => {
            console.error(err);
          },
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    );
  }
  return (
    <React.Fragment>
      <Component {...newProps} />
      {/* <YM ymNum={newProps.data.api.ym} /> */}
    </React.Fragment>
  );
};

export default MyApp;
