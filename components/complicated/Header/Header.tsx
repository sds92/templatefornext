import React from 'react';
import SM from './SM';
import LG from './LG';
import { useInView } from 'react-intersection-observer';

type HeaderProps = {
  w: number;
  theme: ITheme;
  app: IApp;
};

const Header: React.FC<HeaderProps> = (props) => {
  const { w, theme, app } = props;
  const h = w >= 900 ? 'h-14' : 'h-16';
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <React.Fragment>
      <div ref={ref} id={`head`} className={`${h} relative`} />
      <header className={`z-50 fixed w-full top-0 ${h}`}>
        {w >= 900 ? <LG theme={theme} app={app} inView={inView} w={w}/> : <SM theme={theme} app={app} />}
      </header>
    </React.Fragment>
  );
};

export default Header;
