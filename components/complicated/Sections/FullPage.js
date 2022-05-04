import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Section } from '../';
import { animations } from '../../../styles/animations';

import pages from '../../../data/pages.json';
import app from '../../../data/app.json';
import theme from '../../../utils/theme';

export default function FullPage({ ...props }) {
  const [loading, setLoading] = React.useState(true);
  const [w, setW] = React.useState(undefined);
  React.useEffect(() => {
    setW(window.innerWidth);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    window.addEventListener(
      'resize',
      () => {
        setW(window.innerWidth);
      },
      []
    );
  }, []);
  const router = useRouter();
  const newProps = {
    menu: [
      ['Главная', '#Main'],
      ['Цены', '#Catalog'],
      ['Преимущества', '#Advantages'],
      ['Применение', '#Gallery'],
      ['Контакты', '#Contacts'],
    ],
    lgView: w >= 900,
    app: app,
    input: pages,
    theme: theme('black'),
    ...props,
  };
  return (
    <div>
      <motion.div
        key={router.route.concat(animations.opacity)}
        className='page-wrap'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={animations.opacity.variants}
        transition={animations.opacity.transition}
      >
        {newProps.menu.map((item, index) => (
          <Section
            key={`SECTION${index}`}
            className={`cursor-default`}
            id={item[1].replaceAll('#', '')}
            app={newProps.app}
            lgView={w >= 900}
            content={newProps.input.content[item[1].replaceAll('#', '').toLowerCase()]}
            theme={theme}
            products={newProps.products}
          />
        ))}
      </motion.div>
    </div>
  );
}
