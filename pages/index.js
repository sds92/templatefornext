import React from 'react';
import { useRouter } from 'next/router';
import { Header, Section, Footer } from '../components/complicated';
import { motion } from 'framer-motion';
import { animations } from '../styles/animations';
import { plitaosb3ru } from '../utils/functions';

export default function Home({ w, lgView, app, menu, input, theme, products }) {
  const router = useRouter();
  return (
    <body>
      <>
        <Header lgView={lgView} menu={menu} app={app} theme={theme} />
        <div className='h-16'></div>
        {/* <FullPage/> */}
        <motion.div
          key={router.route.concat(animations.opacity)}
          className='page-wrap'
          initial='initial'
          animate='animate'
          exit='exit'
          variants={animations.opacity.variants}
          transition={animations.opacity.transition}
        >
          {menu.map((item, index) => (
            <Section
              key={`SECTION${index}`}
              className={`cursor-default`}
              id={item[1].replaceAll('#', '')}
              app={app}
              lgView={lgView}
              content={input.content[item[1].replaceAll('#', '').toLowerCase()]}
              theme={theme}
              products={products}
              w={w}
            />
          ))}
        </motion.div>
        <Footer app={app} />
      </>
    </body>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://xn--j1ano.com/uploads/staticsites/osbplita.by.json`).then((res) =>
    res.json()
  );
  const products = plitaosb3ru(res);
  return {
    props: {
      products,
    },
  };
}
