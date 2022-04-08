import React from 'react';
import { useRouter } from 'next/router';
import { withIronSessionSsr } from 'iron-session/next';
import { Header, FullPage, Footer, UserHead, Layout } from '../components/complicated';
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
    <motion.div
      className={``}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={animations.opacity.variants}
      transition={animations.opacity.transition}
    >
      <Layout {...props}/>
    </motion.div>
  );
};

export default Home;

export const getServerSideProps = withIronSessionSsr(async function ({ req, res }) {
  const user = req.session.user;
  //

  if (user === undefined) {
    return {
      props: {
        user: { isLoggedIn: false, pass: '' },
      },
    };
  }

  return {
    props: { user: req.session.user },
  };
}, sessionOptions);