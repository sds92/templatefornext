import React from 'react';
import { Text } from '../../lib';
import { SectionWrapper, SectionTitle } from './components';
import { Modal, ModalItems, FeedBackForm, FeedBack } from '../';

type CatalogProps = {
  theme: ITheme;
  data: [Section, IApp['contacts'], [IProduct[], IFilter[]]];
  w: number;
  app: IApp;
};

const CatalogM1 = (props: CatalogProps) => {
  const { theme, w, data } = props;
  const [content, contacts, __products] = data;
  const [products, filters] = __products;
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({
    status: 'orderonopen',
    header: ['Отправить запрос'],
  });
  const [open, setOpen] = React.useState<boolean>(false);

  const [collection, setCollection] = React.useState<string>(
    // @ts-ignore
    filters.find((item) => item.key === 'structure')?.values[0][0]
  );
  const [selectedProduct, setSelectedProduct] = React.useState(
    products.find(
      (item) => item.options[0].collection === filters.find((item) => item.key === 'structure')?.values[0][0]
    )
  );
  const [selectedColor, setSelectedColor] = React.useState(
    products.find(
      (item) => item.options[0].collection === filters.find((item) => item.key === 'structure')?.values[0][0]
    )?.options[0].color
  );

  function openModal(msg: any) {
    const _msg = msg ? msg : '';
    // @ts-ignore
    setModalData({ status: 'orderonopen', header: ['Отправить запрос'], msg: [`${_msg}`] });
    setModalOpen(true);
  }

  React.useEffect(() => {
    if (modalData.status === 'success') {
      setTimeout(() => {
        setModalOpen(false);
      }, 3000);
    }
    return;
  }, [modalData]);

  return (
    <SectionWrapper id={content.id} theme={theme} w={w} minH>
      <SectionTitle title={content.title as string} theme={theme} />
      {content.subTitle && (
        <Text
          className={`zero:text-xl sm:text-5xl py-4 text-center font-bold text-${theme.text.catalog.color.main}`}
        >
          {content.subTitle}
        </Text>
      )}
      <div className={`flex relative grow bg-${theme.bg.catalog.color.s1} py-10`}>
        <div className={`pl-2 flex relative h-full zero:hidden md:block md:basis-1/6`}>
          {filters
            .find((item) => item.title === 'Количество слоев')
            ?.values.map((filter, i) => {
              return (
                <div key={`filter${i}`} className={`w-full`}>
                  <Text className={`font-mont text-2xl font-bold leading-7`}>
                    {filter === 'Однослойная' ? 'Гибкая черепица' : `${filter} черепица`}
                  </Text>
                  <div className={`w-full flex flex-col pl-2 py-2`}>
                    {filters
                      .find((item) => item.key === 'structure')
                      // @ts-ignore
                      ?.values[i].map((filter: string, i: number) => {
                        return (
                          <div
                            key={`filter${i}`}
                            onClick={() => {
                              setCollection(filter);
                              setSelectedColor(
                                products.find((item) => item.options[0].collection === filter)?.options[0]
                                  .color
                              );
                            }}
                            className={`uppercase ${
                              filter === collection ? 'font-bold text-bp_red_2' : ''
                            } hover:font-bold cursor-pointer mr-auto hover:scale-105 `}
                          >
                            {filter}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </div>

        <div className={`flex zero:w-full md:basis-5/6 flex-col`}>
          <div
            className={`zero:block md:hidden bg-bp_red_2 mx-auto px-4 py-2 rounded-md text-zinc-100 hover:scale-105 cursor-pointer transition-all my-2`}
            onClick={() => setOpen(!open)}
          >
            Выбрать коллекцию
          </div>
          {open && (
            <div className={`rounded-md absolute bg-white z-50 inset-x-0 p-4 shadow-xl mx-4`}>
              {filters
            .find((item) => item.title === 'Количество слоев')
            ?.values.map((filter, i) => {
              return (
                <div key={`filter${i}`} className={`w-full`}>
                  <Text className={`font-mont text-2xl font-bold leading-7`}>
                    {filter === 'Однослойная' ? 'Гибкая черепица' : `${filter} черепица`}
                  </Text>
                  <div className={`w-full flex flex-col pl-2 py-2`}>
                    {filters
                      .find((item) => item.key === 'structure')
                      // @ts-ignore
                      ?.values[i].map((filter: string, i: number) => {
                        return (
                          <div
                            key={`filter${i}`}
                            onClick={() => {
                              setCollection(filter);
                              setSelectedColor(
                                products.find((item) => item.options[0].collection === filter)?.options[0]
                                  .color
                              );
                              setOpen(false)
                            }}
                            className={`uppercase ${
                              filter === collection ? 'font-bold text-bp_red_2' : ''
                            } hover:font-bold cursor-pointer mr-auto hover:scale-105 `}
                          >
                            {filter}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}

            </div>
          )}
          <div className={`w-full text-3xl font-bold flex`}>
            <Text className={``}>Коллекция&nbsp; {collection}</Text>
          </div>

          <div className={`flex zero:flex-col md:flex-row`}>
            <div className={`zero:w-full md:w-7/12`}>
              <div className={`h-96 w-full border relative`}>
                <div className={`absolute inline h-full w-full transition-all duration-1000 overflow-hidden`}>
                  <img
                    style={{
                      // @ts-ignore
                      ['-webkit-filter']: `drop-shadow( 0px 3px 10px rgba(63, 63, 70, 0.5) )`,
                      filter: `drop-shadow( 0px 3px 10px rgba(63, 63, 70, 0.5) )`,
                    }}
                    title={
                      products
                        .filter((item) => item.options[0].collection === collection)
                        .find((item) => item.options[0].color === selectedColor)?.info.title
                    }
                    className={`h-auto min-w-full object-cover`}
                    src={`/images/shinglas.site/products/${
                      products
                        .filter((item) => item.options[0].collection === collection)
                        .find((item) => item.options[0].color === selectedColor)?.options[0].slices
                    }/${collection}/${selectedColor}.jpg`}
                  ></img>
                </div>
              </div>
              <div className={`w-full`}></div>
              <div className={`w-full flex flex-wrap mt-20`}>
                {/* COLORS */}
                {products
                  .filter((item) => item.options[0].collection === collection)
                  .map((product, i) => {
                    return (
                      <div
                        style={{
                          // @ts-ignore
                          ['-webkit-filter']: `drop-shadow( 0px 3px 10px rgba(63, 63, 70, 0.5) )`,
                          filter: `drop-shadow( 0px 3px 10px rgba(63, 63, 70, 0.5) )`,
                        }}
                        key={`product${i}`}
                        className={`w-24 h-24 mx-3 mb-6 border cursor-pointer hover:scale-105 transition-all `}
                        onClick={() => setSelectedColor(product.options[0].color)}
                      >
                        <img
                          src={`/images/shinglas.site/products/${product.options[0].slices}/${product.options[0].collection}/${product.options[0].color}sm.jpg`}
                          className={`min-h-full w-auto object-cover rounded-sm`}
                        />
                        {product.options[0].color}
                      </div>
                    );
                  })}
              </div>
              <div className={`flex mt-12 ml-6 items-end`}>
                {/* PRICE */}
                <Text className={`font-black text-3xl text-${theme.text.catalog.color.s2}`}>
                  {
                    // @ts-ignore
                    products
                      .filter((item) => item.options[0].collection === collection)
                      .find((item) => item.options[0].color === selectedColor)?.options[0].prices[0].value
                  }
                </Text>
                <span className={`text-xl ml-1 font-semibold`}>₽/м²</span>
                <div
                  className={`ml-4 shadow-2xl bg-bp_red_3 px-4 rounded-md cursor-pointer py-2 text-zinc-100 uppercase hover:scale-105 transition-all duration-75`}
                  onClick={() => {
                    openModal('Добрый день!');
                  }}
                >
                  Заказать
                </div>
              </div>
            </div>
            <div className={`zero:w-full md:w-5/12`}>
              {/* <div className={`w-max flex flex-col mr-auto ml-1 zero:hidden md:block`}>
                {products
                  .find((item) => item.options[0].collection === collection)
                  // @ts-ignore
                  ?.options[0].advantages.map((item, i) => {
                    if (i === 0) {
                      return (
                        <div
                          key={`tsfad${i}`}
                          className={`flex relative items-start justify-start w-16 my-1`}
                        >
                          <div
                            style={{
                              // @ts-ignore
                              ['-webkit-filter']: `drop-shadow( 0px 3px 10px rgba(63, 63, 70, 0.5) )`,
                              filter: `drop-shadow( 0px 3px 10px rgba(63, 63, 70, 0.5) )`,
                            }}
                            className={`w-full h-16 aspect-square flex items-center justify-center flex-wrap shadow-md bg-bp_red_3`}
                          >
                            <div className={`font-black text-4xl text-zinc-100`}>{item.split(' ')[0]}</div>
                            <div className={`font-black text-xl text-zinc-100`}>{item.split(' ')[1]}</div>
                          </div>
                          <Text
                            className={'ml-2 whitespace-nowrap text-sm text-bp_red_3 font-semibold text-left'}
                          >
                            Гарантия производителя
                          </Text>
                        </div>
                      );
                    }
                    let tooltip = '';
                    switch (item) {
                      case '3x':
                        {
                          tooltip = 'Трехслойная';
                        }
                        break;
                      case '2x':
                        {
                          tooltip = 'Двухслойная';
                        }
                        break;
                      case '1x':
                        {
                          tooltip = 'Однослойная';
                        }
                        break;
                      case 'reliability':
                        {
                          tooltip = 'Надежность';
                        }
                        break;
                      case 'loudness':
                        {
                          tooltip = 'Снижает уровень шума';
                        }
                        break;
                      case 'sbs2':
                        {
                          tooltip = 'Улучшеный кровельный битум';
                        }
                        break;
                      case 'snowProtection':
                        {
                          tooltip = 'Защита от схода снега';
                        }
                        break;
                      case 'infinity':
                        {
                          tooltip = 'Долговечность';
                        }
                        break;
                      case 'easeofuse':
                        {
                          tooltip = 'Простота монтажа';
                        }
                        break;
                      case 'sbs':
                        {
                          tooltip = 'Модифицированный битум';
                        }
                        break;
                      default:
                        break;
                    }
                    return (
                      <div key={`tsfad${i}`} className={`flex relative items-start justify-start w-16 my-1`}>
                        <img
                          style={{
                            // @ts-ignore
                            ['-webkit-filter']: `drop-shadow( 0px 3px 10px rgba(63, 63, 70, 0.5) )`,
                            filter: `drop-shadow( 0px 3px 10px rgba(63, 63, 70, 0.5) )`,
                          }}
                          alt=''
                          className={`w-full h-16 aspect-square flex items-center justify-center flex-wrap`}
                          src={`/images/shinglas.site/icons/${item}.webp`}
                        ></img>
                        <Text
                          className={'ml-2 whitespace-nowrap text-sm text-bp_red_3 font-semibold text-left'}
                        >
                          {tooltip}
                        </Text>
                      </div>
                    );
                  })}
              </div> */}
            </div>
          </div>
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

export default CatalogM1;
