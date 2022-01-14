import { Header, Section } from '../components/complicated';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { useRouter } from 'next/router';
import { animations } from '../styles/animations';

import React from 'react';

export default function Home({ lgView, app, menu, input }) {
  const router = useRouter();
  return (
    <body>
      <>
        <Header lgView={lgView} menu={menu} app={app} />
        <LazyMotion features={domAnimation}>
          <AnimatePresence exitBeforeEnter>
            <m.div
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
                  // name={item[1].replaceAll('#', '')}
                  key={`SECTION${index}`}
                  className={`cursor-default`}
                  id={item[1].replaceAll('#', '')}
                  app={app}
                  lgView={lgView}
                  content={input.content[item[1].replaceAll('#', '').toLowerCase()]}
                />
              ))}
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </>
    </body>
  );
}
