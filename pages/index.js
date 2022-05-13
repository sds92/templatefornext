import React from 'react';
import { Header, FullPage, Footer, Head, YM } from '../components/complicated';
import { motion } from 'framer-motion';
import { animations } from '../styles/animations';
import { transform } from '../utils/transform';
import fs from 'fs';

export default function Home(props) {
  const { app, theme } = props;
  const [w, setW] = React.useState(undefined);

  React.useEffect(() => {
    setW(window.innerWidth);
    window.addEventListener(
      'resize',
      () => {
        setW(window.innerWidth);
      },
      []
    );
  }, []);

  const newProps = {
    menu: [
      ['Главная', '#Main'],
      ['Цены', '#Catalog'],
      ['Преимущества', '#Advantages'],
      ['Применение', '#Gallery'],
      ['Контакты', '#Contacts'],
    ],
    lgView: w >= 900,
    ...props,
  };

  return (
    <>
      <Head head={app.content.head} theme={theme}></Head>
      <Header {...newProps} />
      <motion.div
        className={``}
        initial='initial'
        animate='animate'
        exit='exit'
        variants={animations.opacity.variants}
        transition={animations.opacity.transition}
      >
        <FullPage {...newProps} />
      </motion.div>
      <Footer theme={theme} app={app} />
      {app.api.ym && <YM ymNum={app.api.ym} />}
    </>
  );
}

export async function getStaticProps() {
  const resProducts = await fetch(`https://xn--j1ano.com/uploads/staticsites/pilomateriali.site.json`)
    .then((res) => res.json())
    .catch((err) => {
      return null;
    });

  let app = JSON.parse(fs.readFileSync('pilomateriali/app.ru.json', 'utf8'));
  const datafromDB = transform(resProducts.filter((item) => item.visible));
  // let pages = JSON.parse(fs.readFileSync('pilomateriali/pages.ru.json', 'utf8'));
  console.log(app);

  return {
    revalidate: 10,
    props: {
      app,
      datafromDB,
    },
  };
}
