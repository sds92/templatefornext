import React from 'react';
import { Button, Text } from '../../lib';

export default function Deviders({ content }) {
  return (
    <div className={`bg-belplit24_3 py-10 px-4`}>
      <div className={`flex flex-wrap justify-evenly`}>
        <div className={`text-slate-100 text-justify flex flex-col items-center justify-center`}>
          <Text className={`font-bold text-xl`}>{content[5]}</Text>
         {content[6] !== '' && <Text className={`font-light py-2`}>{content[6]}</Text>}
        </div>
        <a className={``} href='#Contacts'>
          <div className={`my-2`}>
            <Button href={`#Contacts`}>Заказать звонок</Button>
          </div>
        </a>
      </div>
    </div>
  );
}
