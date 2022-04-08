import * as React from 'react';
import { UserHead, Header } from '..';

interface MainProps {
  w: number;
  lgView: boolean;
  data: {};
  theme: string;
}

const Layout: React.FC<MainProps> = (props: MainProps) => {
  return (
    <React.Fragment>
      <UserHead>
        <title>ADMINISTARTION PANEL</title>
      </UserHead>
      <Header {...props} />
    </React.Fragment>
  );
};

export default Layout
