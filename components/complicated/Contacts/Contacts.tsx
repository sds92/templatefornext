import React from 'react';
import { Icons } from '..';
import { Text } from '../../lib';
import { FeedBack } from '..';

type ContactsProps = {
  theme: ITheme;
  app: IApp;
};

const Contacts = (props: ContactsProps) => {
  const { theme, app } = props;
  const { contacts } = app;
  const classes = {
    contactsTitle: `pl-2 border-b border-${theme.borders.contacts.color.main} text-${theme.text.contacts.color.s1} w-full`,
  };
  return (
    <div id={`Contacts`} className={`bg-${theme.bg.contacts.color.main} py-10`}>
      <Text
        className={`zero:text-xl sm:text-5xl text-center font-bold text-${theme.text.contacts.color.main}`}
      >
        Контакты
      </Text>

      <div className={`flex flex-col w-full`}>
        <div className={`w-full flex flex-col items-center sm:flex-row sm:gap-2 md:gap-10 my-2 `}>
          {/* FORM */}
          <div className={`w-full flex flex-col ml-auto sm:w-2/3 md:w-7/12 max-w-xl`}>
            <Text
              className={`zero:text-sm sm:text-xl text-center font-bold text-${theme.text.contacts.color.s1}`}
            >
              Свяжитесь с нами
            </Text>
            <FeedBack theme={theme} app={app} />
          </div>

          {/* CONTACTS */}
          <div
            className={`flex w-full flex-wrap sm:max-w-xl sm:flex-col sm:w-1/3 md:w-5/12 p-2 mr-auto mt-10`}
          >
            <div className={`sm:w-full w-1/2 my-1 flex flex-col `}>
              <div className={`flex mx-0.5 items-end`}>
                <Icons.Phone
                  w={6}
                  h={6}
                  className={`pl-1 border-b border-${theme.text.contacts.color.main} text-${theme.text.contacts.color.main}`}
                />
                <p className={classes.contactsTitle}>Телефон:</p>
              </div>
              {contacts.phones.map((phone, i) => (
                <div key={`phone${i}`} className={`ml-8 font-light`}>
                  <a title={`Позвонить`} href={`tel:${phone}`}>
                    {phone}
                  </a>
                </div>
              ))}
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex mx-0.5 items-end`}>
                <Icons.Mail
                  w={6}
                  h={6}
                  className={`pl-1 text-center border-b border-${theme.text.contacts.color.main} text-${theme.text.contacts.color.main}`}
                />
                <p className={classes.contactsTitle}>EMAIL:</p>
              </div>
              {contacts.emails.map((email, i) => (
                <Text key={`email${i}`} className={`ml-8 font-light`}>
                  {email}
                </Text>
              ))}
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex mx-0.5 items-end`}>
                <Icons.Location
                  w={6}
                  h={6}
                  className={`pl-1 pt-0.5 border-b border-${theme.text.contacts.color.main} text-${theme.text.contacts.color.main}`}
                />
                <p className={classes.contactsTitle}>АДРЕС:</p>
              </div>
              {contacts.addresses.map((address, i) => (
                <div key={`address${i}`} className={`flex`}>
                  <Text className={`ml-8 font-light`}>{address.title}</Text>
                  {':'}&nbsp;
                  <Text className={`ml-1 font-light`}>{address.value}</Text>
                </div>
              ))}
            </div>
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex mx-0.5 items-end`}>
                <Icons.Clock
                  w={6}
                  h={6}
                  className={`pl-0.5 border-b border-${theme.text.contacts.color.main} text-${theme.text.contacts.color.main}`}
                />
                <p className={classes.contactsTitle}>ВРЕМЯ РАБОТЫ:</p>
              </div>
              <Text className={`ml-8 font-light`}>{contacts.workingHoars}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
