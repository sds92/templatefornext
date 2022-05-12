import React from 'react';
import fs from 'fs';
import Link from 'next/link';
import { Logos } from '../components/complicated';

export default function Custom404(props: { app: IApp }) {
  const Logo = Logos[props.app?.logo as string] || null;
  return (
    <div className={`w-screen h-screen flex flex-col justify-center items-center`}>
      <Link href='/' passHref>
        <Logo />
      </Link>
      <div className={`font-light text-zinc-800`}>Страница не найдена</div>
      <div className={`font-light text-zinc-800`}>Page not found</div>
    </div>
  );
}

export async function getStaticProps({ ...props }) {
  let app = JSON.parse(fs.readFileSync('data/app.ru.json', 'utf8'));

  return {
    props: {
      app: app,
    },
    revalidate: 5,
  };
}
