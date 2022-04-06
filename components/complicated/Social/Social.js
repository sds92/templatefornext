import React from 'react';
import { Icons } from '..';

export default function Social({ app, theme }) {
  return (
    <>
      {app.contacts.socials &&
        app.contacts.socials.map((item, index) => {
          const Icon = Icons[item[0]];
          return (
            <div className={`cursor-pointer hover:scale-110 active:scale-110`} key={`SOCIAL${index}`}>
              <a target='_blank' href={`${item[1]}`} rel='noopener noreferrer'>
                <Icon extraClasses={`w-6 h-6`} />
              </a>
            </div>
          );
        })}
      <div className={`${theme.text.color.title2} hover:${theme.text.header} transition-all `}>
        <a href={`tel:+${app.contacts.phonesMango.number}`}>
          
            {app.contacts.phonesMango.formattedNumber}
          
        </a>
      </div>
    </>
  );
}
