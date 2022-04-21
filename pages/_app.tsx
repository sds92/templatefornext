import * as React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr';
import fetchJson from 'lib/fetchJson';
import '../styles/tailwind.css';
import { UserHead, Preloader, YM } from '../components/complicated';
import theme from '../utils/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  if (router.route === '/admin' || router.route === '/login') {
    return (
      // @ts-ignore
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

export default appWithTranslation(MyApp);
