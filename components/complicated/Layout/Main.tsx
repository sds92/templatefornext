import * as React from 'react';
import { UserHead, Header } from '..';

interface MainProps {
  w: number;
  data: {};
  theme: string;
}

const Main: React.FC<MainProps> = (props: MainProps) => {
  return (
    <React.Fragment>
      <UserHead>
        <title>ADMINISTARTION PANEL</title>
      </UserHead>
      <Header {...newProps} />
    </React.Fragment>
  );
};
