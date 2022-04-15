import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { PromoBlock } from './components';
import { animations } from '../../../styles/animations';

const CatalogM0 = (props: { theme: ITheme; data: [Section, IApp['contacts']]; w: number }) => {
  const { theme, w, data } = props;
  const [content, contacts] = data;
  return (
    <section
      id={content.id}
      style={{ minHeight: `${w >= 900 ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)'}` }}
      className={`overflow-hidden w-full flex flex-col user-main-fs relative`}
    >
      Catalog
    </section>
  );
};

export default CatalogM0;
