import React from 'react';
import { Text } from 'components/lib';
import styles from './styles/SM.module.sass';

// etc
import { Link } from 'react-scroll';
import { Logos, Icons, Modal, ModalItems, FeedBack } from '../';

type SMProps = {
  theme: ITheme;
  app: IApp;
};

const SM = (props: SMProps) => {
  const { theme, app } = props;
  const menu = app.menu;
  const [isActive, setIsActive] = React.useState<boolean>(false);
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
  // TODO: fix
  // @ts-ignore
  const Logo = Logos[app?.logo as string] || null;
  return (
    <>
      <nav className={`bg-${theme.bg.header.color.main} flex justify-between items-center h-full shadow-md`}>
        <div className='basis-1/3'>
          <Icons.Menu
            w={14}
            h={14}
            className={`px-2 py-4 cursor-pointer active:scale-125 transition-all text-${theme.text.header.color.main}`}
            onClick={() => setIsActive(!isActive)}
          />
        </div>
        <div className={`basis-1/3 flex justify-center`}>
          <a className={`self-center`} href='#main' title={app?.url || ''}>
            {Logo && (
              <Logo fill={`${theme.logo}`} w={app.logoUserSizes?.w || 10} h={app.logoUserSizes?.h || 10} />
            )}
          </a>
        </div>
        <div className={`w-1/3 pr-4`}>
          <div
            className={`w-full py-1 shadow-xl border border-bp_red_2 text-${theme.text.header.color.main} bg-${theme.bg.header.color.hover} uppercase rounded-sm cursor-pointer active:scale-105`}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <Text className={`text-center font-bold drop-shadow-md`}>{'Заказать'}</Text>
          </div>
        </div>
        {isActive ? <div onClick={() => setIsActive(!isActive)} className={styles.overlay}></div> : ''}
      </nav>
      <div className={`relative`} style={{ marginTop: '-60px' }}>
        <nav
          style={{ top: '60px', left: 0, maxWidth: '260px' }}
          className={`${isActive ? `translate-x-0` : `-translate-x-72`} bg-${
            theme.bg.header.color.main
          } transition-all flex flex-col absolute h-screen z-50`}
        >
          <div
            className={`flex flex-col text-${theme.text.header.color.main} bg-${theme.bg.header.color.main}`}
          >
            {menu.map((item: string, index: number) => (
              <Link
                key={`MENUITEM${index}`}
                to={item[1].replace('#', '')}
                spy={true}
                smooth={true}
                offset={-65}
                duration={500}
                delay={0}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
              >
                <div
                  onClick={() => setIsActive(!isActive)}
                  className={`cursor-pointer h-10 pl-4 uppercase flex items-center hover:text-${theme.text.header.color.s2} hover:bg-${theme.bg.header.color.hover} active:bg-${theme.bg.header.color.active}`}
                >
                  <a href='#main'>{item[0]}</a>
                </div>
              </Link>
            ))}
          </div>
          <div className={`px-4 flex flex-col mt-10 text-${theme.text.header.color.main}`}>
            <a
              onClick={() => setIsActive(!isActive)}
              className={styles.menu_list_tel + ` hover:text-${theme.text.header.color.hover}`}
              href={`tel:${app.contacts.phones[0]}`}
            >
              {app.contacts.phones[0]}
            </a>
            <p className={styles.menu_list_address}>{app.contacts.addresses[0]?.value}</p>
            <div className={`flex justify-center`}>
              <a className={`self-center`} href='#main' title={app?.url || ''}>
                {Logo && (
                  <Logo
                    fill={`${theme.logo}`}
                    w={app.logoUserSizes?.w || 10}
                    h={app.logoUserSizes?.h || 10}
                  />
                )}
              </a>
            </div>
          </div>
        </nav>
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

export default SM;
