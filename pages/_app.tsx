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
 
  // if (router.route === '/admin' || router.route === '/login') {
  //   return (
  //     <SWRConfig
  //       value={{
  //         fetcher: fetchJson,
  //         onError: (err) => {
  //           console.error(err);
  //         },
  //       }}
  //     >
  //       <Component {...pageProps} />
  //     </SWRConfig>
  //   );
  // }
  return <Component {...newProps} />;
};

export default MyApp;
