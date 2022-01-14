import React from 'react';
import SM from './SM';
import LG from './LG';

export default function Header({ lgView, menu, app }) {
  return (
    <header className={`z-50 fixed w-full top-0`}>{lgView ? <LG menu={menu} app={app}/> : <SM menu={menu} app={app} />}</header>
  );
}
