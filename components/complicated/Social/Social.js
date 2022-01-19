import React from 'react';
import { Icons } from '..';

export default function Social({app}) {
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
      <div className={`text-slate-100 hover:text-belplit24_2 transition-all `}>
        <a href={`tel:${app.contacts.phones[0]}`}>{app.contacts.phones[0]}</a>
      </div>
    </>
  );
}
