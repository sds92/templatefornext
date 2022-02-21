import React from 'react';
import { Text } from '../../../lib';

export default function OrderClick(props) {
  const { theme, data } = props;
  const { orderClick } = data.content;
  return (
    <div className={`bg-${theme.bg.orderClick} py-10 px-4`}>
      <div className={`flex flex-wrap justify-evenly`}>
        <div className={`text-slate-100 text-justify flex flex-col items-center justify-center`}>
          <Text className={`font-bold text-xl`}>{orderClick.title}</Text>
          {orderClick.subTitle !== '' && <Text className={`font-light py-2`}>{orderClick.subTitle}</Text>}
        </div>

        <div className={`my-2`}>
          <div
            href={`#Contacts`}
            className={`${theme.styles.buttons} text-${theme.text.buttons} bg-${theme.bg.buttons} hover:bg-${theme.bg.buttonsHover} active:scale-105`}
          >
            Заказать звонок
          </div>
        </div>
      </div>
    </div>
  );
}
