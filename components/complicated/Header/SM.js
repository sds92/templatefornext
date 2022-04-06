import React from 'react';
import styles from './Burger.module.sass';

// etc
import { Icons } from '../';
import { Link } from 'react-scroll';

export default function SM({ menu, app, theme }) {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <>
      <nav className={`${theme.bg.header} flex justify-between items-center h-16`}>
        <div className='basis-1/3'>
          <Icons.Menu
            extraClasses={`w-14 h-14 px-2 py-4 cursor-pointer active:scale-125 transition-all text-slate-100`}
            onClick={() => setIsActive(!isActive)}
          />
        </div>
        <div className={`basis-1/3 flex justify-center`}>
          <a className={`self-center`} href='#main'>
            <Icons.Belplit24 fill={'#62a044'} extraClasses={`w-10 h-10`} />
          </a>
        </div>
        <div className={`basis-1/3`}></div>

        {isActive ? <div onClick={() => setIsActive(!isActive)} className={styles.overlay}></div> : ''}
      </nav>
      <div className={`relative`} style={{ marginTop: "-60px" }}>
        <nav className={`${isActive ? `${styles.burger} translate-x-0` : `${styles.burger} -translate-x-72`} ${theme.bg.header} transition-all`}>
          <ul className={styles.burger_list + ` ${theme.bg}`}>
            {menu.map((item, index) => (
              <Link
                key={`MENUITEM${index}`}
                activeClass='active'
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
                <li
                  onClick={() => setIsActive(!isActive)}
                  className={
                    styles.burger_list_item +
                    ` text-slate-100 rd-nav-link ${theme.bg} hover:${theme.bg.productLine} active:${theme.bg.productLine}`
                  }
                >
                  <a href='#main'>{item[0]}</a>
                </li>
              </Link>
            ))}
          </ul>
          <ul className={`${styles.burger_list} ${styles.margin}` + ` ${theme.bg.header}`}>
            <a
              onClick={() => setIsActive(!isActive)}
              className={styles.burger_list_tel}
              href={`tel:+${app.contacts.phonesMango?.number || app.contacts.phones}`}
            >
              {app.contacts.phonesMango?.formattedNumber || app.contacts.phones}
              <tel name="tel">
                {app.contacts.phones[0]}
              </tel>
           </a>
            <p className={styles.burger_list_address}>{app.contacts.addresses[0].value}</p>
            <div className={`flex justify-center`}>
              <a className={`self-center`} href='#main'>
                <Icons.Belplit24 fill={'#62a044'} extraClasses={`w-20 h-20`} />
              </a>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}
