import React from 'react';
import SM from './SM';
import LG from './LG';

type HeaderProps = {
  w: number;
  theme: ITheme;
  app: IApp;
};

const Header: React.FC<HeaderProps> = (props) => {
  const { w, theme, app } = props;
  const h = w >= 900 ? 'h-20' : 'h-16';
  return (
    <React.Fragment>
      <div id={`head`} className={h} />
      <header className={`z-50 fixed w-full top-0 ${h}`}>
        {w >= 900 ? <LG theme={theme} app={app} /> : <SM theme={theme} app={app} />}
      </header>
    </React.Fragment>
  );
};

export default Header;
