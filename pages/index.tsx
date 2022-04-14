import React from 'react';
import { useRouter } from 'next/router';
import { withIronSessionSsr } from 'iron-session/next';
import { Header, FullPage, Footer, UserHead, Layout } from '../components/complicated';
import { motion } from 'framer-motion';
import { sessionOptions } from 'lib/session';
import { animations } from '../styles/animations';
import { transform } from '../utils/transform';
import fs from 'fs';

const Home: React.FC = (props: any) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [w, setW] = React.useState<number | undefined>(undefined);
  const router = useRouter();

  React.useEffect(() => {
    setW(window.innerWidth);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    window.addEventListener('resize', () => {
      setW(window.innerWidth);
    });
  }, []);

  const newProps = {
    w: w,
    lgView: typeof w === 'number' ? w >= 900 : true,
    ...props,
  };
  return (
    w && <motion.div
      className={``}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={animations.opacity.variants}
      transition={animations.opacity.transition}
    >
      <Layout {...newProps} />
    </motion.div>
  );
};

export default Home;

export async function getStaticProps({ params, ...props }) {
  let app = JSON.parse(fs.readFileSync('data/app.ru.json', 'utf8'));
  let products = JSON.parse(fs.readFileSync('data/products.ru.json', 'utf8'));
  let pages = JSON.parse(fs.readFileSync('data/pages.ru.json', 'utf8'));
  let theme = JSON.parse(fs.readFileSync('data/theme.json', 'utf8'));
  return {
    props: {
      products: products,
      app: app,
      pages: pages,
      theme: theme,
    },
    revalidate: 5,
  };
}
