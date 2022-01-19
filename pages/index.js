import { Header, Section } from '../components/complicated';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { animations } from '../styles/animations';

import React from 'react';

export default function Home({ lgView, app, menu, input }) {
  const router = useRouter();
  return (
    <body>
      <>
        <Header lgView={lgView} menu={menu} app={app} />
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
            />
          ))}
        </motion.div>
      </>
    </body>
  );
}
