import React from 'react';
import { Icons } from '..';

export default function Social(props) {
  const { contacts, theme, noPhone, big } = props;
  return (
    <>
      {contacts.socials &&
        contacts.socials.map((item, index) => {
          const Icon = Icons[item[0]];
          return (
            <div
              className={`cursor-pointer transition-all hover:scale-110 active:scale-110`}
              key={`SOCIAL${index}`}
            >
              <a target='_blank' href={`${item[1]}`} rel='noopener noreferrer'>
                <Icon
                   style={{
                    ['-webkit-filter']: `drop-shadow( 0px 3px 10px rgba(63, 63, 70, 0.5) )`,
                    filter: ` drop-shadow( 0px 3px 10px rgba(63, 63, 70, 0.5) )`,
                  }}
                  w={big ? 8 : 6}
                  h={big ? 8 : 6}
                />
              </a>
            </div>
          );
        })}
      {!noPhone && (
        <div
          className={`text-${theme.text.header.color.main} hover:text-${theme.text.header.color.hover} transition-all `}
        >
          <a href={`tel:${contacts.phones[0]}`}>{contacts.phones[0]}</a>
        </div>
      )}
    </>
  );
}
