import React from 'react';
import Head from 'next/head';

const UserHead: React.FC = ({ head, children, theme }: any) => {
  return (
    <Head>
      <title>{head.title}</title>
      {head.meta.map((item: any, index: number) => (
        <meta name={item.name} content={item.content} key={`META${index}`} />
      ))}
      <meta name='theme-color' content={`${theme.metaThemeColor || `transparent`}`}></meta>
      {children && children}
    </Head>
  );
};
export default UserHead