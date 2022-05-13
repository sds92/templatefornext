import React from 'react';
import { Text } from '../../lib';
import { Map } from '../';
import { useInView } from 'react-intersection-observer';
import { SectionTitle, SectionWrapper } from './components';

type ContactsProps = {
  theme: ITheme;
  data: { content: Section; contacts: IApp['contacts']; app: IApp };
  w: number;
};

const ContactsM1 = (props: ContactsProps) => {
  const { theme, w, data } = props;
  const { content, contacts, app } = data;
  const classes = {
    contactsTitle: `border-b font-bold border-${theme.borders.contacts.color.main} text-${theme.text.contacts.color.s1} w-full`,
  };
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <SectionWrapper id={content.id} theme={theme} w={w} sectionRef={ref} minH>
      <SectionTitle title={content.title as string} theme={theme} app={app} />
      <div
        className={`grow flex flex-col w-full items-center justify-center bg-${theme.bg.contacts.color.main} h-full`}
      >
        <div className={`w-full flex flex-col items-center sm:flex-row sm:gap-2 md:gap-10 my-2 `}>
          <div className={`zero:w-full lg:w-1/2 `}>
            <div className={`ml-auto shadow-md max-w-xl h-full aspect-square`}>
              {inView && <Map contacts={contacts} />}
            </div>
          </div>
          <div
            className={`flex w-full flex-wrap sm:max-w-xl sm:flex-col sm:w-1/3 md:w-5/12 p-2 mr-auto mt-10`}
          >
            <div className={`w-full my-1 flex flex-col`}>
              <div className={`w-full my-1 flex flex-col`}>
                <div className={`flex items-end`}>
                  <p className={classes.contactsTitle}>АДРЕС:</p>
                </div>
                <Text
                  className={`font-light`}
                >{`${contacts.addresses[0].title}: ${contacts.addresses[0].value}`}</Text>
              </div>
              <div className={`flex items-end`}>
                <p className={classes.contactsTitle}>TЕЛЕФОН:</p>
              </div>
              {contacts.phones.map((phone, i) => (
                <div key={`phone${i}`} className={`font-light`}>
                  <a title={`Позвонить`} href={`tel:${phone}`}>
                    {phone}
                  </a>
                </div>
              ))}
            </div>
            {/* @ts-ignore */}
            {contacts.requisites?.length > 0 && <div className={`w-full my-1 flex flex-col`}>
              <div className={`flex flex-col`}>
                <Text className={classes.contactsTitle}>РЕКВИЗИТЫ:</Text>
                <table className={`md:mr-auto zero:mr-auto`}>
                  {contacts.requisites?.map((requ, i) => {
                    return (
                      <tr key={`requ${i}`}>
                        <td className={`text-right `}>{requ.title}:&nbsp;</td>
                        <td>{requ.value}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>}
            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex items-end`}>
                <p className={classes.contactsTitle}>EMAIL:</p>
              </div>
              {contacts.emails.map((email, i) => (
                <Text key={`email${i}`} className={`font-light`}>
                  {email}
                </Text>
              ))}
            </div>

            <div className={`w-1/2 sm:w-full my-1 flex flex-col`}>
              <div className={`flex items-end`}>
                <p className={classes.contactsTitle}>ВРЕМЯ РАБОТЫ:</p>
              </div>
              <Text className={`font-light`}>{contacts.workingHoars}</Text>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactsM1;
