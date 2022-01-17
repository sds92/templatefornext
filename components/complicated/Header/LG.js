import React from 'react';
import { Icons } from '..';
import { Link } from 'react-scroll';

export default function LG({ menu, app }) {
  return (
    <nav className={`bg-belplit24 flex justify-evenly items-center h-20`}>
      <a href='#Main'>
        <Icons.Belplit24 extraClasses={`w-10 h-10`}/>
      </a>
      <ul className={`flex`}>
        {menu.map((item, index) => (
          <li
            key={`MENUITEM${index}`}
            className={`text-slate-100 rd-nav-link hover:text-belplit24_2 transition-all duration-300`}
          >
            <Link
              activeClass='text-belplit24_2'
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
      <div className={`text-slate-100 hover:text-belplit24_2 transition-all`}>
        <a href={`tel:${app.contacts.phones[0]}`}>
        {app.contacts.phones[0]}
        </a>
      </div>
    </nav>
  );
}
