import React from 'react';
import { Icons } from '..';
import { Link } from 'react-scroll';
import Social from '../Social/Social';
import styles from './styles/LG.module.scss';
import { Logos } from '../';
import { PreHeader } from './components';

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
  const Logo = Logos[app?.logo];

  const isPreHeader = app.content.preHeader ? true : false;

  return (
    <>
      {isPreHeader && <PreHeader app={app} theme={theme} inView={inView} />}
      <nav
        className={`bg-${theme.bg.header.color.main} flex justify-evenly items-center h-14 border-y border-neutral-300 shadow-md`}
      >
        <a href='#main' title={app?.url || ''}>
          {isPreHeader ? (
            !inView && (
              <Logo
                fill={`${theme.logo}`}
                className={`shadow-2xl`}
                w={app.logoUserSizes?.w || 10}
                h={app.logoUserSizes?.h || 10}
              />
            )
          ) : (
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
                to={item[1].replaceAll('#', '')}
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
        <div className={`flex`}>
          <div className={`flex gap-2`}>
            {isPreHeader ? !inView && w >= 1100 && <Social contacts={app.contacts} theme={theme} /> : <></>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default LG;
