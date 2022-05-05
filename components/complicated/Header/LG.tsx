import React from 'react';
import { Icons } from '..';
import { Link } from 'react-scroll';
import Social from '../Social/Social';
import styles from './styles/LG.module.scss';

type LGProps = {
  theme: ITheme;
  app: IApp;
  data: any
}
const LG = (props: LGProps) => {
  const {
    theme,
    app,
  } = props;
  const menu = app.menu;
  // TODO: fix
  const Logo = Icons[app?.logo || 'Belplit24'];
  return (
    <nav className={`bg-${theme.bg.header.color.main} flex justify-evenly items-center h-full`}>
      <a href='#main' title={app?.url || ''}>
        <Logo fill={`${theme.logo}`} w={app.logoUserSizes?.w || 10} h={app.logoUserSizes?.h || 10} />
      </a>
      <div className={`flex flex-row`}>
        {menu.map((item: string[], index: number) => (
          <div
            key={`MENUITEM${index}`}
            className={`${styles.menuitem} text-${theme.text.header.color.main} hover:text-${theme.text.header.color.hover} active:text-${theme.text.header.color.active} active:scale-105 transition-all duration-300`}
          >
            <Link
              activeClass={`text-${theme.text.header.color.hover}`}
              to={item[1].replaceAll('#', '')}
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
              delay={0}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={100}
            >
              <a className={`px-4`} href={item[1]}>
                {item[0].toUpperCase()}
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div className={`flex`}>
        <div className={`flex gap-2`}>
          <Social contacts={app.contacts} theme={theme} />
        </div>
      </div>
    </nav>
  );
};

export default LG;
