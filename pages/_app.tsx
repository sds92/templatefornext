import * as React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr';
import fetchJson from 'lib/fetchJson';
import '../styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
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
  return <Component {...pageProps} />;
};

export default MyApp;
