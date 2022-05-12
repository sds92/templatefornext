import React from 'react';
import fs from 'fs';
import Link from 'next/link';
import { Logos } from '../components/complicated';

export default function Custom500(props) {
  const Logo = Logos[app?.logo] || null;
  return (
    <div className={`w-screen h-screen flex flex-col justify-center items-center`}>
      <Link href='/' passHref>
        <Logo />
      </Link>
      <div className={`font-light text-zinc-800`}>Внутренняя ошибка сервера</div>
      <div className={`font-light text-zinc-800`}>Internal server error</div>
    </div>
  );
}

export async function getStaticProps() {
  let app = JSON.parse(fs.readFileSync('pilomateriali/app.ru.json', 'utf8'));

  return {
    props: {
      app,
    },
    revalidate: 5,
  };
}
