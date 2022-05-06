import React from 'react';

import { Icons } from '..';

type FooterProps = {
  theme: ITheme;
  w: number;
  data: { content: Section; contacts: IApp['contacts']; app: IApp };
};

const FooterM0 = (props: FooterProps) => {
  const { theme, w, data } = props;
  const { app } = data;
  const Logo = Icons[app?.logo || 'Belplit24'];
  return (
    <footer className={`bg-${theme.bg.footer.color.main} overflow-hidden relative z-20`}>
      <div className={`flex flex-col md:flex-row justify-between items-center h-full`}>
        <div className={`ml-0 sm:ml-10 md:ml-36 my-4`}>
          <a title={''} href='#main'>
            <Logo fill={`${theme.logo}`} w={app.logoUserSizes?.w || 10} h={app.logoUserSizes?.h || 10} />
          </a>
        </div>

        <div
          className={`my-4 flex items-center gap-6 text-${theme.text.footer.color.s2} cursor-default mr-2`}
        >
          <a title={'RoboWeb.Team'} href='https://roboweb.team' target='_blank' rel='noopener noreferrer'>
            <Icons.Roboweb w={10} h={10} className={``} fill={`${theme.logoRoboWebColor}`} />
          </a>
          <p>
            © 2022. Сайт создан с помощью{' '}
            <a className={`font-bold`} href='https://roboweb.team' target='_blank' rel='noopener noreferrer'>
              RoboWeb.Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterM0;
