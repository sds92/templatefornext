import React from 'react';
import { useInView } from 'react-intersection-observer';
// @ts-ignore
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { PromoBlock } from './components';
import { animations } from '../../../styles/animations';
import ProductCardSelector from './productCards';

type CatalogProps = {
  theme: ITheme;
  data: {section: Section, app: IApp['contacts'], products: IProducts[]};
  w: number;
};

const CatalogM0: React.FC<CatalogProps> = (props: CatalogProps) => {
  const { theme, w, data } = props;
  const {section, products} = data;

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <section
      ref={ref}
      id={section.id}
      style={{ minHeight: `${w >= 900 ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)'}` }}
      className={`w-full flex flex-col relative pb-10 bg-${theme.bg.catalog.color.s2}`}
    >
      <motion.div
        className={`uppercase zero:text-4xl sm:text-5xl md:text-7xl text-center font-black text-${theme.text.catalog.color.main}`}
        initial='initial'
        animate={inView && 'animate'}
        exit='exit'
        variants={animations.slideUp.variants}
        transition={animations.slideUp.transition}
      >
        <Text
          className={`py-4`}
        >
          {section.title}
        </Text>
      </motion.div>
      {section.subTitle && (
        <Text
          className={`zero:text-xl sm:text-5xl my-4 text-center font-bold text-${theme.text.catalog.color.main}`}
        >
          {section.subTitle}
        </Text>
      )}
      <div className={`flex flex-wrap justify-center max-w-full mx-auto`}>
        {products.map((product, i) => {
          const ProductCard = ProductCardSelector[section.productModel];
          return <ProductCard key={`product${i}`} index={i} product={product} theme={theme} />;
        })}
      </div>
    </section>
  );
};

export default CatalogM0;
