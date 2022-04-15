import React from 'react';
import styles from './styles/SM.module.sass';

// etc
import { Icons } from '..';
import { Link } from 'react-scroll';

type SMProps = {
  theme: ITheme;
  app: IApp;
};

const SM: React.FC<SMProps> = (props) => {
  const { theme, app } = props;
  const menu = app.menu;
  const [isActive, setIsActive] = React.useState<boolean>(false);
  console.log("🚀 ~ file: SM.tsx ~ line 17 ~ isActive", isActive)
  // TODO: fix
  // @ts-ignore
  const Icon = Icons[app?.logo || 'Belplit24'];
  return (
    <>
      <nav className={`bg-${theme.bg.header.color.main} flex justify-between items-center h-full`}>
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
            <Icon fill={`${theme.logo}`} w={app.logoUserSizes?.w || 10} h={app.logoUserSizes?.h || 10} />
          </a>
        </div>
        <div className={`basis-1/3`}></div>
        {isActive ? <div onClick={() => setIsActive(!isActive)} className={styles.overlay}></div> : ''}
      </nav>
      <div className={`relative`} style={{ marginTop: '-60px' }}>
        <nav
          style={{ top: '60px', left: 0, maxWidth: '260px' }}
          className={`${isActive ? `translate-x-0` : `-translate-x-72`} bg-${
            theme.bg.header.color.main
          } transition-all flex flex-col absolute h-screen z-50`}
        >
          <div className={`flex flex-col text-${theme.text.header.color.main} bg-${theme.bg.header.color.main}`}>
            {menu.map((item: string, index: number) => (
              <Link
                key={`MENUITEM${index}`}
                to={item[1].replaceAll('#', '')}
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
                  className={`cursor-pointer h-10 pl-4 uppercase flex items-center hover:text-${theme.text.header.color.hover} hover:bg-${theme.bg.header.color.hover} active:bg-${theme.bg.headerActiveLink}`}
                >
                  <a href='#main'>{item[0]}</a>
                </div>
              </Link>
            ))}
          </div>
          <div className={`px-4 flex flex-col mt-10 text-${theme.text.header.color}`}>
            <a
              onClick={() => setIsActive(!isActive)}
              className={styles.menu_list_tel}
              href={`tel:${app.contacts.phones[0]}`}
            >
              {app.contacts.phones[0]}
            </a>
            <p className={styles.menu_list_address}>{app.contacts.addresses[0]?.value}</p>
            <div className={`flex justify-center`}>
              <a className={`self-center`} href='#main' title={app?.url || ''}>
                <Icon fill={`${theme.logo}`} w={app.logoUserSizes?.w || 10} h={app.logoUserSizes?.h || 10} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SM;
