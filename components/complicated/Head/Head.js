import React from 'react';
import Head from 'next/head';
import { YMInitializer } from 'react-yandex-metrika';

export default function HeadComponent({ head, children, ym }) {
  return (
    <Head>
      <title>{head.title}</title>
      {head.meta.map((item, index) => (
        <meta name={item.name} content={item.content} key={`META${index}`} />
      ))}
      <YMInitializer accounts={[ym]} options={{ webvisor: true }} version='2' />
      {children && children}
    </Head>
  );
}
