import React from 'react';
import styles from './Burger.module.sass';

// etc
import { Icons } from '../';
import { Link } from 'react-scroll';

export default function SM({ menu, app }) {
  const [state, setState] = React.useState({ scroll: false });
  const [isActive, setIsActive] = React.useState(false);
  React.useEffect(() => {
    document.addEventListener('scroll', () => setState((state) => ({ ...state, scroll: true })));
  }, []);
  return (
    <nav className={`bg-belplit24 flex justify-between items-center h-16`}>
      <div className='basis-1/3'>
        <Icons.Menu
          extraClasses={`w-14 h-14 px-2 py-4 cursor-pointer active:scale-125 transition-all text-slate-100`}
          onClick={() => setIsActive(!isActive)}
        />
      </div>
      <div className={`basis-1/3 flex justify-center`}>
        <a className={`self-center`} href='#main'>
          <Icons.Belplit24 extraClasses={`w-10 h-10`} />
        </a>
      </div>
      <div className={`basis-1/3`}></div>
      <nav className={isActive ? `${styles.burger} ${styles.active}` : `${styles.burger}` + ' bg-belplit24'}>
        <ul className={styles.burger_list + ' bg-belplit24'}>
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
              <li
                onClick={() => setIsActive(!isActive)}
                className={styles.burger_list_item + ' bg-belplit24 active:bg-belplit24_2'}
              >
                <a href='#main'>{item[0]}</a>
              </li>
            </Link>
          ))}
        </ul>
        <ul className={`${styles.burger_list} ${styles.margin}` + ' bg-belplit24'}>
          <a
            onClick={() => setIsActive(!isActive)}
            className={styles.burger_list_tel}
            href={`tel:${app.contacts.phones[0]}`}
          >
            {app.contacts.phones[0]}
          </a>
          <p className={styles.burger_list_address}>{app.contacts.addresses[0].value}</p>
          <div className={`flex justify-center`}>
            <a className={`self-center`} href='#main'>
              <Icons.Belplit24 extraClasses={`w-20 h-20`} />
            </a>
          </div>
        </ul>
      </nav>
      {isActive ? <div onClick={() => setIsActive(!isActive)} className={styles.overlay}></div> : ''}
      {/* <div className={`justify-start`}>

        <Menu
          menuClassName={`h-screen usr-menu mt-16`}
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
            <a href={`tel:${app.contacts.phones[0]}`} className={`text-slate-100`}>
              {app.contacts.phones[0]}
            </a>
          </MenuItem>
          <MenuItem
            className={`mb-2 flex gap-1 items-center justify-center bg-belplit24 hover:bg-belplit24_2`}
          >
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
      </div> */}
    </nav>
  );
}
