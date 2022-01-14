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
      <footer className={`bg-belplit24 h-24`}>
        <div className={`flex justify-between items-center h-full`}>
          <div className={`ml-4 sm:ml-10 md:ml-36`}>
            <a href='index.html'>
             <Icons.Belplit24 extraClasses={`w-10 h-10 rotate-45`}/>
            </a>
          </div>

          <div className={`flex items-center gap-6 text-slate-100 cursor-default mr-2`}>
            <img width='50' height='50' src='images/roboweb-lite.png' alt='' />
            <p>
              2021. Сайт создан с помощью <a href='https://roboweb.site/'>RoboWeb</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
