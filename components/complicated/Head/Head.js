import React from 'react';
import Head from 'next/head';

export default function HeadComponent({ head, children, theme }) {
  return (
    <Head>
      <title>{head.title}</title>
      {head.meta.map((item, index) => (
        <meta name={item.name} content={item.content} key={`META${index}`} />
      ))}
      <meta name='theme-color' content={`${theme.metaThemeColor || `transparent`}`}></meta>
      {children && children}
    </Head>
  );
}
