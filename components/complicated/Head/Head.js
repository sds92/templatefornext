import React from 'react';
import Head from 'next/head';

export default function HeadComponent({ head, children }) {
  return (
    <Head>
      <title>{head.title}</title>
      {head.meta.map((item, index) => (
        <meta name={item.name} content={item.content} key={`META${index}`} />
      ))}
      <link rel='shortcut icon' href='/images/belplitGreen.png' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      <link
        href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap'
        rel='stylesheet'
      ></link>
      {children && children}
      <script
            dangerouslySetInnerHTML={{
              __html: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");
        
        ym(${app[2].api.ym}, "init", {
             clickmap:true,
             trackLinks:true,
             accurateTrackBounce:true,
             webvisor:true,
             trackHash:true
        });
`,
            }}
          />
    </Head>
  );
}
