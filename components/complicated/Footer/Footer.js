import React from 'react';
import Map from './Map';
import { Icons } from '..';

export default function Footer(props) {
  const { theme, app } = props;
  const Icon = Icons[app?.logo || 'Belplit24'];
  return (
    <footer className={`bg-zinc-800`} >
      <div
        className={`h-96  bg-zinc-800 cursor-default overflow-hidden flex justify-center items-center md:gap-4 zero:flex-col md:flex-row`}
      >
        <div className={`shadow-md h-full md:w-1/2 border rounded-sm`}>
          <Map contacts={app.contacts?.addresses[0].iframe} />
        </div>
        <div className={`shadow-md h-full md:w-1/2 border rounded-sm`}>
          <Map contacts={app.contacts?.addresses[1].iframe} />
        </div>
      </div>
      <div className={`overflow-hidden`}>
        <div className={`flex flex-col md:flex-row justify-between items-center h-full`}>
          <div className={`ml-0 sm:ml-10 md:ml-36 my-4`}>
            <a href='#Main' title='Главная'>
              <Icon
                fill={`${theme.logo}`}
                extraClasses={`${app?.logo === 'WoodEco' ? 'w-16 h-16' : 'w-10 h-10'}`}
              />
            </a>
          </div>

          <div className={`my-4 flex items-center gap-6 text-zinc-100 cursor-default mr-2`}>
            <Icons.Roboweb extraClasses={`w-10 h-10`} fill={`${theme.logoRoboWeb}`} />
            <p>
              © 2022. Сайт создан с помощью{' '}
              <a
                className={`font-bold`}
                href='https://roboweb.team'
                target='_blank'
                rel='noopener noreferrer'
              >
                RoboWeb.Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
