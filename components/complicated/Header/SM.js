import React from 'react';
// react-menu
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
// etc
import { Icons } from '../';

export default function SM({menu}) {
  
  return (
    <nav className={`bg-belplit24 flex justify-between items-center h-16`}>
      <Menu
        menuClassName={`menu`}
        menuButton={
          <MenuButton>
            <Icons.Menu
              extraClasses={`w-8 h-8 cursor-pointer active:border rounded-md transition-all text-slate-100`}
            />
          </MenuButton>
        }
      >
        {menu.map((item, index) => (
          <MenuItem key={`MenuItem${index}`} className={`menuItem bg-belplit24 hover:bg-belplit24_2`}>
            <li key={`MENUITEM${index}`} className={`text-slate-100 `}>
              <a className={`px-4 font-bold`} href={item[1]}>
                {item[0]}
              </a>
            </li>
          </MenuItem>
        ))}
        <hr />
        <MenuItem className={`menuItem bg-belplit24 hover:bg-belplit24_2`}>
          <div className={`flex my-1 `}>
            <Icons.Phone extraClasses={`w-6 h-6 text-slate-100`} />
            <a href={`tel:+7 (495) 120-27-35`} className={`text-slate-100`}>
              +7 (495) 120-27-35
            </a>
          </div>
        </MenuItem>
        <hr />
        <div className={`flex justify-center`}>
          <a href='#main'>
            <img src='images/logo.png' alt='' width='100' height='100' srcSet='images/logo.png 2x' />
          </a>
        </div>
      </Menu>
      <a className={``} href='#main'>
        <img src='images/logo.png' alt='' width='50' height='50' srcSet='images/logo.png 2x' />
      </a>
      <div className={`text-slate-100`}>
        <a className={``} href='tel:+74951202735'>
          +7 (495) 120-27-35
        </a>
      </div>
    </nav>
  );
}
