import React from 'react';
import Head from 'next/head';

export default function HeadComponent({ head, children, ...props }) {
  return (
    <Head>
      <title>{head.title}</title>
      {head.meta.map((item, index) => (
        <meta name={item.name} content={item.content} key={`META${index}`} />
      ))}
      {children && children}
    </Head>
  );
}
