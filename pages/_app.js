import React from 'react';
import '../styles/tailwind.css';
// import { YM } from '../components/complicated';
import theme from '../utils/theme';

function MyApp({ Component, pageProps }) {
  
  const newProps = {
    // w: w,
    // data: data,
    // lgView: w >= 900,
    theme: theme('green'),
    ...pageProps,
  };
  

  return <Component {...newProps} />;
}

export default MyApp;
