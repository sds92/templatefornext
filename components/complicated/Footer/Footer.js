import React from 'react';
import Map from './Map';
import { useInView } from 'react-intersection-observer';

import { Icons } from '..';

export default function Footer({ app }) {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <footer ref={ref}>
      <div className={`h-96 cursor-default`}>{inView && <Map app={app} />}</div>
      <div className={`bg-belplit24`}>
        <div className={`flex flex-col md:flex-row justify-between items-center h-full`}>
          <div className={`ml-0 sm:ml-10 md:ml-36 my-4`}>
            <a href='#Main'>
              <Icons.Belplit24 extraClasses={`w-10 h-10 `} />
            </a>
          </div>

          <div className={`my-4 flex items-center gap-6 text-slate-100 cursor-default mr-2`}>
            <a className={`font-bold`} href='https://roboweb.team' target='_blank' rel='noopener noreferrer'>
              <Icons.Roboweb extraClasses={`w-10 h-10`} />
            </a>
            <p>
              © 2022. Сайт создан с помощью{' '}
              <a
                className={`font-bold`}
                href='https://roboweb.team'
                target='_blank'
                rel='noopener noreferrer'
              >
                RoboWeb.Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
