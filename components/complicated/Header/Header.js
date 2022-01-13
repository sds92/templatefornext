import React from 'react';
import { SizeMe } from 'react-sizeme';
import SM from './SM';
import LG from './LG';

export default function Header({ lgView, menu }) {
  return (
    <header className={`z-50 fixed w-full top-0`}>{lgView ? <LG menu={menu} /> : <SM menu={menu} />}</header>
  );
}
