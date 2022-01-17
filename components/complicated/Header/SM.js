import React from 'react';
import { Link } from 'react-scroll';
import { AnimatePresence, domAnimation, LazyMotion, m, motion } from 'framer-motion';
// react-menu
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

// etc
import { Icons } from '../';
import { animations } from '../../../styles/animations';

export default function SM({ menu, app }) {
  const [state, setState] = React.useState({scroll: false});
  React.useEffect(() => {
    document.addEventListener('scroll', () => setState((state) => ({...state, scroll: true})))
  }, []);
  return (
    <nav className={`bg-belplit24 flex justify-between items-center h-16 ${state.scroll && 'bg-opacity-20'}`}>
      <div className={`justify-start`}>
        <Menu
          menuClassName={`menu`}
          menuButton={
            <MenuButton>
              <Icons.Menu
                extraClasses={`w-14 h-14 px-2 py-4 cursor-pointer active:scale-125 transition-all text-slate-100`}
              />
            </MenuButton>
          }
          transition
        >
          {menu.map((item, index) => (
            <Link
              key={`MENUITEM${index}`}
              activeClass='active'
              to={item[1].replaceAll('#', '')}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
              delay={0}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              <MenuItem
                key={`MenuItem${index}`}
                className={`text-slate-100 bg-belplit24 hover:bg-belplit24_2`}
              >
                <span className={`w-7`} />
                {item[0]}
              </MenuItem>
            </Link>
          ))}
          <hr className='mt-2' />
          <MenuItem
            className={`mt-2 flex gap-1 items-center justify-center bg-belplit24 hover:bg-belplit24_2`}
          >
            <Icons.Phone extraClasses={`w-6 h-6 text-slate-100`} />
            <a href={`tel:${app.contacts.phones[0]}`} className={`text-slate-100`}>
              {app.contacts.phones[0]}
            </a>
          </MenuItem>
          <MenuItem
            className={`mb-2 flex gap-1 items-center justify-center bg-belplit24 hover:bg-belplit24_2`}
          >
            <Icons.Location extraClasses={`w-6 h-6 text-slate-100`} />
            <p className={`text-slate-100 w-36`}>{app.contacts.addresses[0].value}</p>
          </MenuItem>
          <hr />
          <div className={`flex justify-center items-center h-20`}>
            <a href='#main'>
              <Icons.Belplit24 extraClasses={`w-10 h-10 mt-2`} />
            </a>
          </div>
        </Menu>
      </div>
      <div className={`flex justify-center`}>
        <a className={`self-center`} href='#main'>
          <Icons.Belplit24 extraClasses={`w-10 h-10`} />
        </a>
      </div>
      <div className={`flex justify-end`}>
        <div className={`text-slate-100`}>
          <a className={``} href={`tel:${app.contacts.phones[0]}`}>
            {app.contacts.phones[0]}
          </a>
        </div>
      </div>
    </nav>
  );
}
