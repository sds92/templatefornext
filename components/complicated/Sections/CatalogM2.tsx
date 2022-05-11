import React from 'react';
import { Text } from '../../lib';
import { SectionWrapper, SectionTitle } from './components';
import { Modal, ModalItems, FeedBackForm, FeedBack, Icons } from '../';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { animations } from '../../../styles/animations';

type CatalogProps = {
  theme: ITheme;
  data: { content: Section; contacts: IApp['contacts']; products: IProduct[]; filters: any };
  w: number;
  app: IApp;
};
type IsOpen = {} | null;

const CatalogM2 = (props: CatalogProps) => {
  const { theme, w, data } = props;
  const { content, contacts, products, filters } = data;
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [modalData, setModalData] = React.useState({
    status: 'orderonopen',
    header: ['Отправить запрос'],
  });

  const [open, setOpen] = React.useState<IsOpen>({});
  const [curCategory, setCurCategory] = React.useState<number>(0);
  const [hover, setHover] = React.useState<IsOpen>({});

  const __filters = [
    ['ФК (1525x1525мм)', 'ФК'],
    ['ФСФ (1220x2440мм)', 'ФСФ'],
    ['ЛФСФ (1220x2440мм)', 'Ламинированная'],
  ];
  function openModal(msg: any) {
    const _msg = msg ? msg : '';
    // @ts-ignore
    setModalData({ status: 'orderonopen', header: ['Отправить запрос'], msg: [`${_msg}`] });
    setModalOpen(true);
  }

  const [beautyShow, setBeautyShow] = React.useState('opacity-0');

  React.useEffect(() => {
    if (modalData.status === 'success') {
      setTimeout(() => {
        setModalOpen(false);
      }, 3000);
    }
    return;
  }, [modalData]);

  React.useEffect(() => {
    if (typeof open === 'number') {
      setTimeout(() => {
        window.addEventListener(
          'click',
          () => {
            setOpen(null);
          },
          { once: true }
        );
      }, 0);
    }
  }, [open]);

  return (
    <SectionWrapper id={content.id} theme={theme} w={w} minH>
      <SectionTitle title={content.title as string} theme={theme} />
      <div className={``}>
        {content.subTitle && (
          <Text
            className={`zero:text-base sm:text-2xl py-4 text-center pl-10 antialiased font-light text-${theme.text.catalog.color.s2}`}
          >
            {content.subTitle}
          </Text>
        )}

        <div className={`flex zero:flex-col md:flex-row relative grow pb-10 z-20`}>
          <div className={`flex zero:flex-col md:flex-row relative z-40 mx-auto`}>
            {__filters.map((filter, i) => {
              return (
                <div className={`relative my-1`} key={`filter${i}`}>
                  <div
                    className={`flex items-center mx-2 px-4 py-2 rounded-sm font-bold shadow-md active:scale-105 whitespace-nowrap transition-all hover:bg-${theme.bg.catalog.color.hover} bg-${theme.bg.catalog.color.s1} text-${theme.text.catalog.color.main} cursor-pointer`}
                    onClick={() => {
                      setTimeout(() => {
                        open === i ? setOpen(null) : setOpen(i);
                      }, 0);
                    }}
                  >
                    <Icons.ChevronDown
                      className={`${open === i ? ` rotate-0` : ` -rotate-90`} transition-all`}
                    />
                    &nbsp;
                    <Text className={``}>{filter[0]}</Text>
                  </div>
                  {open === i && (
                    <div className={`absolute z-40 w-fit h-fit bg-white rounded-sm shadow-md p-4 mt-1`}>
                      {filters.map((subfilter: any, ii: number) => {
                        if (subfilter.title.includes(filter[1]))
                          return (
                            <div
                              key={`subfilter${ii}`}
                              className={`z-40 whitespace-nowrap text-sm cursor-pointer hover:text-${theme.text.catalog.color.s1} hover:scale-105 transition-all py-0.5`}
                              onClick={() => {
                                setCurCategory(ii);
                              }}
                            >
                              {subfilter.title}
                            </div>
                          );
                        return null;
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <div className={`flex relative z-10 pb-20 pt-10 flex-wrap items-center justify-center`}>
          {products.map((product, i) => {
            return (
              filters[curCategory].ids.includes(product.id) && (
                <motion.div
                  key={`product${i}`}
                  className={`overflow-hidden mx-4 zero:my-4 md:my-8 relative rounded-sm transition-all ${
                    hover === i ? `shadow-2xl -translate-y-2 duration-500` : `shadow-sm`
                  } cursor-pointer`}
                  onMouseEnter={() => {
                    setHover(i);
                  }}
                  onMouseLeave={() => {
                    setHover(null);
                  }}
                  initial='initial'
                  animate={'animate'}
                  exit='exit'
                  variants={animations.slideUp.variants}
                  transition={animations.slideUp.transition}
                >
                  <div className={`relative`}>
                    <img
                      className={`${hover === i && `scale-105`} z-10 duration-500 transition-all`}
                      src={
                        filters[curCategory].title.includes('Ламинированная')
                          ? '/images/fanera/l.webp'
                          : '/images/fanera/f.webp'
                      }
                      alt=''
                      width='370'
                      height='256'
                    ></img>
                    <div
                      className={`absolute inset-0 w-full h-full z-20 bg-bp_black ${
                        hover === i ? `bg-opacity-20` : `bg-opacity-0`
                      }`}
                    ></div>
                    <div
                      className={`absolute py-2 bottom-4 w-full z-30 text-lg shadow-lg px-4 ${
                        hover === i
                          ? `bg-opacity-80 text-${theme.text.catalog.color.main} bg-bp_red_2`
                          : `bg-neutral-300 bg-opacity-60`
                      }`}
                    >
                      {product.info.title} <br />
                      <span
                        className={`font-black text-3xl pl-2 ${
                          hover === i
                            ? `text-${theme.text.catalog.color.s2}`
                            : `text-${theme.text.catalog.color.s1}`
                        }`}
                      >
                        {/* @ts-ignore */}
                        {product.options[0].prices[0].value}
                      </span>{' '}
                      {'руб. '}
                      {/* @ts-ignore */}
                      {product.options[0].priceFor}
                    </div>
                  </div>
                </motion.div>
              )
            );
          })}
        </div>
      </div>
      <Modal
        setOpen={modalOpen}
        setClose={() => setModalOpen(false)}
        // @ts-ignore
        header={
          <ModalItems.Header
            data={{ status: modalData.status, header: modalData.header, setClose: () => setModalOpen(false) }}
          />
        }
        // @ts-ignore
        body={
          // @ts-ignore
          <FeedBack
            // @ts-ignore
            onFulfilled={(a) => setModalData({ status: a, header: modalData.header })}
            // @ts-ignore
            body={modalData.msg}
            theme={theme}
          />
        }
      />
    </SectionWrapper>
  );
};

export default CatalogM2;
