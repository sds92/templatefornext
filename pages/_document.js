import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='shortcut icon' href='/images/belplitGreen.png' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="true" />
          <link
            href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        <body>
        <script
            type='text/javascript'
            dangerouslySetInnerHTML={{
              __html: `
              (function(w, d, u, i, o, s, p) {
                if (d.getElementById(i)) { return; } w['MangoObject'] = o;
                w[o] = w[o]  function() { (w[o].q = w[o].q  []).push(arguments) }; w[o].u = u; w[o].t = 1 * new Date();
                s = d.createElement('script'); s.async = 1; s.id = i; s.src = u;
                p = d.getElementsByTagName('script')[0]; p.parentNode.insertBefore(s, p);
            }(window, document, '//widgets.mango-office.ru/widgets/mango.js', 'mango-js', 'mgo'));
            mgo({calltracking: {id: 27212, elements: [{"numberText":"74951202735"}], domain: 'belplit24.ru'}});
  `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
