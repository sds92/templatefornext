import React from 'react';
import { Header, FullPage, Footer } from '../components/complicated';
import { motion } from 'framer-motion';
import { animations } from '../styles/animations';
import { transform } from '../utils/transform';

export default function Home(props) {
  const newProps = props;
  if (props.resContacts) {
    newProps.data.contacts.emails = JSON.parse(props.resContacts.email);
    JSON.parse(props.resContacts.addresses).forEach((item, i) => {
      newProps.data.contacts.addresses[i] = {
        iframe: 'https://api-maps.yandex.ru/frame/v1/-/CCU5v6Wp8B',
        title: 'Офис',
        value: item,
      };
    });
    newProps.data.contacts.phones = JSON.parse(props.resContacts.phones);
    if (props.resContacts.whatsapp) {
      newProps.data.contacts.socials.push([
        'Whatsapp',
        `https://wa.me/${JSON.parse(props.resContacts.whatsapp)}?text=Здравствуйте...`,
      ]);
    }
    if (props.resContacts.telegram) {
      newProps.data.contacts.socials.push([
        'Telegram',
        `https://t.me/${JSON.parse(props.resContacts.telegram)}`,
      ]);
    }
  }
  if (props.resMainBanner) {
    newProps.data.content.main.title = props.resMainBanner.title
    ? [`<div class="text-6xl">${props.resMainBanner.title}</div>`]
    : newProps.data.content.main.title;
    newProps.data.content.main.subTitle = props.resMainBanner.subTitle
    ? props.resMainBanner.subTitle
    : newProps.data.content.main.subTitle;
    newProps.data.content.main.price = props.resMainBanner.price
    ? props.resMainBanner.price
    : newProps.data.content.main.price;
    newProps.data.content.main.text = props.resMainBanner.text
      ? props.resMainBanner.text
      : newProps.data.content.main.text;
  }
  return (
    <>
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
      <Footer {...newProps} />
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
