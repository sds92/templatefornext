import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Sections from './components';
import { animations } from '../../../styles/animations';


export default function FullPage({ ...props }) {
  const router = useRouter();
  return (
    <div>
      <motion.div
        key={router.route.concat(animations.opacity)}
        className='page-wrap'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={animations.opacity.variants}
        transition={animations.opacity.transition}
      >
        <Sections.Main {...props}/>
        <Sections.CatalogAlt1 {...props}/>
        <Sections.About {...props}/>
        <Sections.Gallery {...props}/>
      </motion.div>
    </div>
  );
}
