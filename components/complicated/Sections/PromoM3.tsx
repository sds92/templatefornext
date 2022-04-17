import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../lib';
import { animations } from '../../../styles/animations';
import { CardsGrid } from './components';

type SectionProps = {
  theme: ITheme;
  data: [Section, IApp['contacts']];
  w: number;
};

const PromoM3: React.FC<SectionProps> = (props: SectionProps) => {
  const { theme, w, data } = props;
  const [content, contacts] = data;
  return (
    <section
      id={content.id}
      style={{ minHeight: `${w >= 900 ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)'}` }}
      className={`overflow-hidden w-full flex flex-col user-main-fs relative`}
    >
      <div className={`flex flex-col mx-auto`}>
        <motion.div
          className={`font-bold text-3xl text-${theme.text.sections[content.model].color.main}`}
          initial='initial'
          animate='animate'
          exit='exit'
          variants={animations.slideUp.variants}
          transition={animations.slideUp.transition}
        >
          <Text>{content.title}</Text>
        </motion.div>
      </div>
      <CardsGrid />
      <div className={`flex flex-wrap max-w-7xl mx-auto`}>
        <div className={`flex flex-wrap w-2/3`}>
          {/* {content.blocks?.map((block, i) => {
            return (
              <div key={`promoblock${i}`}>
                <Text>{block.title}</Text>
              </div>

              // <PromoBlock
              //   key={`promoblock${i}`}
              //   block={block}
              //   theme={theme}
              //   model={content.model}
              //   index={i}
              // />
            );
          })} */}
        </div>
      </div>
    </section>
  );
};

export default PromoM3;
