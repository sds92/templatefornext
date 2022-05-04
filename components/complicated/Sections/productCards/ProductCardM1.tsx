import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Text } from '../../../lib';
import { animations } from '../../../../styles/animations';
import Icons from 'components/complicated/Svg/Icons';

type ProductCardProps = {
  product: IProduct;
  index: number;
  theme: ITheme;
};

const ProductCardM1 = (props: ProductCardProps) => {
  const { product, index, theme } = props;
  const { options } = product;
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  
  return (
    <motion.div
      ref={ref}
      className={`cursor-default border w-80 mx-2 my-4 p-2 pb-4 flex flex-col items-start justify-start rounded-md shadow-md bg-${theme.bg.catalog.color.s1} hover:scale-105 transition-all`}
      initial='initial'
      animate={inView && 'animate'}
      exit='exit'
      variants={animations.slideUp.variants}
      transition={animations.slideUp.transition}
    >
      <>
        <Text className={`text-2xl font-bold w-full text-left mb-2 border-b pb-2 px-2`}>
          {product.info?.title}
        </Text>
        <Text className={`text-sm font-light w-full text-left mb-4 px-2 `}>{product.info?.userTitle}</Text>
        <div className={'px-2 font-semibold'}>Размеры:</div>
        
        {options.map((option: IProductOption, i: number) => {
          return (
            <div key={`option${i}`} className={`px-2 flex justify-between items-stretch w-full`}>
              <div>
                {option.a}x{option.b}x{option.h}
              </div>

              <div className={`flex font-bold text-${theme.text.catalog.color.main}`}>
                <Icons.Ok />В наличии
              </div>
            </div>
          );
        })}
      </>
    </motion.div>
  );
};

export default ProductCardM1;
