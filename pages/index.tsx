import React from 'react';
import { Layout } from '../components/complicated';
import { motion } from 'framer-motion';
import { animations } from '../styles/animations';
import * as utils from '../utils/transform';
import fs from 'fs';
import Sections from 'components/complicated/Sections';

type HomeProps = {
  products: [IProduct, IFilter[]];
  app: IApp;
  pages: any;
  theme: ITheme;
  filters: any;
};

const Home = (props: HomeProps) => {
  const { pages, products, theme, app, filters } = props;
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
        className={`cursor-default relative font-mont`}
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
                    content: section,
                    contacts: app.contacts,
                    products: products,
                    filters,
                    app,
                  }}
                  w={w}
                  h={h}
                  key={`section${i}`}
                  app={app}
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
export async function getStaticProps({ ...props }) {
  let app = JSON.parse(fs.readFileSync('fanerarostov/app.ru.json', 'utf8'));
  let products = [] as any;
  try {
    // products = JSON.parse(fs.readFileSync('data/products.ru.json', 'utf8'));

    products = await fetch(`https://xn--j1ano.com/uploads/staticsites/fanera.site.json`)
      .then((res) => res.json())
      .then((res) => {
        return utils.transform(res);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    products = JSON.parse(fs.readFileSync('data/products.ru.json', 'utf8'));
  }
  let filters = utils.makeFilters(products)
  let pages = JSON.parse(fs.readFileSync('data/pages.ru.json', 'utf8'));
  let theme = JSON.parse(fs.readFileSync('data/theme.json', 'utf8'));
  return {
    props: {
      filters: filters,
      products: products,
      app: app,
      pages: pages,
      theme: theme,
    },
    revalidate: 5,
  };
}
