import React from 'react';
// import dynamic from 'next/dynamic';
import Map from './Map';
import { Icons } from '..';

// const Map = React.lazy(() => import('./Map'));

export default function Footer(props) {
  const { theme, data } = props;
  const Icon = Icons[props?.data?.logo || 'Belplit24'];
  return (
    <>
      <div className={`h-96 cursor-default overflow-hidden flex`}>
        {/* <React.Suspense fallback={<div>Загрузка...</div>}> */}
        {/* <div className={`h-96 w-full`}> */}
          <Map contacts={data.contacts} />
        {/* </div> */}
        {/* </React.Suspense> */}
      </div>
      <footer className={`bg-${theme.bg.footer} overflow-hidden`}>
        <div className={`flex flex-col md:flex-row justify-between items-center h-full`}>
          <div className={`ml-0 sm:ml-10 md:ml-36 my-4`}>
            <a href='index.html'>
              <Icon
                fill={`${theme.logo}`}
                extraClasses={`${props?.data?.logo === 'WoodEco' ? 'w-16 h-16' : 'w-10 h-10'}`}
              />
            </a>
          </div>

          <div className={`my-4 flex items-center gap-6 text-${theme.text.footer} cursor-default mr-2`}>
            <Icons.Roboweb extraClasses={`w-10 h-10`} fill={`${theme.logoRoboWeb}`} />
            <p>
              © 2022. Сайт создан с помощью{' '}
              <a className={`font-bold`} href='https://roboweb.team'>
                RoboWeb.Team
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
