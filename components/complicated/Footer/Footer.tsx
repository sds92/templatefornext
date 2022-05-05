import React from 'react';
// import dynamic from 'next/dynamic';
import Map from './Map';
import { useInView } from 'react-intersection-observer';

import { Icons } from '..';

// const LazyMap = React.lazy(() => <Map/>);

type FooterProps = {
  theme: ITheme;
  app: IApp;
};

const Footer = (props: FooterProps) => {
  const { theme, app } = props;
  const { contacts } = app;
  const Logo = Icons[app?.logo || 'Belplit24'];
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <>
      <div ref={ref} className={`h-96 cursor-default overflow-hidden`}>
        {contacts.addresses.length > 0 && inView && <Map contacts={contacts} />}
      </div>
      <footer className={`bg-${theme.bg.footer.color.main} overflow-hidden`}>
        <div className={`flex flex-col md:flex-row justify-between items-center h-full`}>
          <div className={`ml-0 sm:ml-10 md:ml-36 my-4`}>
            <a title={''} href='#main'>
              <Logo fill={`${theme.logo}`} w={app.logoUserSizes?.w || 10} h={app.logoUserSizes?.h || 10} />
            </a>
          </div>

          <div
            className={`my-4 flex items-center gap-6 text-${theme.text.footer.color.s2} cursor-default mr-2`}
          >
            <Icons.Roboweb extraClasses={`w-10 h-10`} fill={`${theme.logoRoboWebColor}`} />
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
      </footer>
    </>
  );
};

export default Footer;
