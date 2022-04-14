import React from 'react';
import Head from 'next/head';

type UserHeadProps = {
  head?: IHeadMeta;
  children?: JSX.Element[] | JSX.Element;
  theme?: ITheme;
};

const UserHead: React.FC<UserHeadProps> = (props) => {
  const { head, children, theme } = props;
  return (
    <Head>
      <title>{head ? head.title : ''}</title>
      {head && head.meta.map((item: any, index: number) => (
        <meta name={item.name} content={item.content} key={`META${index}`} />
      ))}
      <meta name='theme-color' content={`${theme ? theme.metaThemeColor : `transparent`}`}></meta>
      {children && children}
    </Head>
  );
};

export default UserHead;
