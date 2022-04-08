import React from 'react';
import { Header, FullPage, Footer, UserHead } from '../components/complicated';
import { motion } from 'framer-motion';
import { animations } from '../styles/animations';
import { transform } from '../utils/transform';

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
    <React.Fragment>
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
      <Footer {...newProps} />
    </React.Fragment>
  );
};

export async function getStaticProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const resProducts = await fetch(
    `https://xn--j1ano.com/uploads/staticsites/${encodeURI(process.env.NEXT_PUBLIC_SITE_URL)}.json`
  )
    .then((res) => res.json())
    .catch((err) => {
      return null;
    });

  const resContacts = await fetch(
    `https://xn--j1ano.com/uploads/staticsites/contacts_${encodeURI(process.env.NEXT_PUBLIC_SITE_URL)}.json`
  )
    .then((res) => res.json())
    .catch((err) => {
      return null;
    });

  const resMainBanner = await fetch(
    `https://xn--j1ano.com/uploads/staticsites/mainBanner_${encodeURI(process.env.NEXT_PUBLIC_SITE_URL)}.json`
  )
    .then((res) => res.json())
    .catch((err) => {
      return null;
    });

  const datafromDB = transform(resProducts.filter((item) => item.visible));
  // By returning { props: { posts } }, the Blog component
  // will receive posts as a prop at build time
  return {
    props: {
      datafromDB,
      resContacts,
      resMainBanner,
    },
  };
}
