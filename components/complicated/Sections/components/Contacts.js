import React from 'react';
import { Icons } from '../../';
import { Title, Text } from '../../../lib';
import { FeedBack } from '../../';

export default function Contacts({ app, theme }) {
  const classes = {
    contactsTitle: `pl-2 border-b border-slate-300 w-full`,
  };
  return (
    <div className={`bg-slate-100 py-10`}>
      <Title a={`Контакты`} />

      <div className={`flex flex-col w-full`}>
        <div className={`w-full flex flex-col items-center sm:flex-row sm:gap-2 md:gap-10 my-2 `}>
          {/* FORM */}
          <div className={`w-full flex flex-col ml-auto sm:w-2/3 md:w-7/12 max-w-xl`}>
            <Title ats={`xl`} a={`Свяжитесь с нами`}></Title>
            <FeedBack app={app} theme={theme}/>
          </div>

          {/* CONTACTS */}
          <div
            className={`flex w-full flex-wrap sm:max-w-xl sm:flex-col sm:w-1/3 md:w-5/12 p-2 mr-auto mt-10`}
          >
            <div className={`sm:w-full w-1/2 my-1 flex flex-col`}>
              <div className={`flex h-6 mx-0.5`}>
                <Icons.Phone extraClasses={`pl-1 w-6 h-6 border-b border-belplit24_2 text-belplit24_2`} />
                <p className={classes.contactsTitle}>Телефон:</p>
              </div>
              <div className={`ml-8 font-light`}>
                <a href={`tel:${app.contacts.phones[0]}`}>
                  {app.contacts.phones[0]}
                </a>
              </div>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex h-6 mx-0.5`}>
                <Icons.Mail extraClasses={`pl-1 text-center w-6 h-6 border-b border-belplit24_2 text-belplit24_2`} />
                <p className={classes.contactsTitle}>EMAIL:</p>
              </div>
              <Text className={`ml-8 font-light`}>{app.contacts.emails[0]}</Text>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex h-6 mx-0.5`}>
                <Icons.Location
                  extraClasses={`pl-1 w-6 h-6 pt-0.5 border-b border-belplit24_2 text-belplit24_2`}
                />
                <p className={classes.contactsTitle}>АДРЕС:</p>
              </div>
              <Text className={`ml-8 font-light`}>{app.contacts.addresses[0].value}</Text>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex h-6 mx-0.5`}>
                <Icons.Clock extraClasses={`pl-0.5 w-6 h-6 border-b border-belplit24_2 text-belplit24_2`} />
                <p className={classes.contactsTitle}>ВРЕМЯ РАБОТЫ:</p>
              </div>
              <Text className={`ml-8 font-light`}>{app.workingHoars.value}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
