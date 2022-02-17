import React from 'react';
import Head from 'next/head';

export default function HeadComponent({ head, children, ...props }) {
  const ymNum = props.ym;
  return (
    <Head>
      <title>{head.title}</title>
      {head.meta.map((item, index) => (
        <meta name={item.name} content={item.content} key={`META${index}`} />
      ))}
      {/* <script
        type='text/javascript'
        dangerouslySetInnerHTML={{
          __html: `
             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
             m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
             (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");
          
             ym(${ymNum}, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true,
                  trackHash:true
             });
  `,
        }}
      ></script> */}
      {/* <YMInitializer accounts={[ymNum]} options={{webvisor: true}}/> */}
      {children && children}
    </Head>
  );
}
