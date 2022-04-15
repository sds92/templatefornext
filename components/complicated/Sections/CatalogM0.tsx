import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { PromoBlock } from './components';
import { animations } from '../../../styles/animations';
import ProductCardSelector from './productCards';

type CatalogProps = {
  theme: ITheme;
  data: [Section, IApp['contacts'], IProducts];
  w: number;
};

const CatalogM0: React.FC<CatalogProps> = (props: CatalogProps) => {
  const { theme, w, data } = props;
  const [content, contacts, products] = data;

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <section
      ref={ref}
      id={content.id}
      style={{ minHeight: `${w >= 900 ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)'}` }}
      className={`w-full flex flex-col user-main-fs relative mb-10`}
    >
      <motion.div
        className={`font-bold text-3xl text-${theme.text.catalog.color.main}`}
        initial='initial'
        animate={inView && 'animate'}
        exit='exit'
        variants={animations.slideUp.variants}
        transition={animations.slideUp.transition}
      >
        <Text
          className={`zero:text-xl sm:text-5xl my-4 text-center font-bold text-${theme.text.contacts.color.main}`}
        >
          {content.title}
        </Text>
      </motion.div>
      {content.subTitle && (
        <Text
          className={`zero:text-xl sm:text-5xl my-4 text-center font-bold text-${theme.text.contacts.color.main}`}
        >
          {content.subTitle}
        </Text>
      )}
      <div className={`flex flex-wrap justify-center max-w-full mx-auto`}>
        {products.map((product, i) => {
          const ProductCard = ProductCardSelector[content.productModel];
          return <ProductCard key={`product${i}`} index={i} product={product} theme={theme} />;
        })}
      </div>
    </section>
  );
};

export default CatalogM0;
