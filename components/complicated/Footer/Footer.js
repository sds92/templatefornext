import React from 'react';

export default function Footer() {
  return (
    <>
      <div className={`h-96 cursor-default`}>
        {/* <iframe
          src='https://yandex.ru/map-widget/v1/-/CCUYiXRD-B'
          width='100%'
          height='100%'
          frameBorder='1'
          allowFullScreen='true'
          // style='position:relative;'
        ></iframe> */}
      </div>
      <footer className={`bg-belplit24 h-36`}>
        <div className={`flex justify-evenly items-center h-full`}>
          <div className={``}>
            <a href='index.html'>
              <img src='images/logo.png' alt width='100' height='100' srcSet='images/logo.png 2x' />
            </a>
          </div>

          <div className={`flex items-center gap-6 text-slate-100 cursor-default`}>
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
