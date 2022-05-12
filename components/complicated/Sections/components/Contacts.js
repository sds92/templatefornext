import React from 'react';
import { Icons } from '../../';
import { Text } from '../../../lib';
import { FeedBack } from '../../';

export default function Contacts(props) {
  const { theme, app } = props;
  const { contacts } = app;
  const classes = {
    contactsTitle: `pl-2 border-b border-${theme.borders.contacts} text-${theme.text.contactsSubTitle} w-full`,
  };
  const phones = ['Вологда', 'Москва']
  return (
    <div id={`Contacts`} className={`bg-${theme.bg.contacts} py-10`}>
      <Text className={`zero:text-xl sm:text-5xl text-center font-bold text-${theme.text.contactsTitle}`}>
        Контакты
      </Text>

      <div className={`flex flex-col w-full`}>
        <div className={`w-full flex flex-col items-center sm:flex-row sm:gap-2 md:gap-10 my-2 `}>
          {/* FORM */}
          <div className={`w-full flex flex-col ml-auto sm:w-2/3 md:w-7/12 max-w-xl`}>
            <Text
              className={`zero:text-sm sm:text-xl text-center font-bold text-${theme.text.contactsSubTitle}`}
            >
              Свяжитесь с нами
            </Text>
            <FeedBack theme={theme} data={app} />
          </div>

          {/* CONTACTS */}
          <div
            className={`flex w-full flex-wrap sm:max-w-xl sm:flex-col sm:w-1/3 md:w-5/12 p-2 mr-auto mt-10 text-${theme.text.contactsSubTitle}`}
          >
            <div className={`sm:w-full w-1/2 my-1 flex flex-col `}>
              <div className={`flex mx-0.5 items-end`}>
                <Icons.Phone
                  extraClasses={`pl-1 w-6 h-6 border-b border-${theme.text.contactsIcon} text-${theme.text.contactsIcon}`}
                />
                <p className={classes.contactsTitle}>Телефоны:</p>
              </div>
              {contacts.phones.map((phone, i) => {
                return (
                  <div key={`phone${i}`} className={`ml-8 font-light`}>
                    <a href={`tel:${phone}`}>{phone + ` (${phones[i]})`}</a>
                  </div>
                );
              })}
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex mx-0.5 items-end`}>
                <Icons.Mail
                  extraClasses={`pl-1 text-center w-6 h-6 border-b border-${theme.text.contactsIcon} text-${theme.text.contactsIcon}`}
                />
                <p className={classes.contactsTitle}>EMAIL:</p>
              </div>
              <Text className={`ml-8 font-light`}>{contacts.emails[0]}</Text>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex mx-0.5 items-end`}>
                <Icons.Location
                  extraClasses={`pl-1 w-6 h-6 pt-0.5 border-b border-${theme.text.contactsIcon} text-${theme.text.contactsIcon}`}
                />
                <p className={classes.contactsTitle}>АДРЕС:</p>
              </div>
              {contacts.addresses.map((address, i) => (
                <div className={`ml-8 flex`} key={`address${i}`}>
                  {/* {address.title}:&nbsp; */}
                  <Text className={`font-light`}>{address.title + ': ' + address.value}</Text>
                </div>
              ))}
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex mx-0.5 items-end`}>
                <Icons.Clock
                  extraClasses={`pl-0.5 w-6 h-6 border-b border-${theme.text.contactsIcon} text-${theme.text.contactsIcon}`}
                />
                <p className={classes.contactsTitle}>ВРЕМЯ РАБОТЫ:</p>
              </div>
              {contacts.workingHoars.value.map((workingHoar, i) => (
                <div className={`ml-8 flex`} key={`address${i}`}>
                  <Text className={`font-light`}>{workingHoar}</Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
