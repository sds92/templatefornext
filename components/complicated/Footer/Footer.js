import React from 'react';
import Map from './Map';
import { Icons } from '..';


export default function Footer(props) {
  const { theme, app } = props;
  const Icon = Icons[app?.logo || 'Belplit24'];
  return (
    <>
      <div className={`h-96 cursor-default overflow-hidden flex`}>
          <Map contacts={app.contacts} />
      </div>
      <footer className={`bg-${theme.bg.footer} overflow-hidden`}>
        <div className={`flex flex-col md:flex-row justify-between items-center h-full`}>
          <div className={`ml-0 sm:ml-10 md:ml-36 my-4`}>
            <a href='index.html'>
              <Icon
                fill={`${theme.logo}`}
                extraClasses={`${app?.logo === 'WoodEco' ? 'w-16 h-16' : 'w-10 h-10'}`}
              />
            </a>
          </div>

          <div className={`my-4 flex items-center gap-6 text-${theme.text.footer} cursor-default mr-2`}>
            <Icons.Roboweb extraClasses={`w-10 h-10`} fill={`${theme.logoRoboWeb}`} />
            <p>
              © 2022. Сайт создан с помощью{' '}
              <a className={`font-bold`} href='https://roboweb.team'>
                RoboWeb.Team
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
