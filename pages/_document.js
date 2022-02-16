import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import app from '../data/app.json';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        {/* <script
          // id='ymetr'
          // strategy='afterInteractive'
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
        /> */}
      </Html>
    );
  }
}

export default MyDocument;
