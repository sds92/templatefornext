import React from 'react';
import { Link } from 'react-scroll';
import Social from '../Social/Social';
import styles from './styles/LG.module.scss';
import { Logos, Icons, Modal, ModalItems, FeedBack } from '../';
import { PreHeader } from './components';
import { Text } from 'components/lib';

type LGProps = {
  theme: ITheme;
  app: IApp;
  inView: boolean;
  w: number;
};

const LG = (props: LGProps) => {
  const { theme, app, inView, w } = props;
  const menu = app.menu;
  // TODO: fix
  // @ts-ignore
  const Logo = Logos[app?.logo] || null;

  const isPreHeader = app.content.preHeader ? true : false;

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [modalData, setModalData] = React.useState({
    status: 'orderonopen',
    header: ['Отправить запрос'],
  });
  React.useEffect(() => {
    if (modalData.status === 'success') {
      setTimeout(() => {
        setModalOpen(false);
      }, 3000);
    }
    return;
  }, [modalData]);

  return (
    <>
      {isPreHeader && <PreHeader app={app} theme={theme} inView={inView} />}
      <nav
        className={`bg-${theme.bg.header.color.main} flex relative justify-evenly items-center h-14 border-y border-${theme.borders.header.color.main} shadow-md`}
      >
        <a href='#main' title={app?.url || ''}>
          {isPreHeader
            ? !inView &&
              Logo && (
                <Logo
                  fill={`${theme.logo}`}
                  className={`shadow-2xl`}
                  w={app.logoUserSizes?.w || 10}
                  h={app.logoUserSizes?.h || 10}
                />
              )
            : Logo && (
                <Logo
                  fill={`${theme.logo}`}
                  className={`shadow-2xl`}
                  w={app.logoUserSizes?.w || 10}
                  h={app.logoUserSizes?.h || 10}
                />
              )}
        </a>
        <div className={`flex flex-row`}>
          {menu.map((item: string[], index: number) => (
            <div
              style={{
                textShadow: `2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.1)`,
              }}
              key={`MENUITEM${index}`}
              className={` text-${theme.text.header.color.main} hover:text-${theme.text.header.color.hover} active:text-${theme.text.header.color.active} active:scale-105 transition-all duration-300`}
            >
              <Link
                activeClass={`text-${theme.text.header.color.hover}`}
                to={item[1].replace('#', '')}
                spy={true}
                smooth={true}
                offset={-56}
                duration={100}
                delay={0}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={100}
              >
                <a className={`px-4 text-xl font-normal whitespace-nowrap`} href={item[1]}>
                  {item[0].toUpperCase()}
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className={`flex`}></div>
      </nav>
      <div
        className={`static py-0.5 w-full flex gap-8 justify-center items-center shadow-md bg-${theme.bg.header.color.s1} border border-${theme.bg.header.color.s1}`}
      >
        <Text
          onClick={() => {
            setModalOpen(true);
          }}
          className={`border shadow-md border-white w-min px-2 py-0.5 hover:scale-105 transition-all text-${theme.text.header.color.main} bg-${theme.bg.header.color.hover} rounded-md border-opacity-40 text-center cursor-pointer font-bold drop-shadow-md`}
        >
          {'Заказать'}
        </Text>
        <div className={`flex gap-2 items-center`}>
          {isPreHeader ? !inView && w >= 1100 && <Social contacts={app.contacts} theme={theme} /> : <></>}
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
            app={app}
          />
        }
      />
    </>
  );
};

export default LG;
