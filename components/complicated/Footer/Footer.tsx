import React from 'react';
// import dynamic from 'next/dynamic';
import Map from './Map';
import { useInView } from 'react-intersection-observer';

import { Icons } from '..';

type FooterProps = {
  theme: ITheme;
  app: IApp;
};

const Footer = (props: FooterProps) => {
  const { theme, app } = props;
  const { contacts } = app;
  const Logo = Icons[app?.logo || 'Belplit24'];
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (
    <footer>
      <div ref={ref} className={`h-96 cursor-default overflow-hidden`}>
        {contacts.addresses.length > 0 && inView && <Map contacts={contacts} />}
      </div>
      <div className={`bg-belplit24`}>
        <div className={`flex flex-col md:flex-row justify-between items-center h-full`}>
          <div className={`ml-0 sm:ml-10 md:ml-36 my-4`}>
            <a title={`Главная`} href='#main'>
              <Icons.Belplit24 w={10} h={10} />
            </a>
          </div>

          <div className={`my-4 flex items-center gap-6 text-slate-100 cursor-default mr-2`}>
            <Icons.Roboweb w={10} h={10}/>
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
};

export default Footer;
