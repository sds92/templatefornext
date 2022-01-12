import { FeedBack, Icons, Catalog, Header, Section, Deviders } from '../components/complicated';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { useRouter } from 'next/router';
import app from '../data/app.json';
import { animations } from '../styles/animations';

import * as Scroll from 'react-scroll';
import React from 'react';

function Home({ lgView }) {
  const router = useRouter();
  return (
    <body>
      <>
        <Header lgView={lgView} />
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
              <Section className={lgView ? `mt-20` : `mt-16`} id={'Main'} />
              <Section className={'pt-20 cursor-default'} id={'Catalog'} lgView={lgView} />
              <Section className={'cursor-default'} id={'About'} />
              <Deviders />
              <Section className={'cursor-default'} id={'Advantages'} />
              <Section className={'cursor-default'} id={'Gallery'} />
              <Section className={'cursor-default'} id={'Contacts'} app={app} />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </>
    </body>
  );
}

export default Scroll.ScrollElement(Home);
