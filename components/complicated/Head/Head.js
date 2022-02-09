import React from 'react';
import Head from 'next/head';

export default function HeadComponent({ head, children }) {
  return (
    <Head>
      <title>{head.title}</title>
      {head.meta.map((item, index) => (
        <meta name={item.name} content={item.content} key={`META${index}`} />
      ))}
      <link rel='shortcut icon' href='/images/logo.png' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'
        rel='stylesheet'
      />
      {children && children}
    </Head>
  );
}
