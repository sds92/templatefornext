import React from 'react';
import { Icons } from '../../';
import { Title, Text } from '../../../lib';
import { FeedBack } from '../../';

export default function Contacts(props) {
  const { app, theme } = props;
  const classes = {
    contactsTitle: `pl-2 border-b ${theme.borders.contacts} w-full ${theme.text.color.title2}`,
  };
  return (
    <div className={`${theme.bg.contacts} py-10`}>
      <div
        className={`flex ${theme.text.color} font-bold flex-wrap justify-center items-center max-w-7xl mx-auto transition-all duration-300 delay-100 `}
      >
        <Text className={`overflow-hidden mb-4 text-6xl text-center uppercase ${theme.text.color.title}`}>Контакты</Text>
      </div>

      <div className={`flex flex-col w-full`}>
        <div className={`w-full flex flex-col items-center sm:flex-row sm:gap-2 md:gap-10 my-2 `}>
          {/* FORM */}
          <div className={`w-full flex flex-col ml-auto sm:w-2/3 md:w-7/12 max-w-xl`}>
            <Text className={`text-2xl font-bold text-center  ${theme.text.color.title2}`}>
              Свяжитесь с нами
            </Text>

            <FeedBack app={app} theme={theme} />
          </div>

          {/* CONTACTS */}
          <div
            className={`overflow-hidden flex w-full flex-wrap sm:max-w-xl sm:flex-col sm:w-1/3 md:w-5/12 p-2 mr-auto mt-10`}
          >
            <div className={`sm:w-full w-1/2 my-1 flex flex-col`}>
              <div className={`flex h-6 mx-0.5`}>
                <Icons.Phone extraClasses={`pl-1 w-6 h-6 border-b  ${theme.borders.icons}`} />
                <p className={classes.contactsTitle}>Телефон:</p>
              </div>
              <div className={`ml-8 font-light ${theme.text.color.title2}`}>
                <a href={`tel:+${app.contacts.phonesMango?.number || app.contacts.phones}`}>
                  <tel name="tel">
                    {app.contacts.phonesMango?.formattedNumber || app.contacts.phones}
                  </tel>
                </a>
              </div>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex h-6 mx-0.5`}>
                <Icons.Mail extraClasses={`pl-1 text-center w-6 h-6 border-b  ${theme.borders.icons}`} />
                <p className={classes.contactsTitle}>EMAIL:</p>
              </div>
              <Text className={`ml-8 font-light ${theme.text.color.title2}`}>{app.contacts.emails[0]}</Text>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex h-6 mx-0.5`}>
                <Icons.Location extraClasses={`pl-1 w-6 h-6 pt-0.5 border-b  ${theme.borders.icons}`} />
                <p className={classes.contactsTitle}>АДРЕС:</p>
              </div>
              <Text className={`ml-8 font-light ${theme.text.color.title2}`}>{app.contacts.addresses[0].value}</Text>
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex h-6 mx-0.5`}>
                <Icons.Clock extraClasses={`pl-0.5 w-6 h-6 border-b  ${theme.borders.icons}`} />
                <p className={classes.contactsTitle}>ВРЕМЯ РАБОТЫ:</p>
              </div>
              <Text className={`ml-8 font-light ${theme.text.color.title2}`}>{app.workingHoars.value}</Text>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
