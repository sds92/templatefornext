import React from 'react';
import { Text } from '../../lib';
import { SectionWrapper, SectionTitle } from './components';
import { Modal, ModalItems, FeedBackForm, FeedBack, Icons } from '../';

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

        <div className={`flex zero:flex-col md:flex-row relative grow py-10`}>
          <div className={`flex relative mx-auto`}>
            {__filters.map((filter, i) => {
              return (
                <div className={`relative`} key={`filter${i}`}>
                  <div
                    className={`flex items-center mx-2 px-4 py-2 rounded-sm font-bold shadow-md active:scale-105 whitespace-nowrap transition-all hover:bg-${theme.bg.catalog.color.hover} bg-${theme.bg.catalog.color.s1} text-${theme.text.catalog.color.main} cursor-pointer`}
                    onClick={() => {
                      setTimeout(() => {
                        setOpen(i);
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
                    <div className={`absolute w-fit h-fit bg-white rounded-sm shadow-md p-4 mt-1`}>
                      {filters.map((subfilter: any, ii: number) => {
                        if (subfilter.title.includes(filter[1]))
                          return (
                            <div
                              key={`subfilter${ii}`}
                              className={`whitespace-nowrap text-sm cursor-pointer hover:text-${theme.text.catalog.color.s1} hover:scale-105 transition-all py-0.5`}
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
        {products.map((product, i) => {
          return (
            filters[curCategory].ids.includes(product.info.id) && (
              <div key={`product${i}`} className={``}>
                <div>
                  <img></img>
                </div>
              </div>
            )
          );
        })}
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