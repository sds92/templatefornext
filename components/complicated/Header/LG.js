import React from 'react';

export default function LG() {
  const menu = [
    ['Главная', '#Main'],
    ['Цены', '#Catalog'],
    ['Преимущества', '#advantages'],
    ['Применение', '#gallery'],
    ['Контакты', '#contacts'],
  ];
  return (
    <nav className={`bg-belplit24 flex justify-evenly items-center h-20`}>
      <a className={``} href='#Main'>
        <img src='images/logo.png' alt='' width='70' height='70' srcSet='images/logo.png 2x' />
      </a>
      <ul className={`flex`}>
        {menu.map((item, index) => (
          <li key={`MENUITEM${index}`} className={`text-slate-100`}>
            <a className={`px-4 font-bold`} href={item[1]}>
              {item[0]}
            </a>
          </li>
        ))}
      </ul>
      <div className={`text-slate-100`}>
        <a className={``} href='tel:+74951202735'>
          +7 (495) 120-27-35
        </a>
      </div>
    </nav>
  );
}
