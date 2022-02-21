import React from 'react';
import { Icons } from '..';
import { Link } from 'react-scroll';
import Social from '../Social/Social';
import styles from './LG.module.scss';

export default function LG(props) {
  const { theme, data, menu } = props;
  
  return (
    <nav className={`bg-${theme.bg.header} flex justify-evenly items-center h-20`}>
      <a href='#Main'>
        <Icons.Belplit24 fill={`${theme.logo}`} extraClasses={`w-10 h-10`}  />
      </a>
      <div className={`flex flex-row`}>
        {menu.map((item, index) => (
          <div
            key={`MENUITEM${index}`}
            className={`${styles.menuitem} text-${theme.text.header} hover:text-${theme.text.hover} active:text-${theme.text.active} active:scale-105 transition-all duration-300`}
          >
            <Link
              activeClass={`text-${theme.text.hover}`}
              to={item[1].replaceAll('#', '')}
              spy={true}
              smooth={true}
              hashSpy={true}
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
          <Social contacts={data.contacts} theme={theme} />
        </div>
      </div>
    </nav>
  );
}
