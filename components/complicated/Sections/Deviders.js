import React from 'react';
import { Button, Text } from '../../lib';

export default function Deviders(props) {
  const { content, theme } = props;
  return (
    <div className={`${theme.bg.devider} py-10 px-4`}>
      <div className={`flex flex-wrap justify-evenly`}>
        <div className={`text-slate-100 text-justify`}>
          <Text className={`font-bold text-xl`}>{content[5]}</Text>
          <Text className={`font-light py-2`}>{content[6]}</Text>
        </div>
        <a className={``} href='#Contacts'>
          <div className={`my-2`}>
            <Button theme={theme} href={`#Contacts`}>
              Заказать звонок
            </Button>
          </div>
        </a>
      </div>
    </div>
  );
}
