import React from 'react';
import { Icons } from '..';
export default function Footer() {
  return (
    <>
      <div className={`h-96 cursor-default`}>
        <iframe
          src='https://yandex.ru/map-widget/v1/-/CCUYiXRD-B'
          width='100%'
          height='100%'
          frameBorder='1'
          allowFullScreen='true'
        ></iframe>
      </div>
      <footer className={`bg-belplit24`}>
        <div className={`flex flex-col md:flex-row justify-between items-center h-full`}>
          <div className={`ml-0 sm:ml-10 md:ml-36 my-4`}>
            <a href='index.html'>
             <Icons.Belplit24 extraClasses={`w-10 h-10 `}/>
            </a>
          </div>

          <div className={`my-4 flex items-center gap-6 text-slate-100 cursor-default mr-2`}>
            <Icons.Roboweb extraClasses={`w-10 h-10`} />
            <p>
              2021. Сайт создан с помощью <a href='https://roboweb.site/'>RoboWeb</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
