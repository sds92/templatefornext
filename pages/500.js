import React from 'react'
import { Header } from '../components/complicated';

export default function Custom500({ lgView, menu, app, theme }) {
  return (
    <>
      <Header lgView={lgView} menu={menu} app={app} theme={theme} />
      <div>Page not found</div>
    </>
  );
}
