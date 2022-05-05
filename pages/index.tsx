import React from 'react';
import { useRouter } from 'next/router';
import { withIronSessionSsr } from 'iron-session/next';
import { Layout } from '../components/complicated';
import { motion } from 'framer-motion';
import { sessionOptions } from 'lib/session';
import { animations } from '../styles/animations';
import { transform } from '../utils/transform';
import fs from 'fs';
import Sections from 'components/complicated/Sections';

type HomeProps = {
  products: IProducts;
  app: IApp;
  pages: any;
  theme: ITheme;
};

const Home = (props: HomeProps) => {
  const { pages, products, theme, app } = props;
  const [w, setW] = React.useState<number | undefined>(undefined);
  const [h, setH] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    setW(window.innerWidth);
    window.addEventListener('resize', () => {
      setW(window.innerWidth);
      setH(window.innerHeight);
    });
  }, []);

  return (
    w && (
      <motion.div
        className={`cursor-default`}
        initial='initial'
        animate='animate'
        exit='exit'
        variants={animations.opacity.variants}
        transition={animations.opacity.transition}
      >
        <Layout w={w} theme={theme} app={app} pages={pages}>
          {app.content.template.map((section: Section, i: number) => {
            const Section = Sections[section.model] || null;
            return (
              Section && (
                <Section
                  theme={theme}
                  data={{
                    section: section,
                    contacts: app.contacts,
                    products: section.model.toLocaleLowerCase().includes('catalog') && products || [],
                    app: app
                  }}
                  w={w}
                  h={h}
                  key={`section${i}`}
                />
              )
            );
          })}
        </Layout>
      </motion.div>
    )
  );
};

export default Home;
// @ts-ignore
export async function getStaticProps({ params, ...props }) {
  let app = JSON.parse(fs.readFileSync('data/app.ru.json', 'utf8'));
// @ts-ignore
  let products = [];
  try {
    // products = await fetch(`https://xn--j1ano.com/uploads/staticsites/shinglas-rus.ru.json`).then((res) =>
    //   res.json()
    // );
// @ts-ignore

    transform(products);
  } catch (err) {
    products = JSON.parse(fs.readFileSync('data/products.ru.json', 'utf8'));
  }
  // console.log("🚀 ~ file: index.tsx ~ line 80 ~ getStaticProps ~ products", products)
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
