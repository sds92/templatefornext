import React from 'react';
import { Header, FullPage, Footer } from '../components/complicated';
import { motion } from 'framer-motion';
import { animations } from '../styles/animations';
import { transform } from '../utils/transform';

export default function Home(props) {
  // console.log('🚀 ~ file: index.js ~ line 8 ~ Home ~ props', props.resContacts);
  // const newProps = props
  // newProps.data.contacts.emails = 
  // if (props.resContacts) {
  //   newProps.data.contacts = {...newProps.data.contacts, ...props.resContacts};
  // }
  // console.log("🚀 ~ file: index.js ~ line 14 ~ Home ~ newProps", newProps)
  return (
    <>
      <Header {...props} />
      <motion.div
        className={``}
        initial='initial'
        animate='animate'
        exit='exit'
        variants={animations.opacity.variants}
        transition={animations.opacity.transition}
      >
        <FullPage {...props} />
      </motion.div>
      <Footer {...props} />
    </>
  );
}

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
