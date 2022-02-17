import React from 'react';
import { Icons } from '..';
import { Link } from 'react-scroll';
import Social from '../Social/Social';

export default function LG({ menu, app, theme }) {
  return (
    <nav className={`${theme.bg.header} flex justify-evenly items-center h-20`}>
      <a href='#Main'>
        <Icons.Belplit24 extraClasses={`w-10 h-10`} />
      </a>
      <ul className={`flex`}>
        {menu.map((item, index) => (
          <li
            key={`MENUITEM${index}`}
            className={`${theme.text} rd-nav-link hover:${theme.hoverText} transition-all duration-300`}
          >
            <Link
              activeClass={theme.hoverText}
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
          </li>
        ))}
      </ul>
      <div className={`flex`}>
        <div className={`flex gap-2`}>
          <Social app={app} />
        </div>
      </div>
    </nav>
  );
}
